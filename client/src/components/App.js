import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'


import StreamShow from './streams/StreamShow'
import StreamEdit from './streams/StreamEdit'
import StreamCreate from './streams/StreamCreate'
import StreamDelete from './streams/StreamDelete'
import StreamList from './streams/StreamList'
import Header from './Header'

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Route path='/' exact component={StreamList} />
        <Route path='/streams/new' exact component={StreamCreate} />
        <Route path='/streams/show' exact component={StreamShow} />
        <Route path='/streams/edit' exact component={StreamEdit} />
        <Route path='/streams/delete' exact component={StreamDelete} />
      </Router>
    </div>
  )
}

export default App;