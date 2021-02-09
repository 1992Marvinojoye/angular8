import React, { useState, useEffect, useMemo , useCallback  } from 'react';
import ReactDOMServer from 'react-dom/server';
//import { useSynthesize } from 'react-say';
import Saybutton from './components/saybutton';

const A = 65 // ASCII character code

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      justClicked: null,
      letters: Array.from({length: 26}, (_, i) => String.fromCharCode(A + i))
    };
   
  }
 
  handleClick(e) {
    this.setState({
      justClicked: e.target.dataset.letter
    });
  }

  render() {
    
    return (
      <div>
        Just clicked: <Saybutton value={this.state.justClicked } />
          
        <ul>
          {this.state.letters.map(letter =>
            <li key={letter} data-letter={letter} onClick={this.handleClick}>
              {letter}
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default App;