import React, { Component } from 'react'
import {RoomContext} from '../context'

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;

  render() {
    const {greetings, name} = this.context
    return (
      <div>
        Hello from featured rooms {greetings}, {name}
      </div>
    )
  }
}
