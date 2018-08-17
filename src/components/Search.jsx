var Search = (props) => (
  <div className="search-bar form-inline">
    {/* <input className="form-control" type="text" onChange={_.debounce(() => props.onInput, 500)}/> */}
    <input className="form-control" type="text" onChange={props.onInput} />
    <button className="btn hidden-sm-down" onClick={props.onButtonClick}>
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
//Define method in App
//Bind in App
//Pass method to search as prop
// IN SEARCH- onWhatever- event listener
//event handler Func- handleTextInput,  Both??
//invokes both methods?
//
