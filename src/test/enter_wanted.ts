import { By, until, WebDriver } from "selenium-webdriver";

export class HomePage {
  driver: WebDriver;
  submitBtn: By = By.xpath("//button[contains(@id, 'saveBtn')]");
  clearBtn: By = By.xpath("//button[contains(@id, 'clearBtn')]");
  headerInput: By = By.xpath("//input[contains(@name, 'hdrInput')]");
  sexInput: By = By.xpath("//input[contains(@name, 'sexInput')]");
  raceInput: By = By.xpath("//input[contains(@name, 'racInput')]");
  allInputFields: By = By.xpath("//input[contains(@class, 'inputField')]");
  homePage: string =
    "https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html";
  errorMessages: By = By.xpath("//li[contains(@class, 'errorMessage')]");
  headerErrorMsg: By = By.xpath("//li[contains(@class, 'errorMessage')][1]");
  sexErrorMsg: By = By.xpath("//li[contains(@class, 'errorMessage')][5]");
  raceErrorMsg: By = By.xpath("//li[contains(@class, 'errorMessage')][6]");
  errorMsgs: any = [];

  constructor(driver?: WebDriver) {
    this.driver = driver;
  }

  async navigate() {
    this.driver.get(this.homePage);
  }

  async quit() {
    this.driver.quit();
  }

  async clickSubmitBtn() {
    await this.driver.wait(until.elementLocated(this.submitBtn));
    return await this.driver.findElement(this.submitBtn).click();
  }

  async clickCleartBtn() {
    await this.driver.wait(until.elementLocated(this.clearBtn));
    return await this.driver.findElement(this.clearBtn).click();
  }

  async insertHeaderInput(text: string) {
    await this.driver.wait(until.elementLocated(this.headerInput));
    await this.driver.findElement(this.headerInput).sendKeys(text);
  }
  async viewHeaderTxt() {
    await this.driver.wait(until.elementLocated(this.headerInput));
    return await this.driver.findElement(this.headerInput).getText();
  }

  async insertRaceInput(text: string) {
    await this.driver.wait(until.elementLocated(this.raceInput));
    await this.driver.findElement(this.raceInput).click()
    return await this.driver.findElement(this.raceInput).sendKeys(text);
  }
  async viewRaceTxt() {
    await this.driver.wait(until.elementLocated(this.raceInput));
    return await this.driver.findElement(this.raceInput).getText();
  }

  async insertSexInput(text: string) {
    await this.driver.wait(until.elementLocated(this.sexInput));
    await this.driver.findElement(this.sexInput).click()
    return await this.driver.findElement(this.sexInput).sendKeys(text);
  }

  async viewtSexTxt() {
    await this.driver.wait(until.elementLocated(this.sexInput));
    return await this.driver.findElement(this.sexInput).getText();
  }

  async viewAllErrorMsgs() {
    await this.driver.wait(until.elementsLocated(this.errorMessages));
    return await this.driver.findElements(this.errorMessages);
  }
  async viewHeaderErrorMsg() {
    await this.driver.wait(until.elementLocated(this.headerErrorMsg));
    return await this.driver.wait(until.elementLocated(this.headerErrorMsg)).getText();
  }
  async viewSexErrorMsg() {
    await this.driver.wait(until.elementLocated(this.sexErrorMsg));
    return await this.driver.wait(until.elementLocated(this.sexErrorMsg)).getText();
  }

  async viewRaceErrorMsg() {
    await this.driver.wait(until.elementLocated(this.raceErrorMsg));
    return await this.driver.wait(until.elementLocated(this.raceErrorMsg)).getText();
  }
}
