## Instructions

1. `yarn install`
2. `yarn dev`
3. Go to http://localhost:8080


## Notes

1. I'd usually setup a router rather than a single page. Heres an example of what I usually do: https://github.com/bigblobby/image_optimiser/blob/master/frontend/src/js/Routes.js
2. You'll see some state called `isScrolling` in `Homepage.js`. This is something I'd usually keep in application state rather than component state. I'd use redux for this.
3. I'd usually use typescript or flow. One benifit is you'll be able to see what props a component accepts.
4. In a real world project I'd make the components as reusable as they need to be. For example `HeroCarousel.js` will most likely need to be reusable. I have made `SplitDriver.js` and `Reviews.js` resuable to show you how I'd go about this.

