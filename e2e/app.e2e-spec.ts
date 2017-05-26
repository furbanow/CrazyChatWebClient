import { MyCrazyChatPage } from './app.po';

describe('my-crazy-chat App', () => {
  let page: MyCrazyChatPage;

  beforeEach(() => {
    page = new MyCrazyChatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
