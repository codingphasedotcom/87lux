$(window).on("load", function() {

  // https://stackoverflow.com/questions/4086107/fixed-page-header-overlaps-in-page-anchors
  // NAVBAR PADDING
  // $("html").css("padding-top", $("#header").outerHeight(true))
  // $("html").css("scroll-padding-top", $("#header").outerHeight(true))

  // stop the call to action from doing anything for now
  $("#banner .cta-button").on({
    click: function(event) {
      event.preventDefault();
      event.stopPropagation();      
    }
  });

  // CUSTOM SOLUTION
  let customItem = $(".custom__item");
  let customTabText = $(".custom__tab-text");
  let customWindowText = $(".custom__window-text");
  
  // ACTIVATE CUSTOM TAB
  $(customItem).on({
    click: function() {
      let active = $(".custom__item--active");
      $(active).removeClass("custom__item--active");
      $(this).addClass("custom__item--active")
      activateCustomItem(this);
    }
  })

  // CUSTOM ACTIVATE CALLBACK FUNCTION
  function activateCustomItem(active) {
    let description = $(active).find(".description");
    $(customTabText).html($(description).html());
    $(customWindowText).html($(active).find(".text").html());
  }

  // ACTIVATE ITEM WHEN LOADING WINDOW
  activateCustomItem($(".custom__item--active"));

  
  
  setTimeout(() => {
    $("#loader-container").addClass('close-loader');
    runHomeAnimation()
  }, 1000)

  let runHomeAnimation = () => {
    // GSAP ANIMATION
  let screenWidth = $(window).width();
  let screenHeight = $(window).height();
  let homeController = new ScrollMagic.Controller();

  let shapesTL = gsap.timeline();
  shapesTL
  .fromTo(
    "#shapes .shape",0.55,
    {
      x: screenWidth
    },
    {
      x:0,
      stagger: .3
    }, "-=0"
  )
  .fromTo(
    ".shape.rectangle",0.55,
    {
      opacity: 0
    },
    {
      opacity: 1
    }
  )


  let platformsTL = gsap.timeline();  
  platformsTL
    .fromTo(
      ".platforms__logo",
      {
        
        opacity: 0
      },
      {
        opacity: 1,
        stagger: .3
      }
    )

  let projectsTL = gsap.timeline();
  projectsTL
    .fromTo(
      ".projects .project", .7,
      {
        x: screenWidth
      },
      {
        x:0,
        stagger: -.4
      }, "=0"
    )
    .fromTo(
      "#projects .view-buttons", 1,
      {
        opacity: 0
      },
      {
        opacity: 1
      }
    );


  let teamLeftTL = gsap.timeline();
  teamLeftTL
    
    .fromTo(
      "#team .team.team--left", 1.5,
      {
        opacity: 0,
        x: -screenWidth
      },
      {
        opacity: 1,
        x:0,
        stagger: .5
      }
    )
    .fromTo(
      "#team .team.team--right", 1.5,
      {
        opacity: 0,
        x: screenWidth
      },
      {
        opacity: 1,
        x:0,
        stagger: .5
      }
    )
    .fromTo(
      "#team .team.team--top", 1.5,
      {
        y: -screenHeight*.5,
        opacity: 0
      },
      {
        opacity: 1,
        y:0,
        stagger: .5
      }
    )
    .fromTo(
      "#team .team--bottom", 2,
      {
        y: screenHeight*2,
        opacity: 0
      },
      {
        y:0,
        opacity: 1,
        stagger: .5
      }
    )

    

  let customTL = gsap.timeline();
  customTL
    .fromTo(
      ".custom__item", 1,
      {
        opacity: 0,
        x: 200
      },
      {
        x: 0,
        opacity: 1,
        stagger: .3
      }
    )

  let footerTL = gsap.timeline();
  footerTL
    .fromTo(
      "#footer .footer__cta", 1.5,
      {
        y: screenHeight*.5,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1
      }
    )

  new ScrollMagic.Scene({
    triggerElement: "#shapes",
    triggerHook: 1,
    reverse: false,
    offset: 0,
    duration:0,
  })
    .setTween(shapesTL)
    // .addIndicators({
    //   name: "Shapes scene",
    //   colorEnd: 'green'
    // })
    .addTo(homeController);
  
  new ScrollMagic.Scene({
    triggerElement: "#platforms",
    triggerHook: 1,
    reverse: true,
    offset: 200,
    duration: document.getElementById('platforms').offsetHeight ,
  })
    .setTween(platformsTL)
    // .addIndicators({
    //   name: "Platforms scene",
    //   colorEnd: 'green'
    // })
    .addTo(homeController);

  new ScrollMagic.Scene({
    triggerElement: "#projects",
    triggerHook: 1,
    reverse: true,
    offset: 300,
    duration: 500,
  })
    .setTween(projectsTL)
    // .addIndicators({
    //   name: "Projects scene",
    //   colorEnd: 'green'
    // })
    .addTo(homeController);

  new ScrollMagic.Scene({
    triggerElement: "#team",
    triggerHook: 1,
    reverse: true,
    offset: 0,
    duration: document.getElementById('team').offsetHeight ,
  })
  .setTween(teamLeftTL)
  // .addIndicators({
  //   name: "Team scene",
  //   colorEnd: 'green'
  // })
  .addTo(homeController);

    new ScrollMagic.Scene({
      triggerElement: "#custom",
      triggerHook: 1,
      reverse: false,
      offset: 300,
      duration: document.getElementById('custom').offsetHeight,
    })
      .setTween(customTL)
      // .addIndicators({
      //   name: "Custom scene",
      //   colorEnd: 'green'
      // })
      .addTo(homeController);

  // new ScrollMagic.Scene({
  //   triggerElement: "#footer",
  //   triggerHook: 1,
  //   reverse: false,
  //   offset: 100,
  //   duration: 0,
  // })
  //   .setTween(footerTL)
  //   .addIndicators({
  //     name: "Footer scene",
  //     colorEnd: 'green'
  //   })
  //   .addTo(homeController);

  }
  
});