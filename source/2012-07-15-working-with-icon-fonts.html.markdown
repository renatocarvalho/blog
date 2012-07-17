---
title: Working with Icon Fonts
date: 2012-07-15 17:59 +08:00
thumb: http://i.imgur.com/PYDvI.jpg
tags: css, workflow, code
---
Thanks to high pixel density devices like the 3rd generation iPad and the new MacBook Pro with Retina display, it encouraged me to find solutions on how to make my icons look crisp.

Some suggested creating two sets of images, while others use the `<svg>` tag. I ended up choosing the font icon route. A solution in which you create a font library with your icons as glyphs [^1] and then use them as fonts in the `@font-family` css rule.

SVG looks nice, but I need to be able to minimize http requests [^foot] and avoid clutter my HTML templating with a bunch of `<svg>` tags. So far was I able to create my own workflow and that's our topic of this article.

[^1]: You can see an example of this technique in [FontAwesome](https://github.com/FortAwesome/Font-Awesome)'s [demo page](http://fortawesome.github.com/Font-Awesome/).
[^foot]: Similar to how we [sprite](http://www.w3schools.com/css/css_image_sprites.asp) our PNG icons.

READMORE

> Disclaimer: Most of what I'm writing here are lessons taught by experience. If there's a more efficient way, you can [tweet](http://twitter.com/jamesflorentino) me about it and i'll update this article and gladly credit you. We're also going to use the command a lot.

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

We'll be using Inkscape to define our [glyphs](http://en.wikipedia.org/wiki/Glyph) in an SVG file. Installing this is pretty straightforward so go ahead and download it [^note].

[^note]: Installing this requires X11 in your machine if you're on a Mac OS.

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

Now go ahead and create your icons in either Illustrator or Inkscape. They need to be flat and not have any transparencies and gradients. Once you're done, make sure each icon is a single path object because we're going to make that as a font. Save your document as SVG (`icons-lib.svg`).

Creating the font library in Inkscape {#font-mapping}
-----------------------------------------------------

Open up Illustrator and create a 1000px by 1000px blank document. Then choose `File -> Import` or `ctrl+i` and choose the `icons-lib.svg` file we saved earlier.

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

In this section, I'll be using Chrome for debugging since it can use SVG as its font source. You should place your `coolfonts.svg` inside a `/fonts/` folder in your project directory.

Next, we'll write our CSS and HTML code.

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

> Note: Using SVG in the `@font-face` rule will only in Chrome.


My workflow now is: I'll change something in the SVG file and refresh my page to see the changes. If I still need to do something, I hop back to Inkscape, make the necessarry changes, switch back to Chrome and refresh the page.

Once I'm happy with the result, i'll then convert the SVG file into a font file.

Converting SVG files in FontForge {#converting-in-fontforge}
------------------------------------------------------------

[TTF support](http://caniuse.com/#search=ttf) is available on most browsers. So let's use this for now. Open up your terminal again and change directory to your project.

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
3. If all looks in place, run the FontForge script to generate the font file.
4. Push to production/staging.

To make things easier, let's create a `makefile` and put the fontforge script:

    all:
      fontforge -script convert.pe fonts/coolfonts.svg

Now whenever we need to publish the SVG files to TTF, all we have to do is type `make` in the terminal and it'll perform the fontforge script we made earlier.

Final Thoughts {#final-thougths}
--------------------------------

Well that certainly wasn't a walk in the park, especially if you didn't have command line experience before this. But if ever you reached all this way, congrats for levelling up your technical experience and for not giving up. Now be proud of yourself. Go out and have beer or something.

> Laugh and the world laughs with you, snore and you sleep alone.
