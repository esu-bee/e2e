// Because this file references protractor, you'll need to have it as a project
// dependency to use 'protractor/globals'. Here is the full list of imports:
//
// import {browser, element, by, By, $, $$, ExpectedConditions}
//   from 'protractor/globals';
//
// The jasmine typings are brought in via DefinitelyTyped ambient typings.
import {protractor, browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';

describe('protractor with typescript typings', () => {
  beforeEach(() => {
    //browser.get('http://127.0.0.1:8000');
    browser.get('http://www.angularjs.org');
  });

  it('should greet the named user', () => {
    element(by.model('yourName')).sendKeys('ESU');
    let greeting = element(by.binding('yourName'));
    greeting.getText().then((val)=>{ console.log("**********");console.log(val.toUpperCase()); console.log("**********");});
    expect<any>(greeting.getText()).toEqual('Hello ESU!');
  });
  
  it('should log error from browser console', function () {
    console.log(browser.browserName);
    if(browser.browserName === "chrome") {
        browser.manage().logs().get('browser').then(function(browserLog) {
            console.log('log: ' + require('util').inspect(browserLog));
        });
    }

  });
});