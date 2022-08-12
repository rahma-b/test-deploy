
// -------------------------
// comment project
// -----------------------------
var temp;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}


'';


document.getElementById('com-button').addEventListener('click', (event) => {
  temp = getNumberOrString(document.getElementById('comment-input-area').value);
  let element_comment_output = document.getElementById('comment-output');
  let new_li = document.createElement('li');
  new_li.innerText = temp;

  element_comment_output.appendChild(new_li);

});



// -------------------------
// Images project
// -----------------------------

var img_links, cap_array;


img_links = ['https://img.freepik.com/free-photo/silhouette-pink-cosmos-flowers-garden_1357-51.jpg?w=996&t=st=1660297457~exp=1660298057~hmac=f53ab218f8b9963de5a05c03518d99a5a6902cbd6ef900b75cc1d6981081abf4', 'https://img.freepik.com/free-photo/closeup-shot-plants-with-green-leaves-with-warm-sunset-light-it_181624-43603.jpg?w=996&t=st=1660302115~exp=1660302715~hmac=b0c7c11c384faca803c03dbcc41685cc22c1e2955235e168ea2e854a858ff5fb', 'https://img.freepik.com/free-photo/sun-shining-field-with-beautiful-sunflowers_181624-40464.jpg?w=1060&t=st=1660302196~exp=1660302796~hmac=ddeb6de96e1168464dda5e9ade96dfa1b2f9744176e4b4be0cfc1395a14fbf50', 'https://img.freepik.com/free-photo/poppy-flowers-summer_8353-9431.jpg?w=996&t=st=1660302428~exp=1660303028~hmac=c1702476858dfe0ac45dae47a71d289a4ae50baeda1d18730e7854681c600307', 'https://img.freepik.com/free-photo/beautiful-bouquet-tulips-spring-season_1232-4754.jpg?w=996&t=st=1660302521~exp=1660303121~hmac=727e24f52ecd9dd61812deb2b86298ce9636db90ca4db34cbf5099f1a33bf97c'];
cap_array = ['Cosmos flower photo created by Waewkidja - www.freepik.com', 'ellow sky photo created by wirestock - www.freepik.com', 'Field photo created by wirestock - www.freepik.com', 'Summer nature photo created by freepic.diller - www.freepik.com', 'Tulips background photo created by jannoon028 - www.freepik.com'];


document.getElementById('next-id').addEventListener('click', (event) => {
  let element_image_link = document.getElementById('image-link');
  img_links.push(img_links[0]);
  element_image_link.setAttribute("src", img_links.shift());
  let element_caption_id = document.getElementById('caption-id');
  cap_array.push(cap_array[0]);
  element_caption_id.innerText = cap_array.shift();

});

document.getElementById('previous-id').addEventListener('click', (event) => {
  let element_image_link2 = document.getElementById('image-link');
  img_links.unshift(img_links.slice(-1)[0]);
  element_image_link2.setAttribute("src", img_links.pop());

});

//end of image project 



/* =================
  TESTS, LOOK AT THESE
  Reading tests will always help you discover your requirements.
  You can make this window bigger. 
   ===================
*/
