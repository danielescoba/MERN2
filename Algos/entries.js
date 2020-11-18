/* 
  Recreate Object.entries method
  Given an object,
  return an array of arrays of the object's key value pairs, where each key value pair is a 2 item array
  Do not include key value pairs from the given objects prototype (these are included by default when looping over an object's keys)
*/

const obj1 = { firstName: "Foo", lastName: "Bar", age: 13 };
obj1.__proto__.keyOnProto = "val from proto";
const expected1 = [
  ["firstName", "Foo"],
  ["lastName", "Bar"],
  ["age", 13],
];

/**
 * Returns a 2d array of key value pairs from @obj
 * @param   {Object} obj
 * @typedef {Array<Array<string, any>>} output
 *          The nested array should look like [key, val]
 * @return  {output}
 * Time:    O()
 * Space:   O()
 */
function entries(obj) {
  let arr = [];
  for(let key in obj){
    arr.push([key,obj[key]]);
  }
  return arr;
}

module.exports = { entries };