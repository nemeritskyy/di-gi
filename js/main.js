$(document).ready(function () {
  var one = $("#one");
  var two = $("#two");

  one.owlCarousel({
    items: 1,
    loop: true,
  });

  two.owlCarousel({
    items: 1,
    loop: true,
  });

  $(".owl-prev").click(function () {
    one.trigger("prev.owl.carousel");
  });

  $(".owl-next").click(function () {
    one.trigger("next.owl.carousel");
  });

  // Update indicators for the first carousel
  updateIndicators(one, 0);

  one.on("changed.owl.carousel", function (event) {
    var realIndex = event.page.index;
    updateIndicators(one, realIndex);
  });

  // Update indicators for the second carousel
  updateIndicators(two, 0);

  two.on("changed.owl.carousel", function (event) {
    var realIndex = event.page.index;
    updateIndicators(two, realIndex);
  });

  // Update indicators
  function updateIndicators(carousel, currentIndex) {
    if (carousel.attr("id") === "one") {
      $(".top-slider__indicator").removeClass("top-slider__indicator--active");
      $(".top-slider__indicator")
        .eq(currentIndex)
        .addClass("top-slider__indicator--active");
    } else {
      $(".quote-section__indicator").removeClass(
        "quote-section__indicator--active"
      );
      $(".quote-section__indicator")
        .eq(currentIndex)
        .addClass("quote-section__indicator--active");
    }
  }

  // Click on indicator first carousel
  $(".top-slider__indicator").click(function () {
    var index = $(this).index();
    one.trigger("to.owl.carousel", [index, 300]);
  });

  // Click on indicator second carousel
  $(".quote-section__indicator").click(function () {
    var index = $(this).index();
    two.trigger("to.owl.carousel", [index, 300]);
  });
});