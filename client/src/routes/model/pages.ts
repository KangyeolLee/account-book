import Page from './page';

export default class Pages {
  #list: Page[] = [];
  #map: Map<string, Page> = new Map<string, Page>();

  constructor(pages: Page[]) {
    this.#list = pages;
    for (const page of pages) {
      this.#map.set(page.path, page);
    }
  }

  get list() {
    return this.#list;
  }

  public getPage(path: string) {
    return this.#map.get(path);
  }
}
