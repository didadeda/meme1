## Select some mem pictures from api.imgflip.com - Select the first one to be the current meme picture
-fetch the data + set the first meme as my current meme picture -- code below

<!-- 

import React, { useEffect, useState } from 'react';

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

console.log(memes, currentMeme);

return <div>hello</div>;
};

 -->

## Allow the user to write meme text at the top and bottom of the picture, in a meme style
--Implement HTML inputs, listen for the values, display the text on the image 


