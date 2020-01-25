import React from 'react'
import {Link} from 'react-router-dom'
import Hero from '../components/Hero'
import Banner from '../components/Banner'

export default function Error() {
  return (
    <Hero>
      <Banner title="404" subtitle="Page not found">
        <Link className="btn-primary" to="/">Back to home</Link>
      </Banner>
    </Hero>
  )
}
