---
layout: post
title: Vim; new keybindings
location: Utrecht, NL
tags: 
- vim
- dotfiles
date: 2015-05-23 20:15:58
dutch: false
comments: true
---
In my [my last post]({% post_url 2014-03-28-grooming-vim-for-java %}) I've described some of the features and plugins I use in Vim. Last week, I took another dive into my .vimrc file and made a number of changes which I'm quite thrilled about. I was in a mood to share, hence this post. 

## Leveraging the comma
After watching a couple of nice [videos on Vim by Derek Wyatt](http://derekwyatt.org/vim/tutorials/) (thank you for those, awesome!), I'm now using comma as a shorthand key for many things. I've added a number of keybindings to make my life easier:  

{% highlight vim %}
" Some keybindings for utilizing vim-fugitive (plugin that provides git functionality in vim) 
nmap ,gs :Gstatus<CR>
nmap ,ge :Gedit<CR>
nmap ,gw :Gwrite<CR>
nmap ,gr :Gread<CR>
nmap ,gd :Gdiff<CR>
nmap ,gc :Gcommit<CR>

" Mappings that provide easy access to .vimrc file and a nice way to source it directly
:nmap <silent> ,ev :e $MYVIMRC<CR>
:nmap <silent> ,sv :so $MYVIMRC<CR>

" Key for toggling search highlighting.
:noremap ,h :set hlsearch! hlsearch?<CR>
{% endhighlight %}
