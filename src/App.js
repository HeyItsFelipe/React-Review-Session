import React from 'react';
import './App.css';
import MainImage from './components/MainImage';
import MainContent from './components/MainContent';
import Gallery from './components/Gallery';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      friendsImagesUrls: [
        "https://avatars1.githubusercontent.com/u/46426217?s=180&v=4",
        "https://avatars3.githubusercontent.com/u/46582279?s=180&v=4",
        "https://avatars1.githubusercontent.com/u/38863599?s=180&v=4",
        "https://avatars3.githubusercontent.com/u/45372114?s=180&v=4",
        "https://avatars3.githubusercontent.com/u/43505107?s=180&v=4"
      ]
    }
  }

  randomize = () => {
    console.log("Randomize!!!");
    var randomized = [];
    var copied = this.state.friendsImagesUrls.slice();
    while (copied.length > 0) {
      let randomIndex = Math.floor(Math.random() * copied.length);
      let spliced = copied.splice(randomIndex, 1)[0];
      randomized.push(spliced);
    }
    this.setState({
      friendsImagesUrls: randomized
    });

  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <MainImage />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-10 offset-sm-1">
            <MainContent />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Gallery randomize={this.randomize} friendsImagesUrls={this.state.friendsImagesUrls} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
