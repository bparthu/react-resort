import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <Hero>
      <Banner title="Luxurious rooms" subtitle="deluxe rooms starting at $299">
        <Link className="btn-primary" to="/rooms">Our Rooms</Link>
      </Banner>
    </Hero>
  )
}
