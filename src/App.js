import React, { useEffect, useState } from 'react';
import "./app.css";

export default () => {
  const [memes, setMemes] = useState([]);
  const [currentMeme, setCurrentMeme] = useState();
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
    .then((result) => result.json())
    .then((result) => {
      setMemes(result.data.memes);
      setCurrentMeme(result.data.memes[0]);
    })
    .catch((error) => console.log(error));
}, []);

return (
  <div>
    {currentMeme ? (
      <div id="memeContainer">
        <img id="memeImage" src={currentMeme.url} /> 
        <span id="firstText">I am the first text</span>
        <span id="secondText">I am the second text</span>
      </div>
    ) : null}
  </div> 
  );
};
