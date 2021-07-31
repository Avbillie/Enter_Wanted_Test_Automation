import { HomePage } from "./enter_wanted";
import {
    Builder,
    By,
    Capabilities,
    until,
    WebDriver,
  } from "selenium-webdriver";
import { ENETDOWN } from "constants";
const chromedriver = require("chromedriver");
const driver = new Builder().withCapabilities(Capabilities.chrome()).build();
const ew = new HomePage(driver)
const raceErrorMsg = 'The "Race" field should be 1 character long.';
const headerErrorMsg = 'The "Header" field should be between 9 and 19 characters long.';
const sexErrorMsg = 'The "Sex" field should be 1 character long.';
const scenario = {
    one:`As a user I am limted to how many characters I 
    enter into each input field.`,
    two:`As a user when I fill in header input field and leave the rest blank a error prompt message should 
    appear for all other fields except the header field when the submit button is clicked`,
    three:`As a user all data within the input fields should be 
    cleared out when I click the clear button`,
    four:`As a user a prompt message should appear when 
    I click the submit button with blank input fields`,
    five:`As a user when I click the submit button with invalid data inside of the input fields I 
    should recieve error messages stating what is required.`,
};


describe('Enter Wanted application', async () =>{

    beforeEach(async()=>{
        await ew.navigate()
    })
    afterAll(async ()=>{
       await  ew.quit()
    })
    
    test(scenario.one, async ()=>{
        await ew.insertHeaderInput('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
        await ew.clickSubmitBtn()   
        let errorCount = await ew.viewAllErrorMsgs()
        expect(errorCount.length).toBe(11)
    })
    test(scenario.two, async ()=>{
        await ew.insertHeaderInput('Individualistically')
        await ew.clickSubmitBtn()   
        let errorCount = await ew.viewAllErrorMsgs()
        expect(errorCount.length).toBe(10)
     
    })
    test(scenario.three, async ()=>{
        await ew.insertHeaderInput('Individualistically')
        await ew.insertRaceInput('A')
        await ew.insertSexInput('M')
        await ew.clickCleartBtn()
        expect(await ew.viewHeaderTxt()).toBe('');
        expect(await ew.viewRaceTxt()).toBe('');
        expect(await ew.viewtSexTxt()).toBe('');
    })
    test(scenario.four, async ()=>{
        await ew.insertHeaderInput('Individualistically')
        await ew.clickSubmitBtn()   
        let errorCount = await ew.viewAllErrorMsgs()
        expect(errorCount.length > 0).toBeTruthy()
    })
})