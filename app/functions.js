/****
 * 
 *  get all data to ls
 */

const getData = (key) => {
  let lsdata = [];
  if (localStorage.getItem(key)) {
    return JSON.parse(localStorage.getItem(key));
  } else {
    return lsdata;
  }
};




/****
 * 
 * set data to ls
 */


const insertData = (key , data) => {

  // check data exisist

  let lsData = [];
  if(localStorage.getItem(key)){
    lsData = JSON.parse(localStorage.getItem(key));
 };

  // push data
 lsData.push(data);

 localStorage.setItem(key , JSON.stringify(lsData));

};



/****
 * 
 * update  data to ls
 */


const updateData = (key , data) => {
 localStorage.setItem(key , JSON.stringify(data));

};










