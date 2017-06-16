import { ClubManagerPage } from './app.po';

describe('club-manager App', () => {
  let page: ClubManagerPage;

  beforeEach(() => {
    page = new ClubManagerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
