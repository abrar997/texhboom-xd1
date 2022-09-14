import React from 'react'
import { Gallery, List, Navbar } from '../../components'

const Home = () => {
  return (
    <div className='pb-10'>
      <Navbar />
      <Gallery />
      <List />
    </div>
  )
}

export default Home