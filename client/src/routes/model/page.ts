import React from 'react';

export type PageParams = {
  path: string;
  title: string;
  pcComponent?: React.ReactElement;
  mobileComponent?: React.ReactElement;
};

export default class Page {
  #path: string;
  #title: string;
  #pcComponent?: React.ReactElement;
  #mobileComponent?: React.ReactElement;

  constructor(params: PageParams) {
    this.#path = params.path;
    this.#title = params.title;
    this.#pcComponent = params.pcComponent ?? this.setDefaultPage();
    this.#mobileComponent = params.mobileComponent ?? this.setDefaultPage();
  }

  get path() {
    return this.#path;
  }
  get title() {
    return this.#title;
  }
  get pcComponent() {
    return this.#pcComponent;
  }
  get mobileComponent() {
    return this.#mobileComponent;
  }

  private setDefaultPage() {
    return React.createElement('div', null, 'This is Default Page');
  }
}
