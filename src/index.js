// Do not change the line directly below.
const finder = require("./helpers/finder");

/**
 * logResult()
 * ========================
 * Logs out the entire array of objects returned from the `finder()` function.
 *
 * @param {Object} person - A person's names.
 * @param {Object} person.first - The person's first name.
 * @param {Object} person.last - The person's last name.
 */
function logResult(person) {
  // *finder() is a function
  finder(person.first, person.last)
    .then((banana) => {
      console.log(banana);
    })
    .catch((error) => console.log(error));
}

/**
 * logTwoResults()
 * ========================
 * Logs out the entire array of objects returned from the `finder()` function for two different people.
 *
 * @param {Object} person1 - A person's names.
 * @param {Object} person1.first - The person's first name.
 * @param {Object} person1.last - The person's last name.
 * @param {Object} person2 - A person's names. In the same format as person1.
 */

function logTwoResults(...person) {
  person.forEach((each) => {
    finder(each.first, each.last)
      .then((cooking) => {
        console.log(cooking);
      })
      .catch((error) => console.log(error));
  });

  // finder(person1.first, person1.last).then((banana) => {
  //   console.log(banana)
  //   finder(person2.first, person2.last).then((mango) => {
  //     console.log(mango)
  //   }).catch((error) => console.log(error))
  // }).catch((error) => console.log(error))
}

/**
 * logThreeResultsCities()
 * ========================
 * Logs out just the cities from all three people given to the function. You may assume that each search result will only return a single person.
 *
 * @param {Object} person1 - A person's names.
 * @param {Object} person1.first - The person's first name.
 * @param {Object} person1.last - The person's last name.
 * @param {Object} person2 - A person's names. In the same format as person1.
 * @param {Object} person3 - A person's names. In the same format as person1.
 */
function logThreeResultsCities(...person) {
  person.forEach((each) => {
    finder(each.first, each.last)
      .then(([{ city }]) => {
        console.log(city);
      })
      .catch((error) => console.log(error));
  });
}

// Do not change any of the code below this line.
module.exports = {
  logResult,
  logTwoResults,
  logThreeResultsCities,
};
