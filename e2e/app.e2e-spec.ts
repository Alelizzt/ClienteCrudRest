import { ClienteCrudRestPage } from './app.po';

describe('cliente-crud-rest App', () => {
  let page: ClienteCrudRestPage;

  beforeEach(() => {
    page = new ClienteCrudRestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
