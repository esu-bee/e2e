
import {browser, element, by} from 'protractor';

export class AngularHomepage {
  nameInput = element(by.model('yourName'));
  greeting = element(by.binding('yourName'));

  get() {
    browser.get('http://www.angularjs.org');
  }

  setName(name: string) {
    this.nameInput.sendKeys(name);
  }
  
  getGreeting(): any {
    return this.greeting.getText();
  }
}