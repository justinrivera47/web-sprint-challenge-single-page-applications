import React from 'react'
import {Link} from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
       <Link to={'/'} id={'order-pizza'}>
        Home
      </Link>
      <Link to={'/pizza'} >Order Now!</Link>
    </div>
  )
}

export default HomePage
