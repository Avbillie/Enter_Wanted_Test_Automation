import {
  By,
  until,
  WebDriver,
} from "selenium-webdriver";

export class HomePage {
  driver: WebDriver;
  submitBtn: By = By.xpath("//button[contains(@id, saveBtn)]");
  clearBtn: By = By.xpath("//button[contains(@id, clearBtn)]");
  headerInput: By = By.xpath("//input[contains(@name, hdrHeader]");
  sexInput: By = By.xpath("//input[contains(@name, sexInput]");
  raceInput: By = By.xpath("//input[contains(@name, racInput]");
  allInputFields: By = By.xpath("//input[contains(@class, inputField]");
  homePage: string = "https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html";
  errorMessages: By = By.xpath("//li[contains(@class, errorMessage)]");
  headerErrorMsg: By = By.xpath("//li[contains(@class, errorMessage)][1]");
  sexErrorMsg: By = By.xpath("//li[contains(@class, errorMessage)][5]");
  raceErrorMsg: By = By.xpath("//li[contains(@class, errorMessage)][6]")

  constructor(driver?: WebDriver) {
    this.driver = driver;
  };

  async navigate() {
      this.driver.get(this.homePage);
  };

  async quit() {
    this.driver.quit();
  };

  async clickSubmitBtn(){
    await this.driver.wait(until.elementLocated(this.submitBtn));
    await this.driver.findElement(this.submitBtn).click();
  };

  async clickCleartBtn(){
    await this.driver.wait(until.elementLocated(this.clearBtn));
    await this.driver.findElement(this.clearBtn).click();
  };

  async insertAllInput(text: string) {
    await this.driver.wait(until.elementsLocated(this.allInputFields));
    let inputFields = await this.driver.findElements(this.allInputFields);
    inputFields.forEach(async () => {
      await this.driver.findElement(this.allInputFields).sendKeys(text);
    });
  };

  async insertHeaderInput(text: string){
    await this.driver.wait(until.elementLocated(this.headerInput));
    await this.driver.findElement(this.headerInput).sendKeys(text);
  };

  async insertRaceInput(text: string){
    await this.driver.wait(until.elementLocated(this.raceInput));
    await this.driver.findElement(this.raceInput).sendKeys(text);
  };

  async insertSexInput(text: string){
    await this.driver.wait(until.elementLocated(this.sexInput));
    await this.driver.findElement(this.sexInput).sendKeys(text);
  };

  async viewAllErrorMsgs(){
    await this.driver.wait(until.elementsLocated(this.errorMessages));
    let errors = await this.driver.findElements(this.errorMessages);
    errors.forEach(async () =>{
        await this.driver.wait(until.elementLocated(this.errorMessages)).getText()
    })
  }

  async viewHeaderErrorMsg(){
    await this.driver.wait(until.elementLocated(this.headerErrorMsg));
    await this.driver.wait(until.elementLocated(this.headerErrorMsg)).getText()
  }
  async viewSexErrorMsg(){
    await this.driver.wait(until.elementLocated(this.sexErrorMsg));
    await this.driver.wait(until.elementLocated(this.sexErrorMsg)).getText()
  }

  async viewRaceErrorMsg(){
    await this.driver.wait(until.elementLocated(this.raceErrorMsg));
    await this.driver.wait(until.elementLocated(this.raceErrorMsg)).getText()
  }



}
