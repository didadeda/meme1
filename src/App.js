import React, { useEffect, useState } from 'react';
import "./app.css";

const submitInputs = (setMemeText) => {
  const firstInput = document.getElementById('firstInput').value; 
  const secondInput = document.getElementById('secondInput').value; 
};

export default () => {
  const [memes, setMemes] = useState([]);
  const [currentMeme, setCurrentMeme] = useState();
  const [memeText, setMemeText] = useState({
    firstText: "",
    secondText: "";
  });
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
    <input id="firstInput" placeholder="First Text" type="text" />
    <input id="secondInput" placeholder="Second Text" type="text" />
    <button onClick={(e) => submitInputs(setMemeText)}>Generate Meme Text</button>
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
