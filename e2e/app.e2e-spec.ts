import { GoJournalPage } from './app.po';

describe('go-journal App', function() {
  let page: GoJournalPage;

  beforeEach(() => {
    page = new GoJournalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
