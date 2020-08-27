/* eslint-disable func-names */
/* eslint-disable eqeqeq */
/* eslint-disable no-use-before-define */
/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

'use strict';

/*
Exercise 3: Dog photo gallery

Let's make a randomized dog photo gallery!

Write a function that makes a HTTP Request to https://dog.ceo/api/breeds/image/random. 
It should trigger after clicking a button in your webpage. 
***Every time the button is clicked it should append a new dog image to the DOM.***

Create an index.html file that will display your random image
Add 2 <button> and 1 <ul> element, either in the HTML or through JavaScript
Write two versions for the button functionality: one with XMLHttpRequest, and the other with axios
When any one of the 2 buttons is clicked it should make a HTTP Request to https://dog.ceo/api/breeds/image/random
After receiving the data, append to the <ul> a <li> that contains an <img> element with the dog image
Incorporate error handling: log to the console the error message
*/

// create the XHR-button event listener
document.getElementById('xhr-button').addEventListener('click', displayDogImageXHR);
document.getElementById('axios-button').addEventListener('click', displayDogImageAxios);


const gallery = document.getElementById("gallery-container");
gallery.style.backgroundColor = "#f7f1e3";
gallery.style.paddingTop = "1.5rem";
gallery.style.paddingBottom = "1.5rem";
gallery.style.display = "flex";


function errorMessage(){
    const errorMessage = document.createElement("p");
    errorMessage.innerHTML = "Request Failed!";
    errorMessage.style.textAlign = "center";
    document.body.appendChild(errorMessage);

    const errorImage = document.createElement("img");
    errorImage.src = "https://www.zooplus.co.uk/magazine/wp-content/uploads/2018/01/fotolia_134798768.jpg";
    errorImage.alt = "Error message";
    errorImage.style.width = "300px";
    errorImage.style.display = "block";
    errorImage.style.marginLeft = "auto";
    errorImage.style.marginRight = "auto";
    document.body.appendChild(errorImage);
}

function displayDogImageXHR(){
    // 1. Create a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();
    
    // 2. Configure it: GET-request for the URL
    xhr.open('GET', 'https://dog.ceo/api/breeds/image/random', true);

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
            const dogData = JSON.parse(xhr.responseText);
            const dogImage = dogData.message;
            console.log(dogImage);

            const imageEl = document.createElement("img");
            imageEl.src = dogImage;
            imageEl.style.border = "10px solid #3ae374";
            imageEl.style.width = "200px";
            imageEl.style.margin = "0.5rem";

            const divElement = document.getElementById("xhr-list-container");
            const ulElement = document.getElementById("xhr-list");
            const liElement = document.createElement("li");
            divElement.appendChild(ulElement);
            ulElement.appendChild(liElement);
            liElement.appendChild(imageEl);
            
            divElement.style.display = "flex";
            divElement.style.overflow = "hidden";
            divElement.style.justifyItems = "center";
            divElement.style.width = "50%";
            ulElement.style.listStyle = "none";
            liElement.style.fontSize = "0";
            liElement.style.margin = "0";
            
            //ulElement.style.border = "1px solid blue";
            //liElement.style.border = "1px solid green";

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
displayDogImageXHR();

function displayDogImageAxios(){
    // Make a request for a user with a given ID
    axios
      .get('https://dog.ceo/api/breeds/image/random')
      .then(function(response) {
        // handle success
        console.log(response.data.message);
        const dogImage = response.data.message;

        const imageEl = document.createElement("img");
            imageEl.src = dogImage;
            imageEl.style.border = "10px solid #17c0eb";
            imageEl.style.width = "250px";
            imageEl.style.margin = "0.5rem";

            const divElement = document.getElementById("axios-list-container");
            const ulElement = document.getElementById("axios-list");
            const liElement = document.createElement("li");
            divElement.appendChild(ulElement);
            ulElement.appendChild(liElement);
            liElement.appendChild(imageEl);
            
            divElement.style.display = "flex";
            divElement.style.overflow = "hidden";
            divElement.style.justifyItems = "center";
            divElement.style.width = "50%";
            ulElement.style.listStyle = "none";
            liElement.style.fontSize = "0";
            liElement.style.margin = "0";
            //divElement.style.border = "1px solid red";
            //ulElement.style.border = "1px solid blue";
            //liElement.style.border = "1px solid green";
        
      })
      .catch(function(error) {
        // handle error
        console.log(`Axios Request Failed! ${error}`);

        errorMessage();
      });
  }
  displayDogImageAxios();
  