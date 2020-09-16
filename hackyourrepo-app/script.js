'use strict';

//place holder data
const placeHolderRepos = [
  {
    name: 'SampleRepo1',
    description: 'This repository is meant to be a sample',
    forks: 5,
    updated: '2020-05-27 12:00:00',
  },
  {
    name: 'AndAnotherOne',
    description: 'Another sample repo! Can you believe it?',
    forks: 9,
    updated: '2020-06-27 12:00:00',
  },
  {
    name: 'HYF-Is-The-Best',
    description:
      "This repository contains all things HackYourFuture. That's because HYF is amazing!!!!",
    forks: 130,
    updated: '2020-07-27 12:00:00',
  },
];

// Find and store the elements we want to manipulate
const menuElement = document.querySelector('#selectMenu');
const repoName = document.querySelector('#repository');
const repoDescription = document.querySelector('#description');
const repoForks = document.querySelector('#forks');
const repoUpdated = document.querySelector('#updated');
const repoContributors = document.querySelector('#contributors');

//define what you want to happen when the <select> element's value is changed
function displayRepoInformation(){
  //select > option > value, starting from cero:
const index = +menuElement.value;
      repoName.innerHTML = `Repository: ${placeHolderRepos[index].name}`;
      repoDescription.innerHTML = `Description: ${placeHolderRepos[index].description}`;
      repoForks.innerHTML = `Forks: ${placeHolderRepos[index].forks}`;
      repoUpdated.innerHTML = `Updated: ${placeHolderRepos[index].updated}`;
    }
  }
  return;
}

//define event listener
// The 'change' event is fired when an alteration to the <select> element's value is committed by the user.
menuElement.addEventListener('change', event => {
  console.log(event.target.value); //the selected option value
  
  //call the function that will respond to the event
  displayRepoInformation();

});
