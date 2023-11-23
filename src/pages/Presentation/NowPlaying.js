import React, { useEffect, useState } from "react";
import { Buffer } from "buffer";
import { AiOutlinePauseCircle } from "react-icons/ai";
import { BiErrorCircle } from "react-icons/bi";
import { HiOutlineStatusOffline } from "react-icons/hi";
import "./styles.css";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

//Setting up the Spotify API and Endpoints
const NOW_PLAYING_ENDPOINT = "https://api.spotify.com/v1/me/player/currently-playing";
const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const client_id = "b20d09930ecf4739949dc7a523619962";
const client_secret = "4cfe45966b774306afd4ed3ef7eddb64";
const refresh_token =
  "AQAgXNNuxrGt5jZ_daA4nsjMzkMJ-_gzrQN1jqh-omLOOTXr6k72DffyEt_xUk5oQUaWqxXEEANGxlHiLC1v6lcPnB6Ry6DWYGlWBP_2WaX2lLRtL-O4Akc3UG16raT2MLc";

//Function to generate an access token using the refresh token everytime the website is opened or refreshed
export const getAccessToken = async (client_id, client_secret, refresh_token) => {
  const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");

  const params = new URLSearchParams();
  params.append("grant_type", "refresh_token");
  params.append("refresh_token", refresh_token);

  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params,
  });

  return response.json();
};
//Uses the access token to fetch the currently playing song
export const getNowPlaying = async () => {
  try {
    //Generating an access token
    const { access_token } = await getAccessToken(client_id, client_secret, refresh_token);

    //Fetching the response
    const response = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    //If response status > 400 means there was some error while fetching the required information
    if (response.status > 400) {
      throw new Error("Unable to Fetch Song");
    } else if (response.status === 204) {
      //The response was fetched but there was no content
      throw new Error("Currently Not Playing");
    }

    //Extracting the required data from the response into seperate variables
    const song = await response.json();
    const albumImageUrl = song.item.album.images[0].url;
    const artist = song.item.artists.map((artist) => artist.name).join(", ");
    const isPlaying = song.is_playing;
    const songUrl = song.item.external_urls.spotify;
    const title = song.item.name;
    const timePlayed = song.progress_ms;
    const timeTotal = song.item.duration_ms;
    const artistUrl = song.item.album.artists[0].external_urls.spotify;

    //Returning the song details
    return {
      albumImageUrl,
      artist,
      isPlaying,
      songUrl,
      title,
      timePlayed,
      timeTotal,
      artistUrl,
    };
  } catch (error) {
    console.error("Error fetching currently playing song: ", error);
    return error.message.toString();
  }
};

//Main function to process the data and render the widget
const NowPlaying = () => {
  //Hold information about the currently playing song
  const [nowPlaying, setNowPlaying] = useState(null);
  const soundbarGif = require("assets/images/soundbar.gif");

  useEffect(() => {
    const fetchNowPlaying = async () => {
      const data = await getNowPlaying();
      setNowPlaying(data);
    };

    // Update interval to 30 seconds (30000 milliseconds) or to a frequency you prefer
    const intervalId = setInterval(() => {
      fetchNowPlaying();
    }, 30000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  //Setting default values for the listener's current state and the duration of the song played
  let playerState = "";
  let secondsPlayed = 0,
    minutesPlayed = 0,
    secondsTotal = 0,
    minutesTotal = 0;
  let albumImageUrl = "./images/albumCover.png";
  let title = "";
  let artist = "";

  if (nowPlaying != null && nowPlaying.title) {
    //Used while displaing a sounbar/pause icon on the widget
    nowPlaying.isPlaying ? (playerState = "PLAY") : (playerState = "PAUSE");

    //Converting the playback duration from seconds to minutes and seconds
    secondsPlayed = Math.floor(nowPlaying.timePlayed / 1000);
    minutesPlayed = Math.floor(secondsPlayed / 60);
    secondsPlayed = secondsPlayed % 60;

    //Converting the song duration from seconds to minutes and seconds
    secondsTotal = Math.floor(nowPlaying.timeTotal / 1000);
    minutesTotal = Math.floor(secondsTotal / 60);
    secondsTotal = secondsTotal % 60;

    albumImageUrl = nowPlaying.albumImageUrl;
    title = nowPlaying.title;
    artist = nowPlaying.artist;
  } else if (nowPlaying === "Currently Not Playing") {
    //If the response returns this error message then we print the following text in the widget
    playerState = "OFFLINE";
    title = "User is";
    artist = "currently Offline";
  } else {
    //If the response wasn't able to fetch anything then we display this
    title = "Failed to";
    artist = "fetch song";
  }

  //Used to set 0 as padding when the it is a single digit number
  const pad = (n) => {
    return n < 10 ? "0" + n : n;
  };

  return (
    <a
      style={{ textDecoration: "none", color: "black" }}
      href={playerState === "PLAY" || playerState === "PAUSE" ? nowPlaying.songUrl : ""}
    >
      <MKBox display="flex">
        <MKBox className="nowPlayingImage">
          {playerState === "PLAY" || playerState === "PAUSE" ? (
            <a href={nowPlaying.songUrl}>
              <img src={albumImageUrl} alt="Album" />
            </a>
          ) : (
            <img src={albumImageUrl} alt="Album" />
          )}
        </MKBox>
        <MKBox>
          <MKBox id="nowPlayingDetails">
            <MKTypography
              className={`nowPlayingTitle ${title.length > 15 ? "marquee-content" : " "}`}
              component="a"
              href={playerState === "PLAY" || playerState === "PAUSE" ? nowPlaying.songUrl : ""}
              variant="body2"
            >
              {title}
            </MKTypography>

            <MKTypography
              className="nowPlayingArtist"
              component="a"
              href={playerState === "PLAY" || playerState === "PAUSE" ? nowPlaying.artistUrl : ""}
              variant="body2"
            >
              {artist}
            </MKTypography>

            <MKTypography className="nowPlayingTime" variant="body2">
              {pad(minutesPlayed)}:{pad(secondsPlayed)} / {pad(minutesTotal)}:{pad(secondsTotal)}
            </MKTypography>
          </MKBox>
        </MKBox>
        <MKBox className="nowPlayingState">
          {playerState === "PLAY" ? (
            <img alt="soundbar" src={soundbarGif} title="Now Listening" />
          ) : playerState === "PAUSE" ? (
            <AiOutlinePauseCircle size={40} />
          ) : playerState === "OFFLINE" ? (
            <HiOutlineStatusOffline size={40} />
          ) : (
            <BiErrorCircle size={40} />
          )}
        </MKBox>
      </MKBox>
    </a>
  );
};

export default NowPlaying;
