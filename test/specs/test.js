var Volvo = require("../pageobjects/volvo.page");

describe("Video Testing with WebdriverIO", async () => {
  it("Verify Title", async () => {
    console.log("page opened");

    await browser.url("/intl/v/car-safety/a-million-more");
    await expect(browser).toHaveUrl(
      "https://www.volvocars.com/intl/v/car-safety/a-million-more"
    );
    await expect(browser).toHaveTitleContaining(
      "A million more | Volvo Cars - International"
    );
  });

  it("Accept Cookies", async () => {
    await Volvo.btnAcceptCookies.click();
    console.log("Cookies accepted");
  });

  // describe("All VideoTest", () => {
  //   it("tests VideoTest", async () => {
  //     await browser.setWindowSize(997, 706);
  //     await Volvo.HeroVideo.click();
  //     // await browser.pause(3000);
  //   });
  // });
  // describe("Menu Opening Testing", () => {
  //   it("It should expand the menu when clicked", async () => {
  //     await Volvo.MainMenu.click();

  //     // Wait for the menu to expand
  //     await expect(Volvo.MenuExpand).toBeDisplayed();
  //   });
  // });

  // describe("Menu Closing Btn Testing", () => {
  //   it("It should close the menu when clicked", async () => {
  //     await Volvo.MenuClose.click();
  //     await expect(Volvo.MenuExpand).toBeDisplayed(false);
  //   });
  // });

  // describe("Our Car Menu Btn", () => {
  //   it("It should expand the menu when clicked", async () => {
  //     await Volvo.OurCarMenu.click();
  //     await expect(Volvo.OurCarMenuExpand).toBeDisplayed();
  //   });
  // });

  // describe("Our Car Closing Btn", () => {
  //   it("It should close the menu when clicked", async () => {
  //     await Volvo.OurCarMenuClose.click();
  //     await expect(Volvo.OurCarMenuExpand).toBeDisplayed(false);
  //   });
  // });
});
