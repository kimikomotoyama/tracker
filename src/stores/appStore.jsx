import { observable, action } from 'mobx';

export default class AppStore {
  @observable isFavorite = false;
  
  @action
  storeFavoriteListStatus(isFavoriteList) {
    this.isFavorite = isFavoriteList;
  }

}
