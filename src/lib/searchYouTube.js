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
      // console.log('these are our items', data.items);
      if (data.items.length > 1) {
        callback(data.items);
      } else {
        console.log('you typed gibberish and youtube did not return any results, please enjoy the surfing dogs');
      }
    },
    error: (data) => {
      console.log('this failed', data);
      console.log('what type of data', typeof data);
    }
  });
};

var debounceSearch = _.debounce(searchYouTube, 500);

window.searchYouTube = searchYouTube;
window.debounceSearch = debounceSearch;

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