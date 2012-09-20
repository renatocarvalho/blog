all:
	bundle exec middleman -p 1234

compile:
	bundle exec middleman build
	git add .
	git commit -am "updates"
	git checkout gh-pages
	make
	git add .
	git commit -am "updates"
	git checkout master
	git push

fonts:
	fontforge -script convert-fonts.pe source/images/jamesicon.svg
