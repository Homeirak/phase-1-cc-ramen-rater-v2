// index.js
//DELIVERABLES:
// See all ramen images in the div with the id of ramen-menu.

//FUNCTIONS:
// main: invokes displayRamens and addSubmitListener after the DOM has fully loaded and start the program logic.
// displayRamens: requests the data from the server to get all the ramen objects. Then, display the image for each of the ramen using an img tag inside the #ramen-menu div.
// callback called handleClick: fires when you click an image from the #ramen-menu to see all the info about that ramen displayed inside the #ramen-detail div (where it says insert comment here and insert rating here).
// addSubmitListener: attaches a form submit to the Add New Ramen "create" button create a new ramen and add it to the#ramen-menu  div. The new ramen does not need to persist; in other words, if you refresh the page, it's okay that the new ramen is no longer on the page.

let ramenInfo;
let ramen;
let ramenMenu;
let newImg;

const main = () => {
  document.addEventListener("DOMContentLoaded", () => {
    displayRamens(ramenInfo);
    addSubmitListener();
  });
};
main();

function displayRamens() {
  fetch("http://localhost:3000/ramens")
  .then(resp => resp.json())
  .then(ramenInfo => {
      ramen = ramenInfo;
      ramenMenu = document.getElementById("ramen-menu");

      ramen.forEach(ramen => {
        const img = document.createElement("img");
        ramenMenu.appendChild(img);
        img.src = ramen.image;

        img.addEventListener("click", () => handleClick(ramen));
      })

    console.log(ramenInfo);

  })
};

const handleClick = (ramen) => {
  document.querySelector(".detail-image").src =ramen.image;
  document.querySelector(".name").textContent = ramen.name;
  document.querySelector(".restaurant").textContent = ramen.restaurant;
  document.querySelector("#rating-display").textContent = ramen.rating;
  document.querySelector("#comment-display").textContent = ramen.comment;
};

function addSubmitListener(){
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();

    const newRamen = {
      id: ramen.length +1,
      name: document.querySelector("#new-name").value,
      restaurant: document.querySelector("#new-restaurant").value,
      image: document.querySelector("#new-image").value,
      rating: document.querySelector("#new-rating").value,
      comment: document.querySelector("#new-comment").value
    };
      newImg = document.createElement("img");
      newImg.src = newRamen.image;

      newImg.addEventListener("click", () => handleClick(newRamen));

      ramenMenu.appendChild(newImg);
    
  }
)};


// Export functions for testing
// export {
//   displayRamens,
//   addSubmitListener,
//   handleClick,
//   main,
// };
