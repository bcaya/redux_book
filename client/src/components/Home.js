import React from 'react'; 
import { Link } from 'react-router-dom'
import { Header } from 'semantic-ui-react'

const Home = () => (
  <Header textAlign="left" as ="h3">Welcome to <Link to="/posts">Bob-Book</Link></Header>
)

export default Home; 