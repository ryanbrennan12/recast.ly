var VideoList = (props) => (
  <div className="video-list">
    {/* <div><h5><em>videoListEntry</em> view goes here</h5></div> */}
    {props.videos.map(video =>
      <VideoListEntry video={video} onClick={props.onClick}/>
    )}

  </div>
);


// var GroceryList = (props) => (
//   <ul>
//     {props.list.map(list =>
//       <GroceryListItem list={list} />
//     )}
//   </ul>
// );

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;
