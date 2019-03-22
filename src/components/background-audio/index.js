import { Component } from 'react'

export class BackgroundAudio extends Component {
  shouldComponentUpdate (nextProps, nextState, nextContext) {
    return false
  }

  componentDidMount () {
    const { src } = this.props
    this.audio = new Audio(src)
    this.audio.play()
  }

  componentWillUnmount () {
    this.audio.pause()
    this.audio.src = ''
    this.audio.load()
    this.audio = undefined
  }

  render () {
    return null
  }
}
