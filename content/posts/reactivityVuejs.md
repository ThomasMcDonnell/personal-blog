---
title: "Reactive Programming in Vue"
subTitle: "Understanding reactive programming through VueJs."
description: "A brief and high level overview of reactive programming. Supercharge your frontend with VueJs's implementation of asynchronous data streams."
featuredImage: "../../static/VueJs.jpg"
url: "https://thomasmcdonnell.xyz/blog/"
date: 2019-08-31
---

# Reactive Programming in VueJs


First things first, just what the hell is meant by reactive programming and why should you even care? Well I'll
be honest that's not such an easy question to answer, nor is it one that I am particularly qualified to give, but sure here goes.


In my search for answers I heard a lot about RxJs and how this is reactive programming, well not quit so. It is reactive but
its just a library at the end of the day. Reactive, in this context, is asynchronous data streams WTF :) Say with me for a second,
streams are simply a sequence of ongoing events ordered in time that offer hooks with which to observe it. The championed 
example for this is a hover state, think of a simple button on a web page, the moment your mouse hovers on that button
an asynchronous data stream occurs while its transitioning through to its final end state. The steam therefore is observable 
from the start, points in between and the end.


Ok sounds good so far but why is this a thing? Well it becomes super easy to update state in reaction to events that occur,
that is the beautiful abstraction that frameworks like VueJs offer. So now we know what reactivity means and catch a glimpse 
of why its useful, but how is it achieved. Well Vue is pretty unique in this regard, it uses a variation of getters and setters. 
Vue takes the object that is created and walks through its properties converting them into getters/setters.

```vue
new Vue({
    data: {
        reactive: 'I am reactive' // this property has getters/setters
    }
})
```

It's important to note that Vue cannot detect property addition or deletion, so we create this object to keep track of it. 
We need that object in order for it to set up that reactivity system or getters and setters.


Are you with me so far? So that brings me on to watchers, each component has a watcher instance. The properties touched
by the watcher during render are registered as dependencies, when the setter is triggered it lets the watcher know and causes
the component to re-render. Remember we are using a virtual DOM here, calculations in JavaScript are relatively cheap but 
accessing the DOM directly is not. This is why Vue takes the approach of doing as much as humanly possible in the virtual 
DOM before actually going to the DOM itself.


The Vue instance is the middle man between the DOM and the business logic, it manages everything in no more complexity than javascript.
So watch updates the DOM only when it is required, by only updating the DOM for the things that need to be changed we see a massive speed and performance 
boost. Watchers therefore are really great for asynchronous updates as they are constantly watching the component for changes.

```vue
<template>
    <div id="app">
        <input type="number" v-model.number="counter">
    </div>
</template>

new Vue({
    el: '#app',
    data () {
        return {
            counter: 0
        },
        watcher: {
            counter() {
                console.log('counter has been updated')
            }
        }
    }
});
```
> Yes the watcher needs to be named the same as the property unlike computed's when watching a property you trigger a method on change, 
we have access to the new value and the old value, so we can also gain access to nested values with 'deep'.


This is a really powerful concept and one that is some what unique to VueJs. To really see this we need to take a small dive 
into how frameworks like React (Which is not reactive surprisingly) and Angular do things (mostly a comparision of render v template compilation). 


React uses a virtual DOM heavily with JSX and is probably why it is so popular because you get the full expressiveness of a turning complete programming language within
your views through the use of JSX. JSX allows you to treat the vue as data, when you return a component it always returns the 
virtual DOM tree that represents the current state of your component. This however is obviously expensive as React needs to walk through 
the entire virtual DOM tree, performing recursive diffs until finally the data prop is updated. So this means the standard cost 
is relative to the view not the number of nodes that may change. If your still with me you might already be starting to see how VueJs really 
is unique in its approach, if not, not to worry I'll come to it later. 


Angular in comparision is a pure template based solution, that is they compile templates into 
lower level instructions for a greater raw performance boost than Reacts direct render instructions. However, you do loose the 
expressiveness of JSX as you are constrained by the template syntax itself. 


So back to VueJs, remember Vue has a virtual DOM but it also has a template compilation, Vue actually compiles templates into
virtual DOM. Vue lives comfortably in the middle, you can use render functions if you wish or need or simply rely on templates.
But the real magic is under the hood, as stated Vue uses a virtual DOM and as such a diffing algorithm is used just as in React. The 
difference however is in the implementation, rather than performing a recursive diff on the entire node tree, Vue only watches those's nodes in 
which data may change. The view is split into blocks, nodes of which contain no dynamic data and a list of nodes which upon render 
are checked (diffed). This is makes Vue super fast in comparision to React, but also still gives you the flexibility of building complex 
logic into your views. 


I hope you enjoyed this article, if you would like to read more on VueJs I always recommend the doc's as they are very beginner 
friendly. Also worth a look is [Evan You's talk on Vue.js: Seeking the Balance in Framework Design | JSConf.Asia 2019](https://www.youtube.com/watch?v=ANtSWq-zI0s&t=1282s) which takes a
dive into both React and Template based frameworks in comparision to Vue.   
  
