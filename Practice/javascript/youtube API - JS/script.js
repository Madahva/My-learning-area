const searchTerm = document.querySelector('.search');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');
const section = document.querySelector('section');

window.addEventListener('load', onClientLoad);

function onClientLoad() {
  gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}

function onYouTubeApiLoad() {
  gapi.client.setApiKey('AIzaSyBYNtH9ibquUW_HsKn186KhpcuBvtS87rM');

  searchForm.addEventListener('submit', search);
}

function search(e) {
  e.preventDefault();

  const request = gapi.client.youtube.search.list({
    part: 'snippet',
    maxResults: 10,
    q: searchTerm.value
  });

  request.execute(onSearchResponse);
}

function onSearchResponse(response) {
  // Empty the <section> element
  while (section.firstChild) {
      section.removeChild(section.firstChild);
  }
  const results = response.items;

  for (let i = 0; i < results.length; i++) {
    displayVideo(results[i], i);
  }
}

function displayVideo(result, i) {
  const vid = document.createElement('div');
  vidId = 'vid' + i;
  vid.id = vidId;
  section.appendChild(vid);

  const player = new YT.Player(vidId, {
    height: '360',
    width: '480',
    videoId: result.id.videoId,
    events: {
      'onReady': onPlayerReady
    }
  });

  function onPlayerReady(e) {
    const myId = e.target.id;
    const duration = e.target.getDuration();
  }
}
