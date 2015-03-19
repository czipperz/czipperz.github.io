#!/bin/bash
#stylus
stylus < stylus/style.styl > style.css #-u autoprefixer-stylus -m stylus/style.styl > style.css
#haml
for f in $(eval ls haml/ | egrep *.haml); do
	#compiles all the haml files in the haml/ directory into the base directory as html files.
	haml "haml/$f" "${f%.haml}.html"
done
