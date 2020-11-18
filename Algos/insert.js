/* 
  Given a table name string and an object whose key value pairs represent column names and values for the columns
  return a SQL insert statement string
  Tip: string interpolation (using back ticks, the key to the left of num 1 key) make it easy to add variables into a string or to add quotations without needing to escape them.
  Bonus: after solving it, write a 2nd solution focusing on functional programming using built in methods
*/

const entries = require("./entries");

const table = "users";
const insertData1 = { first_name: "John", last_name: "Doe" };
const expected1 =
  "INSERT INTO users (first_name, last_name) VALUES ('John', 'Doe');";

// Bonus:
const insertData2 = {
  first_name: "John",
  last_name: "Doe",
  age: 30,
  is_admin: false,
};
const expected2 =
  "INSERT INTO users (first_name, last_name, age, is_admin) VALUES ('John', 'Doe', 30, false);";
// Explanation: no quotes around the int or the bool, technically in SQL the bool would become a 0 or 1, but don't worry about that here.

/**
 * Generates a SQL insert statement from the inputs
 * @param   {string} tableName
 * @param   {Object} columnValuePairs
 * @return  {string}
 *          A string formatted as a SQL insert statement
 *          where the columns and values are extracted
 *          from @columnValuePairs
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
function insert(tableName, columnValuePairs) {
  let ValueEnties = entries(columnValuePairs);
  let query = `INSERT INTO ${tableName}(`;
    for(let i=0;i < ValueEnties.length;i++){
    query +=`${ValueEnties[i][0]}`;
    if(i<ValueEnties.length-1){
      query+=`,`;
    }
  }
  query+=`) VAlUES (`;
  for(let i=0; i < ValueEnties.length;i++){
    if(isNaN(ValueEnties[i][1])){
      query+=`'${ValueEnties[i][1]}`;
    } else{
      query+=`'${ValueEnties[i][1]}`;
    }
    if(i<ValueEnties.length-1){
      query +=`,`;
    }
  }
  query += `);`;
  return query
}
const table = "users";
const insertData1 = { first_name: "John", last_name: "Doe" };
console.log(insert(table,insertData1));

/**
 * Time:    O()
 * Space:   O()
 */
function insertFunctional(tableName, columnValuePairs) {}

module.exports = {
  insert,
};