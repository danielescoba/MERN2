/* 
Given a search criteria object whose values will only be primitives (ints, strings, bools)
and a list of objects,
return any object that matches all the key value pairs in the search criteria object
Bonus: write a 2nd solution using build in methods to practice functional programming
*/

const items = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
    { firstName: "Bob", lastName: "White", age: 31 },
  ];
  
  const searchCriteria1 = {
    firstName: "Bob",
    age: 31,
  };
  const expected1 = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "Bob", lastName: "White", age: 31 },
  ];
  
  const searchCriteria2 = {
    lastName: "Smith",
  };
  const expected2 = [
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
  ];
  
  /**
   * Finds the objects from @collection that match the @criteria
   * @param   {Object} criteria
   * @param   {Array<Object>} collection
   * @return  {Array<Object>}
   *          The found objects.
   * Time:    O()
   * Space:   O()
   */
  function findObjects(criteria, collection) {
    let result = [];
    for(let i = 0; i < collection.length; i++){
      if(collection[i][key] === criteria[key]){
        result.push(collection[i]);
      }
    }
    return result;
  }
  
  console.log(findObjects(searchCriteria1,items));
  
  
  const items = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
    { firstName: "Bob", lastName: "White", age: 31 },
  ];
  
  const searchCriteria1 = {
    firstName: "Bob",
    age: 31,
  };
  function find2(criteria, dic){
    let results=[];
    for(let dics of dic){
      let match = true;
      for(let key in criteria){
        if(dics [key]===undefined || dics[key] != criteria[key]){
          match = false;
          break;
        }
      }
      if(match){
        results.push(dics);
      }
    }
    return results;
  }
  console.log(find2(searchCriteria1,items))

  /**
   * Time:    O()
   * Space:   O()
   */
  function findObjectsFunctional(criteria, collection) {}
  
  module.exports = {
    findObjects,
  };

  function findObjects(items, criteria){
    // Let's use an array to keep track of our results
    let results = [];

    // And iterate through each item in our list of items
    for(let item of items){
        // We'll initialize a match variable to true. This is going to be used
        // to determine whether or not a match was found
        let match = true;

        // Now, we need to loop through the key/value pairs in the criteria
        // and check them against the item we're looking at
        for(let key in criteria) {
            // If the key doesn't exist, or if the values for that key do not match
            if(item[key] === undefined || item[key] != criteria[key]) {
                // toggle match to false and break out of this inner for loop
                match = false;
                break;
            }
        }
        // If we finished looping through the criteria and the item fits that
        // criteria, add it to our results
        if(match) {
            results.push(item);
        }
    }
    // Finally, return the results
    return results;
}