---
layout: post
title: Grooming Vim for development
location: Utrecht, NL
tags: 
 - work
 - vim
 - java
 - dotfiles
 - vim-plugins
type: post
published: true
dutch: false 
---

For some time now, I'm on a mission to see if I can get myself to work with Vim for software development. At work I've been coding a lot last year. Most of it was scattered by the use of numerous editors and IDE's. I've been coding in Eclipse, IntelliJ, Sublime2, [Atom](http://www.atom.io) and good old vim. Due to the fact I've been using a lot of different editors/IDE's in a short period of time, I've noticed that I'm constantly held up because I'm searching for the correct keyboard shortcut for pieces of functionality. That sucks..that needs to change..So I set myself the goal to work with vim..always!

I've been familiar with Vim for quite a few years, but I always found it to be a LOT of work (and practice) to get to a point where I'm faster with Vim than with a full-featured IDE. After reading [some](http://stevelosh.com/blog/2010/09/coming-home-to-vim/) [blogs](http://www.lucianofiandesio.com/vim-configuration-for-happy-java-coding) on the subject, I'm inspired to give it another shot. I'm reading up on vim in [this book](http://www.amazon.com/dp/059652983X/ref=cm_sw_su_dp) and decided to do all my work and other typing in vim.

Vim delivers much of its handyness right out of the box, but it can be extended by installing plugins. Most of the plugins I use concern opening and closing files in an easy fashion. Furthermore I found it quite useful to be able to access version control (git) from within vim. I've been diving into a number of these plugins. I'll elaborate on the most useful ones for me.

### CTRL P
One of the things I use most in any IDE or editor is a shortcut to open a specific file by name. Most of the time I know the filename I'm trying to edit and just want to open that file without needing to look it up in a filetree. The CTRL-P plugin enables me to push CTRL-P (duh) and start typing a filename. The plugin will walk through the files in the current folder and present me with a list of files that match the given input. 

I haven't tested any other plugins that provide this kind of functionality; so far CTRL-P is fast and works fine for my purposes. I configured the plugin to exclude a couple of dirrent directorynames, like 'target' directories (I'm developing java for work, meaning lots of target-folders), which keeps the output from the plugin clean and useful.

### NERDTree 
When working in a project I'm always confronted with several git repo's which each have their own filetree. As in every other IDE it is useful to be able to view the filetree in the editor. The NERDTree plugin does just that: it provides a sidebar which contains a list of all the files in the current directory. I'm still learning about all its features, but I'm already using bookmarks to be able to switch projects easily.

![NERDTree plugin](/img/pics/nerdtree.png "NERDTree plugin in action")

You can find NERDTree [here](http://www.github.com/scrooloose/nerdtree).

### vim-fugitive
Most of the codebases at work are stored in git repo's. When developing I mostly find myself switching terminals to check the git status of the repository. Vim-fugitives makes this obsolete, as it offers git control from within vim! Awesome! Now, when I want to see the current git status I can just type ':Gstatus' and a neat window appears that shows me the status and even lets me interact with it. If I want to 'git add' a file I can just use the movement keys in vim to select the filename and press '-'. 

Vim-fugitive really saves me lots of time! Check it out [here](https://github.com/tpope/vim-fugitive).

### Goyo
Sometimes I find myself in the situation that I need some music on my head and a clear workspace to focus on the current task. The Goyo plugin enables me to put away all the bells and whistles and focus on the current task at hand in vim. A picture says it all: 

![Goyo plugin](/img/pics/goyo.png "Goyo plugin: enabling a 'zen' workspace")

## Still in need of..
Considering that I'm back on Java-based projects I'm missing pieces of functionality that are default in Eclipse / IntelliJ. I'm talking things like autocomplete and auto-imports, mostly. 

When coding I always find myself in need of searching through the current project. I just found out that Ack is perfect for this, and that there's an [Ack plugin](https://github.com/mileszs/ack.vim) available for vim. 

Furthermore, I want to take more advantage of code snippets. For instance when creating a class or defining constants. I haven't found a plugin that suits me yet. I've tried snipmate and ultisnip, but am not yet convinced. I might need to spend more time with one of the two to get used to using snippets. 

## .files
I'm still searching for powerful vim movements, shortcuts and plugins to be as fast as possible. Take a look at my [dotfiles](https://github.com/ronaldvz/dotfiles) to see my vim config. Note that it's a work in progress, but I guess that never ends.
