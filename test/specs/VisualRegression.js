var Volvo = require("../pageobjects/volvo.page");

describe("Visual Regression", () => {
  beforeEach(async () => {
    // await browser.url("/intl/v/car-safety/a-million-more");
    await browser.url(
      "https://www.volvocars.com/intl/v/car-safety/a-million-more"
    );
    await Volvo.btnAcceptCookies.click();
  });

  it("should save some screenshots", async () => {
    await browser.saveScreen("examplePaged", {});
  });

  it("should compare successful with a baseline", async () => {
    await expect(
      await browser.checkScreen("fullPage", {
        /* some options */
      })
    ).toEqual(0);
  });
});
