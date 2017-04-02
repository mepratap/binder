import { BinderPage } from './app.po';

describe('binder App', () => {
  let page: BinderPage;

  beforeEach(() => {
    page = new BinderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
