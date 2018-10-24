import React from 'react';
import { observer } from "mobx-react";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Form from './form';
import '../styles/style.scss';

class SimpleCard extends React.Component {
  constructor(props) {
    super();
  }
  
  render() {
    const { home } = this.props;
    const { stores } = this.props;
    return (
      <Card className="card-container" style={{display: stores.modalStore.modalIsOpen ? 'block' : 'none' }}>
        <Button onClick={home.closeModal}>x</Button>
        <CardContent>
          <div>
            <Typography className="title" color="textPrimary" gutterBottom>
            </Typography>
            <Form stores={stores}/>
          </div>
        </CardContent>
        <CardActions>
          <Button  className="center" onClick={home.addBook} size="small">Add</Button>
        </CardActions>
      </Card>
    );
  }
}

export default SimpleCard;