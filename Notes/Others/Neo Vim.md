# Neo Vim

**Neovim is a highly configurable text editor built to make creating and changing any kind of text very efficssient.**

Vim is a text editor which includes most commands from the Unix program "Vi" and many new ones.


---


## Commands

Here is a list of the most relevant commands: https://vim.rtorr.com/


---


## Plugins

You can add plugins to Vim to add extra functionality. Most people use a plugin manager to make plugin installation easy.

There are a variety of plugin managers we can use. I use the [vim-plug](https://github.com/junegunn/vim-plug) plugin manager.

To install the vim-plug plugin, run this command:

```bash
$ curl -fLo ~/.vim/autoload/plug.vim --create-dirs \
    https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
```


Add the `call plug#begin('~/.vim/plugged')` and `call plug#end()` lines in the __.vimrc__ file The plugins we install will be added between the two function calls.

```  vim
call plug#begin('~/.vim/plugged')

call plug#end()
```

Now installing plugins is as easy as adding the `Plug 'username/plugin-name'` string you find on GitHub in between the function calls.


**Example**

This is how I install [NERDTree](https://github.com/preservim/nerdtree) and [Asynchronous Lint Engine (ALE)](https://github.com/dense-analysis/ale).

Add these two lines in between the two `call plug#...` lines:

```
  Plug 'dense-analysis/ale'
  Plug 'preservim/nerdtree'
```

Save and exit the .vimrc file to make the changes take effect.

Now, in VIM type `:PlugInstall` to download and install the two plugins.


---