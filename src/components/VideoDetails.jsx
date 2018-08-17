var VideoDetails = (props) => (
  props.video ?
    <div className="video-player-details">
      <h3>{props.video.snippet.title}</h3>
      <div>{props.video.snippet.description}</div>
      <div>Published Time: {props.video.snippet.publishedAt}</div>
      <div>Channel Name: {props.video.snippet.channelTitle}</div>
    </div> : <div className="video-player-details"></div>
);