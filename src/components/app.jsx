import React from 'react'
import { render } from 'react-dom'
import { observer } from 'mobx-react'
import { BrowserRouter, Route, Link } from 'react-router-dom';
import '../styles/style.scss'
import Home from '../pages/home';

@observer
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="wrapper">
        <Route exact path='/' component={Home} />
        </div>
      </BrowserRouter>
    )
  }
}

render(<App/>, document.getElementById('root'))