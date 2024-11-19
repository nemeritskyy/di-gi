$(document).ready(function () {
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 1,
    loop: true,
  });

  $(".owl-prev").click(function () {
    owl.trigger("prev.owl.carousel");
  });

  $(".owl-next").click(function () {
    owl.trigger("next.owl.carousel");
  });

  updateIndicators(0);

  owl.on("changed.owl.carousel", function (event) {
    var realIndex = event.page.index;
    updateIndicators(realIndex);
  });

  function updateIndicators(currentIndex) {
    $(".top-slider__indicator").removeClass("top-slider__indicator--active");
    $(".top-slider__indicator")
      .eq(currentIndex)
      .addClass("top-slider__indicator--active");
  }

  $(".top-slider__indicator").click(function () {
    var index = $(this).index();
    owl.trigger("to.owl.carousel", [index, 300]);
  });
});