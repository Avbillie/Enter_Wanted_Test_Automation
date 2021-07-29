import { HomePage } from "./enter_wanted";
import {
    Builder,
    By,
    Capabilities,
    until,
    WebDriver,
  } from "selenium-webdriver";
import { beforeAll } from "@jest/globals";
const chromedriver = require("chromedriver");
const driver = new Builder().withCapabilities(Capabilities.chrome()).build();
let ew = new HomePage(driver)
let scenario = {
    one:`As a user I am limted to how many characters I 
    enter into each input field.`,
    two:`As a user a prompt message should appear when I click the 
    submit button with blank input fields`,
    three:`As a user all data within the input fields should be 
    cleared out when I click the clear button`,
    four:`As a user a prompt message should appear when 
    I click the submit button with blank input fields`,
    five:`As a user when I click the submit button with invalid data inside of the input fields I 
    should recieve error messages stating what is required.`,
}


describe('Enter Wanted application', async () =>{

    beforeEach(async()=>{
        await ew.navigate()
    })
    afterAll(async ()=>{
       await  ew.quit()
    })
    
    test(scenario.one, async ()=>{

    })
    test(scenario.two, async ()=>{

    })
    test(scenario.three, async ()=>{

    })
    test(scenario.four, async ()=>{
        
    })
    test(scenario.five, async ()=>{

    })
})