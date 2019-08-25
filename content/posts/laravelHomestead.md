---
title: "Vagrant & Laravel"
subTitle: "Setting up vagrant box with laravel using homestead."
description: "Avoid the pains and pit falls of setting up vagrant and laravel with homestead, trust me it's a rabbit hole 
you don't want to venture alone."
featuredImage: "../../static/laravel-vagrant.jpg"
url: "https://thomasmcdonnell.xyz/blog/vagrant-and-laravel"
date: 2019-08-23
---


## Laravel/Homestead VM Setup | [Offical Documentation](https://laravel.com/docs/5.8/homestead)
___

### Installing Virtualbox & Vagrant 
___

Navigate to the official [VirtualBox Download Page](https://www.virtualbox.org/wiki/Downloads) and download the official 
installer for your operating system.
Navigate to the official [Vagrant Download Page](https://www.vagrantup.com/downloads.html) and download, the official 
installer or for linux users the recommended binary, for your operating system.

> #### Note Linux Users
> DO NOT install vagrant using the linux package manager `sudo apt-get install <package_name>` linux comes shipped with 
VM vagrant file and the package manager will install to this files specs, meaning you may end up with an outdated 
version.

### Installing Homestead 
___

> #### Note Offical Documentation is Wrong
> if you are also following at the [official documentation](https://laravel.com/docs/5.8/homestead) you will notice the 
next step would be to add the homestead vagrant box `vagrant box add laravel/homestead`. Ignore this and skip, if you add 
the box manually it will install, in most cases, for a different provider i.e not VirtualBox. Instead we can skip this 
and allow vagrant to install the box automatically according to the provider we set in the Homestead.yaml file.

Install homestead by cloning the git repo 

+ `git clone https://github.com/laravel/homestead.git ~/Homestead`

Once the repo has been cloned change into the Homestead directory

+ `cd ~/Homestead`

>#### Note
>The master branch may not be the most stable version. It is therefore is recommended that you checkout the latest stable 
branch tag. You may check the latest releases [here](https://github.com/laravel/homestead/releases).

+ `git checkout v8.4.0` 

Next initalize the Homestead.yaml file by running one of the below commands depending on your operating system.

```bash
bash init.sh    Mac/Linux

init.bat        Windows
```

### Booting VM 
___

>#### Note
>Insure that you have ssh keys generated, if not you will need to generate these depending on you system check the documentation. 

Next we can run the `vagrant up` command from withing the ~/Homstead directory. This is important in relation to the step 
that was skipped earlier, at this point vagrant will look for the laravel/homestead box, if it can not be found it will 
aromatically install for our provider VirtualBox that is specified in the homestead.yaml file. If for some reason the network 
drops the download, simply run the `vagrant up` command again and it will continue to download from where it left off.

Once installed your virtual machine should be up and running, you can check this ssh

```bash
vagrant ssh     # to ssh into VM

exit            # to logout

```
### Configuring The Homstead.yaml File
___

Once you have checked that everything is up and running you will need to configure the homestead.yaml file and map your
desired folder that you wish to have mounted. 

+ open the homestead.yaml file in your text editor

```YAML
ip: "192.168.10.10"
memory: 2048
cpus: 1
provider: virtualbox

authorize: ~/.ssh/id_rsa.pub

keys:
    - ~/.ssh/id_rsa

folders:
    - map: ~/code
      to: /home/vagrant/code

sites:
    - map: homestaed.test 
      to: /home/vagrant/code/YOUR_APPLICATION_FOLDER_NAME/public

databases:
    - homestead

# ports:
#     - send: 50000
#       to: 5000
#     - send: 7777
#       to: 777
#       protocol: udp

# blackfire:
#     - id: foo
#       token: bar
#       client-id: foo
#       client-token: bar

# zray:
#  If you've already freely registered Z-Ray, you can place the token here.
#     - email: foo@bar.com
#       token: foo
#  Don't forget to ensure that you have 'zray: "true"' for your site.


```
##### Folders 

As can be seen from the above, if you are sticking to the defaults you may leave everything unchanged and swap in your 
application root folder name in place of YOUR_APPLICATION_FOLDER_NAME. The folders section defines location and name of 
the directory on your local machine that is to be mapped to a location on the host machine. Again these maybe changed if 
you wish but the shared folder names must match.

##### Sites

This section defines the DNS that will be mapped to the VM host application, this will act as a loop back address. The DNS name may be changed from the default
homestead.test if you wish, I advise you stick to the .test notation convention to ensure no ssl cert errors.

>### NOTE
> You will need to add the DNS & host IP to your host file. Simply navigate to the directory and add the IP and name `sudo 
vim etc/hosts`. Once added mac and linux users will need to flush the cache `sudo killall -HUP mDNSResponder`

##### Databases

This will be the database name that will be created on the virtual machine again this too maybe changed.

### Reloading VM with config changes
___

Once the correct folders have been mapped in the homestead.yaml file you will need to ensure the folder exists in the 
specified directory and has the correct read/write permissions. 

```bash 
cd ~
mkdir code && chmod 777 code

```

Once these correct permissions have been set on the mounted folder we simply reload the vm with the provision flag set
`vagrant reload --provision`.

Now your VM should be up and running correctly and you may ssh in and check that the folder was mounted correctly.

