#!/bin/bash
#stylus
stylus -m < stylus/style.styl > style.css
#haml
for f in $(ls haml/ | egrep *.haml); do
	#compiles all the haml files in the haml/ directory into the base directory
	#as html files.
	haml "haml/$f" "${f%.haml}.html"
done
