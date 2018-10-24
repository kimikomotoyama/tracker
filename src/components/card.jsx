import React from 'react';
import { observer } from "mobx-react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import FormView from './formView';
// import { Row, Title, Column } from '../../components';
import '../styles/style.scss';

// const styles = {
//   card: {
//     maxWidth: 600,
//   },
//   bullet: {
//     display: 'inline-block',
//     margin: '0 2px',
//     transform: 'scale(0.8)',
//   },
//   title: {
//     fontSize: 14,
//   },
//   pos: {
//     marginBottom: 12,
//   },
//   center: {
//     right: 'auto',
//     bottom: 'auto',
//   }
// };

class SimpleCard extends React.Component {
  constructor(props) {
    super();
  }
  
  render() {
    // const { classes } = this.props;
    console.log(this.props.home);
    const props = this.props.home;
    const stores = this.props.stores;
    return (
      <Card className="card" style={{display: stores.modalStore.modalIsOpen ? 'block' : 'none' }}>
        <Button onClick={props.closeModal}>x</Button>
        <CardContent>
          <div>
            <Typography className="title" color="textPrimary" gutterBottom>
            </Typography>
            {/* <FormView bookStore={props.bookStore}/> */}
          </div>
        </CardContent>
        <CardActions>
          <Button  className="center" onClick={props.addBook} size="small">Add</Button>
        </CardActions>
      </Card>
    );
  }
}

// SimpleCard.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(SimpleCard);
export default SimpleCard;