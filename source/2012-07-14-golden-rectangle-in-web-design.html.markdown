---
title: The Golden Rectangle
date: 2012-07-14 01:20 +08:00
tags: design, css
---
There was a time in my life as a web designer where I'd have a really difficult time doing layouts because I couldn't think of a way to place all the required elements together without making it look like it's going to fall apart any second. Thankfully, I finally found a solution to my problem. READMORE

If you've been doing a lot of digging into CSS frameworks like [Foundation](http://zurb.foundation.org), [Blueprint](http://blueprintcss.org/) and [Compass](http://compass-style.org), you'll noticed that they all have their own typography, color sets, and grid systems.

## Design with Mathematics

I used to think that being able to apply proportion and rhythm in design is merely based on personal judgment and one's innate ability. However true for some people[^1], it turns out that you can be scientific/mathematical in this approach to attain a visually pleasing result. Let's take a look at the [Golden Ratio](http://en.wikipedia.org/wiki/Golden_ratio).

## The Golden Ratio

The golden ratio basically consists of two numerical values. One which is wider than the other but in a way that is proportionate to its sum with its smaller other. We can describe this simply in a math equation:

    (a + b) / a = a + b

In graphic design layouts, you can get the next proportionate neighbor by either multiplying or dividing its width value by 1.61803399. So for example, if you have 960px container, an ideal container for your content would be 593px since:

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

But let's face it, whipping out a calculator everytime you're prototyping a layout sounds tiresome, boring and most of all, not fun. So I decided to fire up illustrator and made this as a guide:

[![Golden Grid Mock-up][2]][1]
  [1]: https://dl.dropbox.com/u/2281027/blog/golden-grid-layout.psd
  [2]: https://dl.dropbox.com/u/2281027/blog/g-ratio-thumb.png (hover text)

> Download [golden-grid-layout.psd](https://dl.dropbox.com/u/2281027/blog/golden-grid-layout.psd)

If we take a look at the grid, You'll see that it's a series of squares repeating over in a spiral direction. This means that we're still maintaining a sense of proportion each time we sub-divide the elements.

![Golden Grid Highlighted](https://dl.dropbox.com/u/2281027/blog/g-ratio-highlighted-thumb.png)

From here I can start estimating the placement of elements pretty quickly.

![Golden Grid Mock-up](https://dl.dropbox.com/u/2281027/blog/g-ratio-mockup-sample.png)

With this design practice, I'll know exactly how and where to put my UI elements in the page instead of guessing precariously. The golden ratio is evident in all things including the natural world. Limbs, flowers, animals, plants and celestial bodies. Saturn's rings for example has proportionate distance between the rings and the planet.

So how do we apply this with front-end development? Let's take a look at [grids](http://en.wikipedia.org/wiki/Grid_(page_layout).

## Grid System

There are three main variables in a grid layout.

### Grid Columns
> The number of grids in your layout. The most common is 24 which results to a width of 960px.

### Grid Width
> The width of each grid. Default value is `30px`

### Grid Margin
> The amount of space between grids. Default value is `10px`

Grid systems will help get front-end development jobs faster. Pack that along with vertical rhythms in typography, you can quickly prototype a decent-looking wireframe in html/css in just an hour or so.

I won't go deeper into discussing how to use grids in your project but I highly suggest checking out the [Foundation framework](http://zurb.foundation.org) and [Blueprint](http://blueprintcss.org) for epic learning.

## Final Thoughts

Although grids can sometimes be constricting because of the rules you have to follow, in the end, it saves you time. Not to mention that it easily bridges the gap between designers and developers working on the same project. This is analogous to the same reason why you should use jQuery as your JavaScript library when doing code. People in the past have already solved these problems by providing these frameworks for us to use.

We stand on the shoulders of giants.

[^1]: Designers who can 'guestimate' a layout that still looks aesthetically proportionate.
