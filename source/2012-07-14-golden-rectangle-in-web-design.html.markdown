---
title: The Golden Rectangle
date: 2012-07-14 01:20 +08:00
thumb: http://i.imgur.com/Q9hhx.jpg
tags: design, css
---
I recall an episode in my life as a web designer where I'd continuously struggle (and most of the time fail) in doing layouts. I couldn't think of a way to place all the pieces together without making it fall apart. This all changed when I learned about grids.

READMORE

If you've been doing a lot of digging into CSS frameworks like [Foundation](http://zurb.foundation.org), [Blueprint](http://blueprintcss.org/) and [Compass](http://compass-style.org), you'll notice that they all have their own typography, color sets, and grid systems.

Design and Mathematics
----------------------

I used to think that being able to apply proportion and rhythm in design is based on one's innate ability (and/or experience). However true for some people[^1], it turns out that you can be scientific/mathematical towards this problem and still attain a visually pleasing result[^gr].

[^gr]: While creativity still plays a vital role in most things, technical knowledge is essential too.

Let's take a look at the [Golden Ratio](http://en.wikipedia.org/wiki/Golden_ratio).

The Golden Ratio
----------------

It basically consists of two numerical values. One which is wider than the other but in a way that is proportionate to its sum with its smaller other. We can describe this simply in an equation.

    (a + b) / a = a + b


In web design, you can get the next proportionate element by either multiplying or dividing its width value by 1.61803399. So for example, if you have 960px container, an ideal container for your content would be 593px since:

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

![Golden Grid Mock-up](http://i.imgur.com/r5Y3I.png)

If we take a look at the grid, You'll see that it's a series of squares repeating over in a spiral direction. In Mathematics, this is popularly known as the [Fibonacci Sequence](http://en.wikipedia.org/wiki/Fibonacci_number). This creates a predictable [pattern that the natural world is fond of](http://en.wikipedia.org/wiki/Patterns_in_nature). which explains, I think, the reason why humans are psychologically attracted to things that are proportionate.

![Golden Grid Highlighted](http://i.imgur.com/eq99j.jpg)

From here, I'm able to quickly visualize and mock-up the placement of the elements. Here's a fast comp I came up with for this example:

![Golden Grid Mock-up](http://i.imgur.com/pPcZq.jpg)

I think it looks decent enough. Let's see what it looks like without the guide:

![Golden Grid Mock-up No-Grid](http://i.imgur.com/v8Gg9.jpg)

Not necesarrily an award winning layout but it works. 

Grid
----

A grid system is extremely helpful in rapid design to html/css prototyping. By specifying the __total columns__, the __column width__, and the __gutter width__, it makes it easier for the front-end developer to scaffold everything in place. This is also a design requirement in [Responsive Web Design](http://en.wikipedia.org/wiki/Responsive_Web_Design).

I suggest trying out css frameworks like [Blueprint](http://blueprintcss.org) which has a low learning curve and something that I've personally used. A friend of mine suggested that the [Foundation](http://zurb.foundation.org) framework's interesting to look into.

I wish I could discuss more about this, but the topic is so eclectic to elaborate.

Final Thoughts
--------------

I personally think that Using grids can sometimes feel a bit restricting. Especially when trying to be different from standard layouts. But then it also trains the designer to become disciplined in terms of his workflow and creates a middleground framework that teams can use to convey their ideas collaboratively.


[^1]: Designers who can 'guestimate' a layout that still looks aesthetically proportionate.
