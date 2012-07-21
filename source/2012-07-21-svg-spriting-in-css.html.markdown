---
title: Spriting SVG
date: 2012-07-21 20:52 +08:00
thumb: http://i.imgur.com/qb5Ps.png
tags: css, code
---
As a follow up from my previous article about my workflow in implementing [icon fonts in websites](http://blog.jamesflorentino.com/2012/07/15/working-with-icon-fonts.html), today I'll be discussing about using SVG as background images in CSS.

If you're familiar with [atlassing](http://en.wikipedia.org/wiki/Texture_atlas) (or CSS spriting), the process can be done the same way with SVGs. Unlike the icon fonts technique, you're not bound to one color. You can use gradients, clipping masks, and transparencies while still keeping your mark-up and CSS clean (no `<SVG>` tags!).

READMORE

Here's how my SVG texture sheet looks like:

![SVG Elements in Inkscape](http://i.imgur.com/OQ9A7.png)

I chose Inkscape as my vector editor because it's free and enables me to edit the XML tree inside the program. My only complain would be the coordinates system since it starts from bottom left, but let's leave that for another topic.

Things to note when laying out your vector elements in your SVG sheet file:
- Round the values for the coordinates (x, y) and dimensions (width, height).
- Convert all text objects into path.
- 

### HTML and CSS

Our basic mark-up:

    <link rel="stylesheet" href="style.css" />

    <section>
      <h1 class="logo">Atlantis</h1>
      <ul>
        <li><a class="profile icon"></a></li>
        <li><a class="contact icon"></a></li>
        <li><a class="close icon"></a></li>
      </ul>
    </section>


Let's define the CSS rules. If you're implementing a spritesheet for multiple elements, it's best practice to have one rule with multiple selectors.

    h1.logo,
    .icon {
      background-image  : url(sprites.svg);
      background-repeat : no-repeat;
      overflow          : hidden;
    }

Now the texture is applied to the affected DOM elements, let's proceed to defining their width, height and background position.

Starting with the logo:

    h1.logo {
      width               : 190px;
      height              : 200px;
      background-position : 0 0;
    }

then the icons:

    .icon {
      width       : 60px;
      height      : 50px;
    }

    .icon.profile {
      background-position: 0px -200px; }
    
    .icon.contact {
      background-position: 0 -250px; }

    .icon.close {
      background-position: 0 -300px; }

If we put it all together:

<div style="overflow: hidden; width:100%; height: 450px;"><iframe width="100%" height="450" src="http://bl.ocks.org/d/3156125/" frameborder="0"> </iframe></div>

If you're on a high-density display, you can view this [live sample](http://bl.ocks.org/d/3156125/)


What this technique accomplishes
--------------------------------

Spriting SVGs in CSS benefits us two things:

- Ensure the elements are crisp when viewed from high-density displays like the iPad 3 and rMacBook Pro.
- Minimize http requests for improving load time (one SVG sheet to rule them all!).

[^1]: Using the `background-size` property.
[^2]: Serving static files depending on the user agent.


Final Thoughts
--------------

It's going to be an expensive future for web design projects. In a sense that it would require more time and skill set in getting things done. I guess being "retina-ready" isn't much of a deal for the average user since it's fairly new, but it won't be long 'til you hear from clients saying their websites look blurry in their high-density laptops and tablets.

Obviously, we're still confined to bitmap images for intricately detailed graphics. If you do pixel-perfect work for the web (e.g. detailed 3d icons), this will really bother you. You'll have to consider doing a 4x version to make it look sharp on high-resolution displays __then__ do the necessary client-side[^1] or server-side[^2] adjustments.
