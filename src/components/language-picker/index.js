import React, { Component } from 'react'
import SpeedDial from '@material-ui/lab/SpeedDial'
import SpeedDialAction from '@material-ui/lab/SpeedDialAction'
import LanguageIcon from '@material-ui/icons/Language'

export default class LanguagePicker extends Component {
  state = {
    open: false,
  }

  handlers = {}

  getClickHandler (lang) {
    if (!this.handlers[lang]) {
      const { i18n } = this.props

      this.handlers[lang] = () => {
        i18n.changeLanguage(lang)
        this.close()
      }
    }

    return this.handlers[lang]
  }

  toggleOpen = () => {
    this.setState(({ open }) => ({ open: !open }))
  }

  close = () => {
    this.setState({ open: false })
  }

  render () {
    const { className, languages } = this.props
    const { open } = this.state

    return (
      <SpeedDial
        ariaLabel="Pick Language"
        icon={<LanguageIcon />}
        onClick={this.toggleOpen}
        onClose={this.close}
        open={open}
        direction="up"
        className={className}
      >
        {Object.entries(languages).map(
          ([key, value]) => (
            <SpeedDialAction
              key={key}
              icon={country2emoji(value.icon || key)}
              tooltipTitle={value.name}
              onClick={this.getClickHandler(key)}
            />
          ),
        )}
      </SpeedDial>
    )
  }
}

// Assume the country_code is a ISO 3166-1 alpha-2 string (eg: "US")
function country2emoji (country_code) {
  const OFFSET = 127397
  const cc = country_code.toUpperCase()

  function _toConsumableArray (arr) {
    if (Array.isArray(arr)) {
      let i, arr2
      for (i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i]
      }
      return arr2
    } else {
      return Array.from(arr)
    }
  }

  return /^[A-Z]{2}$/.test(cc) ?
    String.fromCodePoint.apply(String, _toConsumableArray([].concat(_toConsumableArray(cc)).map(c => c.charCodeAt() + OFFSET)))
    : null
}
