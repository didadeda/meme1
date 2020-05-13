import React, { useEffect, useState } from 'react';
import "./app.css";

const submitInputs = (setterFunction) => {
  const firstInput = document.getElementById('firstInput').value; 
  const secondInput = document.getElementById('secondInput').value; 
  setterFunction({ firstText: firstInput, secondText: secondInput });
};

export default () => {
  const [memes, setMemes] = useState([]);
  const [currentMeme, setCurrentMeme] = useState();
  const [memeText, setMemeText] = useState({
    firstText: "",
    secondText: "",
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
    <button onClick={(e) => submitInputs(setMemeText)}>
      Generate Meme Text
      </button>
      <button onClick={() => {
       const currentIndex = memes.indexOf(currentMeme);
       if(currentIndex > 0) setCurrentMeme(memes[currentIndex - 1]);
       else alert("go next");
      }}>Previous</button>
      <button onClick={() => {
        const currentIndex = memes.indexOf(currentMeme);
        if(currentIndex < memes.length-1) setCurrentMeme(memes[currentIndex + 1]);
        else alert("take a break");
      }}>Next</button>
      <button onClick={() => {
        setCurrentMeme(memes[Math.floor(Math.random() * memes.lenth)]);
      }}>Random meme</button>
    {currentMeme ? (
      <div id="memeContainer">
        <img id="memeImage" src={currentMeme.url} /> 
        <span id="firstText">{memeText.firstText}</span>
        <span id="secondText">{memeText.secondText}</span>
      </div>
    ) : null}
  </div> 
  );
};
