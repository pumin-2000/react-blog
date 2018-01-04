import React from 'react'
import { Route, Link } from 'react-router-dom'
import Post from './containers/Post'
import Slug from './containers/Slug'
import Footer from './components/Footer'


const Routes = () => (
  <div>
    <main>
      <Route exact path="/" component={Post} />
      <Route exact path="/:slug" component={Slug} />
    </main>
    <Footer className="footer"/>
  </div>
)

export default Routes
