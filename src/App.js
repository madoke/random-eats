import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

import './App.css';

import { Eats } from './config/eats'
import i18n, { languages } from './i18n'
import RandomCard from './components/random-card'
import LanguagePicker from './components/language-picker'
import { BackgroundAudio } from './components/background-audio'

class App extends Component {
  state = {}

  onClickGetRandomEat = () => {
    const randomEat = getRandomElement(Eats);
    this.setState({randomEat})
  }

  render() {
    const {randomEat} = this.state;
    return (
      <div className="App">
        {randomEat &&
          <div className="RandomEat">
            <BackgroundAudio src={randomEat.snd} key={`snd-${randomEat.text}`} loop={true} />
            <RandomCard randomEat={randomEat} onClickGetAnotherRandomEat={this.onClickGetRandomEat} />
          </div>
        }
        {!randomEat &&
          <div>
            <Button variant="contained" color="primary" onClick={this.onClickGetRandomEat}>
              Get random Eat !
            </Button>
          </div>
        }

        <LanguagePicker
          className="Fab"
          i18n={i18n}
          languages={languages}
        />
      </div>
    );
  }
}

function getRandomElement(arr) {
  let max = arr.length;
  let index = Math.floor(Math.random() * Math.floor(max));
  return arr[index];
}

export default App;
