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

  it("It should expand the menu when clicked", async () => {
    await Volvo.MainMenu.click();

    // Wait for the menu to expand
    await expect(Volvo.MenuExpand).toBeDisplayed();
  });

  it("It should close the menu when clicked", async () => {
    // wait
    await browser.pause(1500);

    await Volvo.MenuClose.click();
    await expect(Volvo.MenuExpand).toBeDisplayed(false);
  });

  it("Hero Section Title", async () => {
    // get the title
    const elem = await $('section[data-autoid="ModelIntro"] h2');
    const title = await elem.getText();

    console.log(title + "😋😋😋😋 is the title");

    await expect(title).toEqual(
      "Ideas that change the world are often the most controversial."
    );
  });
});
