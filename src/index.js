



//-----------------------------
// fetch('http://localhost:3000/ramens')
// .then(response => response.json())
// .then(data => {
//   //console.log(data)
//   data.forEach((ramen) => {
//    renderRamen(ramen)
//   })
// })
// function renderRamen(ramenObj) {
//   //console.log(ramen.image)
//   const ramenMenu = document.querySelector('#ramen-menu')
//   //console.log(ramenMenu)
//   let ramenImg = document.createElement('img')
//   //console.log(ramenImg)
//   ramenImg.src = ramenObj.image
//   ramenMenu.append(ramenImg)
//   handleClick(ramenImage,ramenObj)
//   }
//   //clickHandle(ramenImg, ramen)

// function handleClick(img, ramen) {
//   img.addEventListener('click', () => {
//     const detailImage = document.querySelector('.detail-image')
//     detailImage.src = reman.image

//     const detailName = document.querySelector('.name')
//     detailName.textContent = ramen.name 

//     const detailRestaurant = document.querySelector('.restaurant')
//     detailRestaurant.textContent = ramen.restaurant 


//     //console.log(ramen)
//     //ramen.src = ramen.image

//   })
// };

// function handleForm() {
//   const form = document.querySelector('#new-ramen')
//   //console.log(form)
//   form.addEventListener('submit', (event) => {
//     event.preventDefault()
//     let newName = event.target["name"].value
//     let newRest = event.target["restaurant"].value
//     let newImage = event.target["image"].value
//     let newRating = event.target["rating"].value
//     let newComment = event.target["new-comment"].value

//     const newRamenObj = {
//       name : newName ,
//       restaurant : newRest,
//       image : newImage,
//       rating : newRating,
//       comment : newComment,
//     };
//     fetch('  http://localhost:3000/ramens')
//     method : "POST"

//     //renderRamen(newRamenObj)
// }

// handleForm()










/**Endpoints
The endpoints you may need are:
GET /ramens
GET /ramens/:id
Feel free to add any additional classes or ids to any elements in the HTML file as you see fit.
*Core Deliverables
As a user, I can:

*See all ramen images in the div with the id of ramen-menu. When the page loads, request the data from the server to get all the ramen objects. Then, display the image for each of the ramen using an img tag inside the #ramen-menu div.

*Click on an image from the #ramen-menu div and see all the info about that ramen displayed inside the #ramen-detail div and where it says insert comment here and insert rating here.

*Create a new ramen after submitting the new-ramen form. The new ramen should be added to the#ramen-menu div. The new ramen does not need to persist; in other words, if you refresh the page, it's okay that the new ramen is no longer on the page. */



//---code tyler gave out from walk through----
// fetch("http://localhost:3000/ramens")
//   .then(response => response.json())
//   .then(ramenObjects => {
//     // renderRamen(ramenObjects)
//     ramenObjects.forEach(ramen => renderRamenMenuItem(ramen))
//   })

// function renderRamenMenuItem(ramen) {
//   const newImg = document.createElement('img')
//   newImg.src = ramen.image

//   newImg.addEventListener('click', () => ramenSelector(ramen))

//   document.getElementById('ramen-menu').append(newImg)
// }

// function ramenSelector(ramen) {
//   // grab the image to replace
//   const img = document.querySelector('.detail-image')
//   img.src = ramen.image

//   // add the ramen name
//   const name = document.querySelector('.name')
//   name.textContent = ramen.name

//   // add the restaurant
//   const restaurant = document.querySelector('.restaurant')
//   restaurant.textContent = ramen.restaurant

//   // add the rating
//   const rating = document.querySelector('#rating-display')
//   rating.textContent = ramen.rating

//   // add the comment
//   const comment = document.querySelector('#comment-display')
//   comment.textContent = ramen.comment
// }

// const newRamenForm = document.querySelector('#new-ramen')

// newRamenForm.addEventListener('submit', (event) => handleFormSubmit(event))

// function handleFormSubmit(event) {
//   event.preventDefault()

//   // create an object with the values from the form (event)
//   const ramenObject = {
//     name: event.target.name.value,
//     restaurant: event.target.restaurant.value,
//     image: event.target.image.value,
//     rating: event.target.rating.value,
//     comment: event.target["new-comment"].value
//     // comment: event.target.new-comment.value // bad, dont do
//   }

//   // add the new object to the DOM
//   renderRamenMenuItem(ramenObject)

//   // clear that form
//   //newRamenForm.reset()
//   // event.target.reset() // same
// }
