import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeAll(() => {
    page = new AppPage();
    page.navigateTo();
    const btnLogOut = page.logIn();
    expect(btnLogOut.isPresent()).toBeTruthy();
  });

  it('should display add item btn', () => {
    page.navigateTo()
    expect(page.getAddItemButton().isPresent()).toBeTruthy();
  })

  xit('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Welcome to app-comarch!');
  });

  it('should add new item', () => {
    page.navigateTo();
    const form = page.addItem()
    expect(form.isPresent()).toBeFalsy();
    const rows = page.searchByTitle();
    expect(rows.count()).toBe(1)
  })
});
