import React from 'react';
import { observer } from "mobx-react";
import { Link } from 'react-router-dom';


@observer
class Nav extends React.Component {

  render() {
    return (
      <nav>
        <Link to="/">Home | </Link>
        <Link to="about">About</Link>
      </nav>
    );
  }
}

export default Nav;
