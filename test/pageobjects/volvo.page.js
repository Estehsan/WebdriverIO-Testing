class VolvoPage {
  get btnAcceptCookies() {
    return $("#onetrust-accept-btn-handler");
  }
  get HeroVideo() {
    return $$("//*[@data-autoid='videoTestimonials:container']");
  }
  // List of all videos

  get VideoTestimonials1() {
    return $$("//*[@data-autoid='videoTestimonials:video-0']");
  }

  get MainMenu() {
    return $("sitenav-sidenav-toggle");
  }

  get MenuExpand() {
    return $("//*[@data-autoid='nav:sideNavigationContainer']");
  }

  get MenuClose() {
    return $("//*[@data-autoid='nav:siteNavCloseIcon']");
  }

  get OurCarMenu() {
    return $("//*[@data-autoid='nav:topNavCarMenu']");
  }

  get OurCarMenuExpand() {
    return $('//*[@data-autoid="nav:carMenuDesktop"]');
  }
}

module.exports = new VolvoPage();
