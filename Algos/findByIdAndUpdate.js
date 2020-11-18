/* 
  Given an id, an object that has keys with corresponding updated values, and an array of objects
  Find the object by "id" key that matches the given id value and then update that object's
  keys with the provided new values.
  Return the updated object, or null if no object was found
*/

const students = [
    {
      id: 1,
      name: "student1",
      isLateToday: false,
      lateCount: 15,
      redBeltStatus: false,
    },
    {
      id: 2,
      name: "student2",
      isLateToday: false,
      lateCount: 1,
      redBeltStatus: false,
    },
    {
      id: 3,
      name: "student3",
      isLateToday: false,
      lateCount: 0,
      redBeltStatus: false,
    },
  ];
  
  const id1 = 3;
  const updateData1 = { redBeltStatus: true, isLateToday: true };
  const expected1 = {
    id: 3,
    name: "student3",
    isLateToday: true,
    lateCount: 0,
    redBeltStatus: true,
  };
  
  const id2 = 1;
  const updateData2 = {
    isLateToday: true,
    lateCount: 16,
    randomKey: "randomValue",
  };
  const expected2 = {
    id: 1,
    name: "student1",
    isLateToday: true,
    lateCount: 16,
    redBeltStatus: false,
  };
  /* 
    Explanation: In this implementation
      randomKey was not added because it is not an existing key that can be updated
  */
  
  const id3 = 5;
  const updateData3 = {};
  const expected3 = null;
  
  /**
   * Finds the matching object from @collection based on @id to update it's values.
   * @param   {number} id
   * @param   {Object} updatedVals
   *          Key value pairs used to update the object with
   *          an @id that matches an object in the @collection
   * @param   {Array<Object>} collection
   * @return  {(Object|null)}
   *          The object that was updated or null if no object found.
   * Time:    O()
   * Space:   O()
   */
  function findByIdAndUpdate(id, updatedVals, collection) {}
  
  module.exports = {
    findByIdAndUpdate,
  };

  function findByIdAndUpdate(id, updateValues, collection){
    // Let's start by looping through our collection
    for(let item of collection) {

        // If we've found the correct item
        if(item.id === id) {
            // Loop through the key value pairs in the update values object
            for(let key in updateValues) {
                // And assuming the key exists in the object, update the value accordingly.
                if(item[key] !== undefined) {
                    item[key] = updateValues[key];
                }
            }
            // After we've updated that one object, we're done and can return it!
            return item;
        }
    }
    // If we finished iterating through the entire collection and didn't 
    // return early, then that item doesn't exist, so adios!
    return null;
}