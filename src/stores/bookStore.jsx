import { observable, action, autorun, computed } from 'mobx';

export default class BookStore {
  @observable books = [];
  @observable tempBook = {
    title: '',
    author: '',
    favorite: false
  }

  @action
  storeTempBook(key, value) {
    this.tempBook[key] = value;
  }

  @computed
  get bookList() {
    return this.books;
  }

  addBook() {
    this.books.push(Object.assign({}, this.tempBook));
    this.tempBook = {
      title: '',
      author: '',
      yearPublished: '',
      favorite: false
    }
    console.log(this.books);
  }
}
