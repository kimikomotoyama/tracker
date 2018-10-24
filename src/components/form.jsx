import React from 'react';
import { observer } from "mobx-react";
import classNames from 'classnames';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';

@observer
class FormView extends React.Component {
  handleChange = stateKey => event => {
    console.log("handleChange");
    this.props.stores.bookStore.storeTempBook([stateKey],event.target.value);
  };

  render() {
    const { stores } = this.props;
    return (
      <div className="form-container">
        <FormControl fullWidth className={classNames("margin", "textField")}>
          <InputLabel htmlFor="adornment-title">Title</InputLabel>
          <Input
            id="adornment-title"
            value={stores.bookStore.tempBook.title}
            onChange={this.handleChange('title')}
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
        </FormControl>
        <FormControl fullWidth className={classNames("margin", "textField")}>
          <InputLabel htmlFor="adornment-author">Author</InputLabel>
          <Input
            id="adornment-author"
            value={stores.bookStore.tempBook.author}
            onChange={this.handleChange('author')}
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
        </FormControl>
      </div>
    );
  }
}

export default FormView;