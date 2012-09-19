all:
	bundle exec middleman -p 1234

compile:
	bundle exec middleman build

fonts:
	fontforge -script convert-fonts.pe source/images/jamesicon.svg
