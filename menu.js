var ScrollPosStyler = (function(document, window) {
  var scrollPosY = 0,
      busy = false,
      onTop = true,

      scrollOffsetY = 1,

      elements = document.getElementsByClassName("menu");

  function onScroll() {
    if (!busy) {
      scrollPosY = window.pageYOffset;

      // if we were above, and are now below scroll position...
      if (onTop && scrollPosY > scrollOffsetY) {
        busy = true;
        onTop = false;

        // asynchronuously add style / class to elements
        window.requestAnimationFrame(belowScrollPos);

      // if we were below, and are now above scroll position...
      } else if (!onTop && scrollPosY <= scrollOffsetY) {
        busy = true;
        onTop = true;

        // asynchronuously add style / class to elements
        window.requestAnimationFrame(aboveScrollPos);
      }
    }
  }

  function aboveScrollPos() {
    for (var i = 0; elements[i]; ++i) {
      elements[i].classList.add("menu-abv");
      elements[i].classList.remove("menu-blw");
    }

    busy = false;
  }

  function belowScrollPos() {
    for (var i = 0; elements[i]; ++i) {
      elements[i].classList.add("menu-blw");
      elements[i].classList.remove("menu-abv");
    }

    busy = false;
  }

  var pub = {
    init: function() {
      busy = true;
      scrollPosY = window.pageYOffset;

      if (scrollPosY > scrollOffsetY) {
        onTop = false;

        window.requestAnimationFrame(belowScrollPos);
      } else {
        onTop = true;

        window.requestAnimationFrame(aboveScrollPos);
      }
    }
  };


  document.addEventListener("DOMContentLoaded", function() {
    // defer initialization to allow browser to restore scroll position
    window.setTimeout(pub.init, 1);
  });

  // register for window scroll events
  window.addEventListener("scroll", onScroll);


  return pub;
})(document, window);
