import { AngCli0Page } from './app.po';

describe('ang-cli0 App', () => {
  let page: AngCli0Page;

  beforeEach(() => {
    page = new AngCli0Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
