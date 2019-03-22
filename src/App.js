import React, { Component } from 'react';
import './App.css';

import Button from '@material-ui/core/Button';
import RandomCard from './components/random-card'
import { Eats } from './config/eats'
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
            <BackgroundAudio src={randomEat.snd} key={`snd-${randomEat.text}`} />
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
