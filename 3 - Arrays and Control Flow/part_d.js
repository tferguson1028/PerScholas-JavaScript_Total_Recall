/// D. Change values
/*
  Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
  Q: What would you write to access the 3rd element of the array?
  A: To access the third, use the access operator "[int #]" starting with 0 as the first element
    ourClass[2];
  
  - Change the value of "Github" to "Octocat"
  - Add a new element, "Cloud City" to the array
*/

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
ourClass[4] = "Octocat";
ourClass.push("Cloud City");
