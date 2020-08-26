/* eslint-disable eqeqeq */
/* eslint-disable no-console */
/* eslint-disable func-names */

'use strict';

/*
Exercise 1: Who do we have here?

Wouldn't it cool to make a new friend with just the click of a button?

Write a function that makes a HTTP Request to https://www.randomuser.me/api

Inside the JavaScript file write two functions: one with XMLHttpRequest, and the other with axios
Each function should make a HTTP Request to the given endpoint: https://www.randomuser.me/api
Log the received data to the console
Incorporate error handling: log to the console the error message
*/

function makeXMLHttpRequest() {
  // 1. Create a new XMLHttpRequest object
  const xhr = new XMLHttpRequest();

  // 2. Configure it: GET-request for the URL /article/.../load
  xhr.open('GET', 'https://www.randomuser.me/api', true);

  // console.log('READYSTATE: ', xhr.readyState); //1 OPEN - open() has been called.

  // 3. Send the request over the network
  xhr.send();

  // 4. This will be called after the response is received
  xhr.onload = function() {
    if (xhr.status != 200) {
      // analyze HTTP status of the response
      console.log(xhr.responseText);
    } else {
      // show the result
      console.log(xhr.responseText);
      // console.log('READYSTATE: ', xhr.readyState); //4 DONE - The operation is complete.
      document.getElementById('text').innerHTML = this.responseText;
    }
  };

  xhr.onprogress = function() {
    console.log('READYSTATE: ', xhr.readyState); // 3 LOADING - Downloading; responseText holds partial data.
  };

  xhr.onerror = function() {
    console.log('Request Failed!');
  };
}
makeXMLHttpRequest();

function makeAxiosRequest() {
  // Make a request for a user with a given ID
  axios
    .get('https://www.randomuser.me/api')
    .then(function(response) {
      // handle success
      console.log(response);
      document.getElementById('other-text').innerHTML = JSON.stringify(
        response,
      );
    })
    .catch(function(error) {
      // handle error
      console.log(`Request Failed! ${error}`);
    });
}
makeAxiosRequest();
