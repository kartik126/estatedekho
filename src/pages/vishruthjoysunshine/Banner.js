import { TextField } from '@mui/material';
import React from 'react';
import Fade from 'react-reveal/Fade';

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.player = null;
    this.videoId = 'tGKjpniHTtw';
  }

  componentDidMount() {
    // Load the YouTube player API asynchronously
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Call the onYouTubeIframeAPIReady() function when the API is loaded
    window.onYouTubeIframeAPIReady = this.onYouTubeIframeAPIReady.bind(this);
  }

  componentWillUnmount() {
    // Remove the onYouTubeIframeAPIReady() function from the global scope
    delete window.onYouTubeIframeAPIReady;
  }

  onYouTubeIframeAPIReady() {
    // Create the YouTube player
    this.player = new window.YT.Player('player', {
      height: '100%',
      width: '100%',
      videoId: this.videoId,
      playerVars: {
        start: 1,
        end: 8,
        autoplay: 1,
        mute: 1,
        controls: 0,
        showinfo: 0,
        loop: 1,
        playlist: this.videoId, // Set the video ID as the only item in the playlist
      },
      events: {
        onReady: this.onPlayerReady.bind(this),
      },
    });
  }

  onPlayerReady(event) {
    event.target.playVideo();
  }

  render() {
    return (
      <div className="video-container">
        <div id="player" style={{ filter: ' brightness(0.4)' }}></div>
        <div className="video-info w-50 px-5">
          <Fade delay={200}>
            <h1>EMBRACE SERENE PLOTS NEAR BENGALURU</h1>
          </Fade>
        </div>
        <div>
          <div
            className="display shadow-lg py-3 px-4 mx-5 d-flex justify-content-around flex-column align-items-center"
            style={{
              position: 'fixed',
              height: '370px',
              width: '270px',
              borderRadius: '3px',
              top: '20%',
              right: '1%',
              border: '0.1px solid #FDB24D',
              background: '#ffff',
            }}
          >
            <p className="fs-6 fw-semibold">
              Interested?{' '}
              <span
                style={{
                  color: '#FDB24D',
                  fontFamily: 'playfair',
                  fontSize: '18px',
                }}
              >
                Contact Us
              </span>
            </p>
            <TextField
              id="standard-basic myText"
              label="Name"
              variant="standard"
            />
            <TextField
              id="standard-basic"
              label="Contact Number"
              variant="standard"
            />
            <TextField
              id="standard-basic"
              label="Email Id"
              variant="standard"
            />
            <button
              // onClick={() => contact()}
              className="my-2 border-rounded border border-0"
              style={{
                borderRadius: '50px',
                padding: '4px 50px',
                background: '#FDB24D',
                color: '#ffff',
                fontSize: '10px',
                height: '35px',
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoPlayer;
