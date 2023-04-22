var Volvo = require("../pageobjects/volvo.page");

describe("Visual regression testing", () => {
  it("Accept Cookies", () => {
    browser.url("/intl/v/car-safety/a-million-more");
    Volvo.btnAcceptCookies.click();
    console.log("Cookies accepted");
  });

  it("should save some screenshots", async () => {
    // Save a screen
    await browser.saveScreen("examplePaged", {
      /* some options */
    });

    // Save a full page screenshot with all tab executions
    await browser.saveTabbablePage("save-tabbable", {
      /* some options, use the same options as for saveFullPageScreen */
    });
  });
});
