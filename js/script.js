$('.reviews').slick({
    mobileFirst: true,
    dots: false, // Adds the dots on the bottom
    infinite: true,
    speed: 300,
    arrows: false, // Adds arrows to sides of slider
    autoplay: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,  // Shows a three slides at a time
          slidesToScroll: 1,   //When you click an arrow, it scrolls 1 slide at a time
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });