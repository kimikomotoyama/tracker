import React from 'react'
import { render } from 'react-dom'
import { observer } from 'mobx-react'
import { BrowserRouter, Route, Link } from 'react-router-dom';
import '../styles/style.scss'

@observer
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="wrapper">
          <div>This is the beginning of this app!</div>
        </div>
      </BrowserRouter>
    )
  }
}

render(<App/>, document.getElementById('root'))