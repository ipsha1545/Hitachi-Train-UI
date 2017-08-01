import { HitachiTrainPage } from './app.po';

describe('hitachi-train App', () => {
  let page: HitachiTrainPage;

  beforeEach(() => {
    page = new HitachiTrainPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
