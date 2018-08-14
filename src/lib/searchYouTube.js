var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    method: 'GET',
    data: {
      part: 'snippet',
      key: options.key,
      q: options.query,
      maxResults: options.max,
      videoEmbeddable: 'true',
      type: 'video'
    },
    contentType: 'application/json',
    success: (data) => {
      callback(data.items);

    },
    error: (data) => {
      console.log('this failed', data);
      console.log('what type of data', typeof data);
    }
  });
};

window.searchYouTube = searchYouTube;

// const searchYouTube = (options, callback) => {
//   $.ajax({
//     // url: 'https://www.googleapis.com/youtube/v3/search',
//     method: 'GET',
//     data: {
//       key: options.key,
//       q: options.query,
//       maxResults: options.max,
//       videoEmbeddable: 'true',
//       type: 'video'
//     },
//     contentType: 'application/json',
//     success: (data) => {
//       // console.log('holy smokes we did it', data);
//       // var parsedData = JSON.parse(data);
//       console.log('parsedData', data);
//       callback(data);
//     },
//     error: (data) => {
//       console.log('this failed', data);
//       console.log('what type of data', typeof data);
//     }
//   });
// };