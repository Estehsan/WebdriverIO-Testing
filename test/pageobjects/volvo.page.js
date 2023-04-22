class VolvoPage {
  get btnAcceptCookies() {
    return $("#onetrust-accept-btn-handler");
  }
  get HeroVideo() {
    return $$('//*[@data-autoid="videoTestimonials:container"]');
  }
  // List of all videos

  get VideoTestimonials() {
    return $('//*[@data-autoid="videoTestimonials:container"]');
  }
  get VideoTestimonialsVideo() {
    return $('//*[@data-autoid="videoTestimonials:video-1"]');
  }
  get MainMenu() {
    return $("#sitenav-sidenav-toggle");
  }
  // id="nav:sideNavigation"

  get MenuExpand() {
    return $('//*[@data-autoid="nav:sideNavigationContainer"]');
  }

  get MenuClose() {
    return $('[data-autoid="nav:siteNavCloseIcon"]');
  }
  get HeroTitle() {
    // return $$("(//h2)[1]");
    return $('[data-autoid="ModelIntro"]//h2//');
  }
}

module.exports = new VolvoPage();
