import React, { Component } from 'react';
import './App.css';

import Button from '@material-ui/core/Button';
import RandomCard from './components/random-card'
import { Eats } from './config/eats'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {}
    this.onClickGetRandomEat = this.onClickGetRandomEat.bind(this);
  }

  getRandomElement(arr) {
    let max = arr.length;
    let index = Math.floor(Math.random() * Math.floor(max));
    return arr[index];
  }

  onClickGetRandomEat() {
    let randomEat = this.getRandomElement(Eats);
    let audio = this.state.audio;
    audio && audio.pause();
    audio = new Audio(randomEat.snd);
    audio.loop = true;
    audio.play();
    this.setState({randomEat, audio})
  }

  render() {
    const {randomEat} = this.state;
    return (
      <div className="App">
        {randomEat &&
          <div className="RandomEat">
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

export default App;
