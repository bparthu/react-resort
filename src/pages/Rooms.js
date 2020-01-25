import React from 'react'
import {Link} from 'react-router-dom'
import Hero from '../components/Hero'
import Banner from '../components/Banner'

export default function Rooms() {
  return (
    <Hero hero="roomsHero">
      <Banner title="Our Rooms" subtitle="">
        <Link className="btn-primary" to="/">back to home</Link>
      </Banner>
    </Hero>
  )
}
