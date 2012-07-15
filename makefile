all:
	middleman -p 1234

compile:
	middleman build

fonts:
	fontforge -script convert-fonts.pe source/images/jamesicon.svg
