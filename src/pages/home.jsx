import React from 'react';
import { observer } from "mobx-react";
import classNames from 'classnames';
import ModalStore from '../stores/modalStore';
import BookStore from '../stores/bookStore';
import AppStore from '../stores/appStore';
import Card from '../components/card';

const stores = {
  modalStore: new ModalStore(),
  bookStore: new BookStore(),
  appStore: new AppStore(),
}

@observer
class Home extends React.Component {
  constructor() {
    super();

    this.openModal = this.home.openModal.bind(this);
    this.closeModal = this.home.closeModal.bind(this);
  }

  home = {
    onAddClick: () => {
      this.openModal();
    },
  
    openModal: () => {
      stores.modalStore.changeModalOpenState(true);
  
    },
  
    closeModal: () => {
      stores.modalStore.changeModalOpenState(false);
    },
  
    addBook: () => {
      bookStore.addBook();
      stores.modalStore.changeModalOpenState(false);
    },
  
    toggleFavorite: (book) => {
      console.log("toggleFavorite");
      console.log(book);
      book.favorite = !book.favorite;
      console.log(book.name);
    },
  
    showAll: () => {
      console.log("showAll");
      stores.appStore.storeFavoriteListStatus(false);
    },
  
    showFavorites: () => {
      console.log("showFavorites");
      stores.appStore.storeFavoriteListStatus(true);
    },
  
    editbook: (book) => {
      console.log("edit book"); 
    }
  }

  render(){ 
    return (
      <div className={classNames("app", stores.modalStore.modalIsOpen ? "overlay" : "normal")}>
        <div>Track your favorite books</div>
        <button onClick={this.home.openModal}>Add book</button>
        <Card home={this.home} stores={stores}/>
      </div>
    );
  }
}

export default Home;

