import React from 'react'
import { render } from 'react-dom'
import { observer } from 'mobx-react'
import { BrowserRouter, Route } from 'react-router-dom';
import '../styles/style.scss'
import Nav from '../components/nav';
import Home from '../pages/home';
import About from '../pages/about';

@observer
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="wrapper">
          <Nav />
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
        </div>
      </BrowserRouter>
    )
  }
}

render(<App/>, document.getElementById('root'))