---
title: "Implementing a Reactivity System"
subTitle: "Understanding reactive programming using javascript"
description: "A deep dive and walk through of how a framework like Vue implements its reactivity system in plain old javascript that we all know."
featuredImage: "../../static/js.jpg"
url: "https://thomasmcdonnell.xyz/blog/implementing-a-reactivity-system"
date: 2019-09-16
---
<style>

.custom-block.tip {
    background-color: #f3f5f7;
    border-color: #68d391;
    padding: .1rem 1.5rem;
    border-left-width: .5rem;
    border-left-style: solid;
    margin: 1rem 0;
}

.custom-block.warning {
    background-color: rgba(255,229,100,.3);
    border-color: #e7c000;
    padding: .1rem 1.5rem;
    border-left-width: .5rem;
    border-left-style: solid;
    margin: 1rem 0;
    color: #6b5900;
}

.custom-block.danger {
    background-color: #ffe6e6;
    border-color: #c00;
    color: #4d0000;
}

p a {
    color: #68d391;
}

p a:hover {
    text-decoration: underline;
}

table {
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #68d391;
  text-align: left;
  padding: 8px;
}

th {
    background-color: #68d391;
}

p ul {
    padding-left: 20px;
    margin-left: 20px;
}

p ul li {
    list-style: circle;
}

p img {
 display: none;
}

</style>

![alt text](../../static/js.jpg "aws console")

So just a small disclaimer before we get started, this is not how every framework implements it's reactivity system, instead
its a deep dive into how VueJs solves this problem using no more than plain old javascript. A relative understanding of ES5 
and ES6 is required to understand some of the code that will be shown, but I am mindful of the fact that not everyone spends 
their Saturdays learning the ins and outs of javasScript, so I will do my best to explain in as much detail as possible. 


So let's get into it, if you have not read my previous post I strongly suggest that you check it out [here](https://thomasmcdonnell.xyz/blog/implementing-a-reactivity-system/).
Not just to help out my analytics and post views but I cover a lot of the concepts that we will be implementing 
here in this blog post.

You may remember that Vue uses a variation of getters and setters, that is Vue takes the object that is created and walks through 
its properties converting them into getters & setters. But just how is this achieved? Remember Vue does things in no more 
complexity than javascript so how could we do it in plain old JS? Well that would be through the javascript ```Object.defineproperty()``` 
api which, if you are not familiar with, you can read in more detail in the [mozilla docs here.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)


```Object.defineProperty()``` takes an object as the first argument, a key as the second and a descriptor object as the third.
The key maybe an existing key or a non existing key, confused? Well if the key does not exist then it will be created for you as 
long as that object is configurable. This leads nicely into the third argument, the descriptor object. The descriptor object 
maybe made of one of two sets of properties, either DATA props or ACCESSOR props.
 <div class="warning custom-block">
 <p>It is really important to note that you cannot implement a combination of the two, if you use the get and set 
 you forego value in place of get and obviously by default writable is true through set.</p>
 </div>

| DATA       | ACCESSOR          |
| ------------- |:-------------:|
| Value     | Get               |
| Writable  | Set               |
| Configurable | Configurable   |
| Enumerable | Enumerable       |

<span id="getters"></span>
The accessor group is the one that most interests us in the context of a reactivity system. Take note of the get and set descriptors,
which in practice are functions `get => overrides the access` and `set => overrides the assignment`. So lets just take a 
look at how we could do this in javascript. Think of a function that takes an object and walks through it's properties 
converting them to getters and setters, what would that look like? 

```javascript
function convert (obj){
    // we walk through the obj props 
    Object.keys(obj).forEach(key => {
        // here we have a closure which is important 
        // as we must assign _val to the object key 
        // otherwise we will get an undefined on the first get 
        // and be unable to set to the original key 
        let _val = obj[key];
        
        Object.defineProperty(obj, key, {
            enumerable: true,
            configurable: true,
            get () {
                return _val;
            },
            set (newVal) {
                _val = newVal;
            }
        });
    });
}
```

Great so we are now able to override and introduce our own implementation of access and set for any number of properties 
in an object. If you haven't guessed it yet, this gives us a chance to hook into these access and set methods now we just 
need away to track updates and reflect appropriate changes within our code. This is called dependency tracking, but before 
we get into that lets take a look at the problem we are trying to solve. Let's look at some procedural javascript
code. 

```javascript
let price = 10;
let numOfItems = 1;
let totalPrice = price * numOfItems;

console.log(totalPrice);
``` 

```bash
output
> 10
```

 
 Ok that looks pretty normal, but what happens when we update the price of an item? 
 In the real world we would want this to be reflected in total price right?

```javascript
price = 20

console.log(totalPrice);

```
```bash
output
> 10 
```

So what we need is reactivity, we need a way to track when `price` and `numberOfItems` is changed and we need to be able to
reflect that change in the `totalPrice`. If we think about the code above what we really need to do is find a way to store the 
`totalPrice` after it is run so as if needed i.e if the variables `price` and `numOfItems` changes we can run the code again. 
We can think of this abstractly as associating a function or computation to a dependency. This computation can be considered a 
subscriber to the dependency. This looks a lot like state management, so lets abstract this out into a class and 
see what that would look like. 

 <div class="tip custom-block">
 <p>
 We are also going to need a way to take a computation, register it as a dependancy and track the active state of 
 that computation. Remember when in that computation function this is the reactive zone.
 </p>
 </div>

```javascript
class Dep {
    constructor () { 
        // dependencies tracked as internal class state
        this.subscribers = new Set();
    }
    
    depend () {
        if(target && !this.subscribers.has(target)) {
            // we register the target computation as a subscriber
            console.log('subscribing target'); // -> here we are actually causing side affect
            this.subscribers.add(target);
        }
    }
    
    notify () {
         // rerun all subscriber functions
         console.log('Notifying subscribers of update'); // -> here we are actually causing side affect
         this.subscribers.forEach( sub => sub() );
    }
}

const dep = new Dep();

let price = 10;
let numOfItems = 1;
let totalPrice = 0;
 
let target = null

/*
*
*  The watch function will act as that away to track a computations reactivity 
*  and register the computation as a dependency.
* 
*/

function watch (func) {
    
    function wrappedTarget () {   
        // we register the wrappedTarget as the target so as
        // when the dependency changes and the function is called
        // again the dependency tracking works on all future iterations 
        target = wrappedTarget;
        dep.depend();
        func();
        target = null; 
    }
    wrappedTarget();
}

// set the computation to an anonymous function 
watch (() => { totalPrice = price * numOfItems });

console.log(totalPrice); // --> output: 10

price = 20; 

// we change state so now we must notify and rerun all 
// subs
dep.notify()

console.log(totalPrice); // --> output: 20 
``` 

 <div class="tip custom-block">
 <p>
If this has all clicked with you on the first pass, well done! It took me some real time, just running the above code 
in different ways until finally it all started to take shape. So if this all still looks some what confusing, don't 
worry, if you have node installed on your system simply copy the above and load it into node so you can play around and 
log stuff out as needed. If you don't have node I recommend <a href="https://playcode.io/">playcode.io</a> which is a free online 
javascript sandbox where you can do the same. 
</p>
</div>

Great so if your with me this far you have probably guessed how this is all going to fit together into a vue style reactivity 
system. Remember [those getters & setters](#getters) we implemented earlier? Remember how we were able to 
hook into and override the access and assignment of properties? Well let's combine the two segments of code now so that inside 
those getters and setters we can actually override the default behavior to register dependencies so that when ever state is
mutated we can ensure the changes are reflected in the computation. 


```javascript

class Dep {
    constructor () { 
        // dependencies tracked as internal class state
        this.subscribers = new Set();
    }
    
    depend () {
        if(target && !this.subscribers.has(target)) {
            // we register the target computation as a subscriber
            this.subscribers.add(target);
        }
    }
    
    notify () {
         // rerun all subscriber functions
         this.subscribers.forEach( sub => sub() );
    }
}

function convert (obj){ 
    Object.keys(obj).forEach(key => { 
        // Each property gets a dependency instance
        const dep = new Dep()

        let _val = obj[key];
        
        Object.defineProperty(obj, key, {
            enumerable: true,
            configurable: true,
            get () {
                dep.depend(); // register subscriber
                return _val;
            },
            set (newVal) {
                _val = newVal;
                dep.notify(); // rerun all subscribers
            }
        });
    });
}

const state = {
    price: 10,
    numOfItems: 1
}
let target = null

function watch (func) {
    function wrappedTarget () {   
        // we have no need to call dep.depend here now
        // as we have overriden the accessor method
        target = wrappedTarget;
        func();
        target = null; 
    }
    wrappedTarget();
}

// walk through and convert the state properties
// to getters & setters 
convert(state);

// set the computation to an anonymous function
watch (() => { state.totalPrice = state.price * state.numOfItems });

console.log(state.totalPrice);

state.price = 20;

console.log(state.totalPrice);

state.numOfItems = 10;

console.log(state.totalPrice);
```

```bash
output
> 10
> 20
> 200
```

Notice how we now have no need to call `dep.depend()` from within the watch function as we have overridden the accessor 
to do so. Also note that we no longer need to call `dep.notify()` after a state change as we have overridden the 
assignment to do this. When ever we access a state property we register it as a dependency and on state property change we
notify all subscribers of that dependency that the state has now changed.


Congratulations you have just implemented a reactivity system, all be it a rudimentary version, a reactivity system none the less.
In truth this is not too dissimilar from the VueJs implementation, the main difference being a number of edge cases that have not been 
taken into account such as garbage collection (if the execution no longer depends on a dependency) and how to deal with arrays or newly added properties.
If you would like to see more about how this is all implemented you can always take a look the [source code](https://github.com/vuejs) for the vue project.


Some honorable mentions and helpful links that I used to understand and write this article: 
* [Vue Js Official Documentation]() an absolute pleasure to read as far as docs go.
* [Vue mastery course](https://www.vuemastery.com/courses/advanced-components/build-a-reactivity-system) the reactivity 
section is free to watch and I used a variation of their example in this article.
* [Vue Source Code](https://github.com/vuejs) for a deeper look and understanding. 
* [MDM Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) 
for a detailed description of the Object.defineProperty API.

<br>
Don't forget to like, share and leave a comment :)
