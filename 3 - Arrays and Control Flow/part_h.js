/// H. What's in Your Closet?
/*
  Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.
  - What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, 
    log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
  - Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".

  Q: Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
  A:
  
  Q: Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
  A:
  
  Q: In the same way, access one item from Thom's pants array.
  A:
  
  Q: Access one item from Thom's accessories array.
  A:
  
  Q: Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
  A:
  
  Q: Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
  A:

*/

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "Per Scholas hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!")
kristynsCloset.splice(6, 0, "raybans");
kristynsCloset[5] = "stained knit hat";
console.log(kristynsCloset);

console.log(thomsCloset[1][0]);
console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][1]}, and ${thomsCloset[2][1]}!`);

thomsCloset[1][2] = "Footie Pajamas";
console.log(thomsCloset);
