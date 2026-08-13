var factList = [
  "Over 7 million people have been internally displaced due to mine expansions.", /*0th fact*/
  "19% of mine workers reported seeing children dead or in critical conditions on the mining site.", /*1st fact*/
  "In mining areas, the rate of severe malnutrition amoungst children under the age of 5 is much higher than the national average.", /*2nd fact*/
  "Fathers with mining jobs are associated with a higher level of newborns with birth defects.", /*3rd fact*/
];
/* list of facts to be displayed */
var fact = document.getElementById("fact");
var factButton = document.getElementById("factbutton")
var count = 0;
/* keeps track of where the user is in the list of facts */

factButton.addEventListener("click", displayFact)

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
};