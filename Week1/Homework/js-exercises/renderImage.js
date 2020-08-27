'use strict';

/*
Exercise 2: Programmer humor

Who knew programmers could be funny?

Write a function that makes a HTTP Request to https://xkcd.now.sh/?comic=latest

Inside the same file write two programs: one with XMLHttpRequest, and the other with axios
Each function should make a HTTP Request to the given endpoint: https://xkcd.now.sh/?comic=latest
Log the received data to the console
**********Render the img property into an <img> tag in the DOM**********
Incorporate error handling: log to the console the error message
*/

function errorMessage(){
  const errorMessage = document.createElement("p");
  errorMessage.innerHTML = "Request Failed, haha!";
  errorMessage.style.textAlign = "center";
  document.body.appendChild(errorMessage);

  const errorImage = document.createElement("img");
  errorImage.src = "https://img.pngio.com/nelson-haha-png-1-png-image-nelsons-png-650_399.png";
  errorImage.alt = "Error message";
  errorImage.style.width = "300px";
  errorImage.style.display = "block";
  errorImage.style.marginLeft = "auto";
  errorImage.style.marginRight = "auto";
  document.body.appendChild(errorImage);
}

function renderImageXHR() {
  // 1. Create a new XMLHttpRequest object
  const xhr = new XMLHttpRequest();

  // 2. Configure it: GET-request for the URL
  xhr.open('GET', 'https://xkcd.now.sh/?comic=latest', true);

  // 3. Send the request over the network
  xhr.send();

  // 4. This will be called after the response is received
  xhr.onload = function() {
    if (xhr.status != 200) {
      // analyze HTTP status of the response
      console.log(`Request Failed! ${xhr.responseText}`);
    } else {
      // show the result
      console.log(xhr.responseText);
      const comicData = JSON.parse(xhr.responseText);
      const comicImage = comicData.img;
      console.log(comicImage);

      let imageEl = document.createElement("img");
      imageEl.src = comicImage;
      imageEl.alt = comicData.alt;
      imageEl.style.border = "8px solid #1e90ff";
      document.body.appendChild(imageEl);
    }
  };

  xhr.onprogress = function() {
    console.log('READYSTATE: ', xhr.readyState); // 3 LOADING - Downloading; responseText holds partial data.
  };

  xhr.onerror = function() {
    console.log('XHR Request Failed!');
    errorMessage();
  };
}
renderImageXHR();


function renderImageAxios(){
  // Make a request for a user with a given ID
  axios
    .get('https://xkcd.now.sh/?comic=latest')
    .then(function(response) {
      // handle success
      console.log(response.data);

      const comic = response.data;
      const comicImg = comic.img;
      console.log(comicImg);
      let secondImg = document.createElement("img");
      secondImg.src = comicImg;
      secondImg.style.border = "8px solid #2ed573";
      document.body.appendChild(secondImg);
    })
    .catch(function(error) {
      // handle error
      console.log(`AXIOS Request Failed! ${error}`);

      errorMessage();
    });
}
renderImageAxios();
