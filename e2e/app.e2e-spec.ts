import { TAPage } from './app.po';

describe('ta App', () => {
  let page: TAPage;

  beforeEach(() => {
    page = new TAPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
