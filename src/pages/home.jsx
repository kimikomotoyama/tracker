import React from 'react';
import { observer } from "mobx-react";
import classNames from 'classnames';
import ModalStore from '../stores/modalStore';
import BookStore from '../stores/bookStore';
import AppStore from '../stores/appStore';

let modalStore = new ModalStore();
let bookStore = new BookStore();
let appStore = new AppStore();

@observer
class Home extends React.Component {
  constructor() {
    super();

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  onAddClick = () => {
    this.openModal();
  };

  openModal() {
    modalStore.changeModalOpenState(true);

  }

  closeModal() {
    modalStore.changeModalOpenState(false);
  }

  addBook() {
    bookStore.addBook();
    modalStore.changeModalOpenState(false);
  }

  toggleFavorite(book) {
    console.log("toggleFavorite");
    console.log(book);
    book.favorite = !book.favorite;
    console.log(book.name);
  }

  showAll() {
    console.log("showAll");
    appStore.storeFavoriteListStatus(false);
  }

  showFavorites() {
    console.log("showFavorites");
    appStore.storeFavoriteListStatus(true);
  }

  editbook(book) {
    console.log("edit book"); 
  }

  render(){ 
    return (
      <div className={classNames("app", modalStore.modalIsOpen ? "overlay" : "normal")}>
        <div>Track your favorite books</div>
      </div>
    );
  }
}

export default Home;

