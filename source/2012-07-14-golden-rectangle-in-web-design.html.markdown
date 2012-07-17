---
title: The Golden Rectangle
date: 2012-07-14 01:20 +08:00
thumb: https://dl.dropbox.com/u/2281027/blog/g-ratio-mockup-sample-thumb.jpg
tags: design, css
---
I recall an episode in my life as a web designer where I'd continuously struggle (and most of the time fail) in doing layouts. I couldn't think of a way to place all the pieces together without making it fall apart. This all changed when I started learning the foundation for design (and aesthetics).

READMORE

If you've been doing a lot of digging into CSS frameworks like [Foundation](http://zurb.foundation.org), [Blueprint](http://blueprintcss.org/) and [Compass](http://compass-style.org), you'll noticed that they all have their own typography, color sets, and grid systems.

Design involves Mathematics
---------------------------

I used to think that being able to apply proportion and rhythm in design is measured by one's innate ability. However true for some people[^1], it turns out that you can be scientific/mathematical in this approach to attain a visually pleasing result[^gr].

[^gr]: Creativity still plays a vital role in most things.

Let's take a look at the [Golden Ratio](http://en.wikipedia.org/wiki/Golden_ratio).

The Golden Ratio
----------------

It basically consists of two numerical values. One which is wider than the other but in a way that is proportionate to its sum with its smaller other. We can describe this simply in a math equation:

    (a + b) / a = a + b

In web design, you can get the next proportionate neighbor by either multiplying or dividing its width value by 1.61803399. So for example, if you have 960px container, an ideal container for your content would be 593px since:

    container = 960
    content = container / 1.61803399
    content = 593.31...

and for the sidebar the value would be 366px since:

    content = 593
    sidebar = content / 1.61803399
    sidebar = 366.49....

We still end up with the original container width if add it up:

    sidebar + content = container
    593.31 + 366.49 = 959.8

Whipping out a calculator everytime you're prototyping a layout sounds tiresome, boring and certainly not fun. So what I did was to create a guide in Adobe Illustrator:

![Golden Grid Mock-up](https://dl.dropbox.com/u/2281027/blog/g-ratio-thumb.png)

If we take a look at the grid, You'll see that it's a series of squares repeating over in a spiral direction. In Mathematics, this is popularly known as the [Fibonacci Sequence](http://en.wikipedia.org/wiki/Fibonacci_number). This creates a predictable [pattern that the natural world is fond of](http://en.wikipedia.org/wiki/Patterns_in_nature). which explains, I think, the reason why humans are psychologically attracted to things that are proportionate.

![Golden Grid Highlighted](https://dl.dropbox.com/u/2281027/blog/g-ratio-highlighted-thumb.jpg)

From here, I'm able to quickly visualize and mock-up the placement of the elements. Here's a fast comp I came up with for this example:

![Golden Grid Mock-up](https://dl.dropbox.com/u/2281027/blog/g-ratio-mockup-sample.jpg)

I think it looks decent enough. Let's see what it looks like without the guide:

![Golden Grid Mock-up No-Grid](https://dl.dropbox.com/u/2281027/blog/g-ratio-mockup-sample-clean.jpg)

Not necesarrily an award winning layout but it works. 

So how do we apply this concept in front-end development? [Grids](http://en.wikipedia.org/wiki/Grid_(page_layout).

Grid
----

A grid system is extremely helpful in rapid design to html/css prototyping. By specifying the __total columns__, the __column width__, and the __gutter width__, it makes it easier for the front-end developer to scaffold everything in place. This is also a design requirement in [Responsive Web Design](http://en.wikipedia.org/wiki/Responsive_Web_Design).

We can compare website design (and development) to something like designing and building a house. If you start with the right foundation, your house tends to last longer. Not to mention that it generates confidence and security to the people living in it.

Where to start
--------------

I can only discuss this much. I highly recommend trying out [Blueprint](http://blueprintcss.org) which has a low learning curve and something that I've personally used in the past. A friend of mine suggested that the [Foundation](http://zurb.foundation.org) framework's good too.

I currently use [Compass](http://compass-style.org) and [Susy](http://susy.oddbird.net/) as my SASS/CSS framework.

Final Thoughts
--------------

Using grids can sometimes feel restricting. Especially if you're trying to be different with standard layouts. But it helps a lot with getting things done and has proven useful by generations. In the end, I stick with it. Not because I don't wanna try something new, but because I wanna get things done.


[^1]: Designers who can 'guestimate' a layout that still looks aesthetically proportionate.
