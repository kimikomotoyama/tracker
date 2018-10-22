import { observable, action } from 'mobx';

export default class ModalStore {
  @observable modalIsOpen = false;

  @action
  changeModalOpenState(openStatus) {
    this.modalIsOpen = openStatus;
  }
}
