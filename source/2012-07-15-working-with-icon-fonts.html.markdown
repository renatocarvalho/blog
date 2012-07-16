---
title: Working with Icon Fonts
date: 2012-07-15 17:59 +08:00
thumb: james.png
tags: css, workflow, code
---
We're entering into an age in computers where high definition displays are becoming mainstream. While not really an immediate concern for website owners since it's fairly new, some designers are adapting early such as myself. In this article, I'll be showing you how I managed to setup my workflow in testing, building and deploying icon fonts. This guide requires some intermediate knowledge in computers. READMORE

> Note: This guide requires getting our hands dirty in the terminal.

> Disclaimer: Most of what I'm writing here are lessons taught by experience. If there's a more efficient way, you can [tweet](http://twitter.com/jamesflorentino) me about it and i'll update this article and gladly credit you. 

Table of Contents
-----------------

1. [Required Applications](#required)
2. [Installation](#installation)
3. [Creating Icons](#create-icons)
4. [Creating the font library in Inkscape](#font-mapping)
5. [CSS and HTML Integration](#css-html-generation)
6. [Converting SVG files in FontForge](#converting-in-fontforge)

Required Applications {#required}
---------------------------------

* [Inkscape](http://inkscape.org/)
* [Fontforge](http://fontforge.sourceforge.net/)

Installation {#installation}
----------------------------

We'll be using Inkscape to create our font library. Inkscape to define our [glyphs](http://en.wikipedia.org/wiki/Glyph). Installing this is pretty straightforward so go ahead and download it. Make sure your system has X11 by the way.

Fontforge is going to be responsible for converting our SVG file to different formats (ttf, otf, woff, etc.). 

Installing FontForge can be _a bit_ tricky. You can either compile from source or use [homebrew](http://mxcl.github.com/homebrew/). I highly suggest the latter because it saves you the stress and horror of installing library dependencies yourself.

If you choose to go the less masochistic route, go install homebrew in your system. You can find more about it at their home page.

After homebrew's installed, let's go ahead and pull FontForge into our system:

    $ brew install fontforge

If that fails due to permission errors you need to use `sudo` (super user do), then enter your password.

    $ sudo brew install fontforge

Take note of the installation process. Because sometimes it fails due to a server response error. If that happens, just try again. Mine took 5 attempts.

Create your Icons {#create-icons}
---------------------------------

Now go ahead and create your icons in either Illustrator or Inkscape. They need to be flat and not have any transparencies and gradients. Once you're done, make sure each icon is a single path object because we're going to make that as a font. Save your document as SVG (`font-icons.svg`).

Creating the font library in Inkscape {#font-mapping}
-----------------------------------------------------

Open up Illustrator and create a 1000px by 1000px blank document. Then choose `File -> Import` or `ctrl+i` and choose the `font-icons.svg` file we saved earlier.

1. Open up `Text -> SVG Font Editor`.
2. On the SVG Font Editor panel, Click `new` then set the family name to `CoolFonts` (click the Font 1 name on the left side first)
3. Click on the `Glyphs` tab then click `Add Glyph`.
4. Let's name this one as `cool` and map this to `q`.
5. Select one of your icons in the document, scale to full then align it center bottom.
6. Then on the SVG font editor, click `Get curves from selection...`
7. Change the preview text value to `q` to see if successful.
8. If your icon appeared on the preview, then you're good to go. Go and save it as `coolfonts.svg`

Now let's proceed and add this new SVG file to our HTML and CSS File.

CSS and HTML integration {#css-html-generation}
-----------------------------------------------

In this section, I'll be using Chrome for debugging since it can use SVG as its font source. You should place your `font-icon.svg` inside a `/fonts/` folder in your project directory.

### CSS

    @font-face {
      font-family: "CoolFonts";
      src: url(fonts/coolfonts.svg) format('svg'); 
    }

    a.icon {
      font-family: 'CoolFonts';
    }

    a.cool.icon:after {
      content: 'q';
    }

### HTML

    <a class="cool icon"></a>

If that worked for you then great job! You make the universe proud.

You'll now be using SVG fonts for debugging. Open up your `/fonts/coolfonts.svg` in Inkscape and do some changes, and it'll reflect on your page when you refresh. Good deal. Now let's move on to converting them to font files.

Converting SVG files in FontForge {#converting-in-fontforge}
------------------------------------------------------------

[TTF support](http://caniuse.com/#search=ttf) is available to most browsers. So let's use this format for now. Open up your terminal again and change directory to your project.

    $ cd my_project/fonts/

Next, we'll create a [PerlScript](http://en.wikipedia.org/wiki/PerlScript) to run FontForge's CLI. Create a `convert.pe` file with your favorite text editor and type this in:

    #!/usr/local/bin/fontforge
    Open($1)
    Generate($1:r + ".ttf")

This script basically runs FontForge and performs the Open and Generate command with `$1` being the filename you'll be specifying later. Go ahead and save it then switch back to your terminal and type in:

    $ fontforge -script convert.pe fonts/coolfonts.svg

If all things turn good, you'll be able to see the generated `coolfonts.ttf` file. Go back and edit the css file we had earlier and update it with:

    @font-face {
      font-family: "CoolFonts";
      src:
        url(fonts/coolfonts.svg) format('svg'),
        url(fonts/coolfonts.ttf) format('ttf');
    }

    a.icon {
      font-family: 'CoolFonts';
    }

    a.cool.icon:after {
      content: 'q';
    }

To see if this worked, try viewing your page in either Opera or Firefox (both of which doesn't support SVG as fonts). If all is good, then you'll see your icon there instead of the 'q' character.

So, whenever you need to update or add icons to your coolfonts.svg file:

1. Open up your `coolfonts.svg` file in InkScape.
2. Perform necessary edits. Use Chrome to preview updates done in SVG.
3. Run the fontforge command once you're done with the changes.

To make things easier, let's create a `makefile` and put the fontforge script:

    all:
      fontforge -script convert.pe fonts/coolfonts.svg

Now whenever we need to publish the SVG files to TTF, all we have to do is type `make` in the terminal and it'll perform the fontforge script we made earlier.

Final Thoughts {#final-thougths}
--------------------------------

Well that certainly wasn't a walk in the park, especially if you didn't have command line experience before this. But if ever you reached all this way, congrats for levelling up your technical experience and for not giving up. Now be proud of yourself. Go out and have beer or something.
