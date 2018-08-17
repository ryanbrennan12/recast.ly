class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      currentVideo: null
    };
    this.handleClick = this.handleClick.bind(this);
    this.setVideos = this.setVideos.bind(this);
    this.handleTextInput = this.handleTextInput.bind(this);
    // this.debounceSearch = _.debounce(searchYouTube, 500);
    // this.handleTextInput = _.debounce(this.handleTextInput, 500);
  }

  handleTextInput(e) {
    e.persist();
    var dynaText = {
      key: window.YOUTUBE_API_KEY,
      query: e.target.value,
      max: 5
    };
    this.props.debounceSearch(dynaText, this.setVideos);

  }

  handleClick(video) {
    this.setState({
      currentVideo: video
    });
  }

  setVideos(ytArr) {
    // console.log('I am this...', this)
    this.setState({
      videos: ytArr,
      currentVideo: ytArr[0]
    });
  }

  componentWillUnmount() {
    this.props.debounceSearch.cancel();
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            {/* <div><h5><em>search</em> view goes here</h5></div> */}
            <Search onInput={this.handleTextInput} onButtonClick={this.handleButton}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            {/* <div><h5><em>videoPlayer</em> view goes here</h5></div> */}
            <VideoPlayer video={this.state.currentVideo} />
          </div>
          <div className="col-md-5">
            {/* <div><h5><em>videoList</em> view goes here</h5></div> */}
            <VideoList videos={this.state.videos} onClick={this.handleClick}/>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    var searchObj = {
      key: window.YOUTUBE_API_KEY,
      query: 'surfing dogs',
      max: 5
    };
    // console.log('this is this..', this);
    // console.log('this is props? ..', this.props);

    this.props.searchYouTube(searchObj, this.setVideos);
  }

}

// class GroceryListItem extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       hover: false
//     }
//   }

//   onHover() {
//     this.setState({
//       hover: !this.state.hover
//     })
//   }

//   render() {
//     var style = {
//       fontWeight: this.state.hover ? 'bold' : 'normal'
//     }

//     return (
//       <li style = {style} onMouseEnter={this.onHover.bind(this)} onMouseLeave={this.onHover.bind(this)}>{this.props.list}</li>
//     )
//   }
// }

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
