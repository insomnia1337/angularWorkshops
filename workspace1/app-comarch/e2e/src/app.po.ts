import { browser, by, element, ElementFinder } from 'protractor';

export class AppPage {

  uniqueTitle = `Mateusz- ${Date.now()}`
  dg: ElementFinder;
  addItem() {
    this.getAddItemButton().click()
    const form: ElementFinder = element(by.id('add-item-form'))
    form.element(by.name('title')).sendKeys(this.uniqueTitle);
    form.element(by.name('price')).sendKeys('77');
    form.element(by.name('category')).sendKeys('clothes');
    form.element(by.buttonText('send item')).click()
    return form;
  }

  searchByTitle() {
    element(by.id('search-by-title')).sendKeys(this.uniqueTitle);
    this.dg = element(by.css('app-data-grid'))
    return this.dg.all(by.css('tbody tr'));
  }

  logIn() {
    const authComp: ElementFinder = element(by.css('app-auth'))
    authComp.element(by.buttonText('log in')).click();
    return authComp.element(by.buttonText('log out'))
  }
  navigateTo() {
    return browser.get(browser.baseUrl + 'items') as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }
  getAddItemButton() {
    return element(by.buttonText('Add Item'))
  }
}
