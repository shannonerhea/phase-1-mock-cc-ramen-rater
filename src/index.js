/**## Core Deliverables

As a user, I can:

- See all ramen images in the `div` with the id of `ramen-menu`. When the page
  loads, request the data from the server to get all the ramen objects. Then,
  display the image for each of the ramen using an `img` tag inside the
  `#ramen-menu` div.
- Click on an image from the `#ramen-menu` div and see all the info about that
  ramen displayed inside the `#ramen-detail` div and where it says
  `insert comment here` and `insert rating here`.
- Create a new ramen after submitting the `new-ramen` form. The new ramen should
  be added to the`#ramen-menu` div. The new ramen does not need to persist; in
  other words, if you refresh the page, it's okay that the new ramen is no
  longer on the page. */
let currentItem;
fetch('http://localhost:3000/ramens')
.then(response => response.json())
.then(data => {
    //console.log(data) winning lol
    ramenMenu(data)
    selectItem(data[0])

})

function ramenMenu(data) {
    const menu = document.querySelector(`ramen-menu`);

    data.forEach(item => {
        const menuItem = document.createElement('span')
        menuItem.textContent = item.name

    })


};

function selectItem(item) {
    currentItem = item
};
