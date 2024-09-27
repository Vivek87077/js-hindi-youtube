// Dates

let myDate = new Date()
// console.log("\n");

// console.log(myDate.toString());
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleTimeString())

// console.log("\n");

// console.log(typeof myDate);  // it is object typeof

let myCreateDate = new Date(2023, 0, 23);
// console.log(myCreateDate.toDateString());  // it means in java Script,month is started from number 0 means January[0], Feb[1], march[2],----

let myCreateDate2 = new Date(2023, 0, 23, 5, 3);
// console.log(myCreateDate2.toLocaleString());  

let myCreateDate3 = new Date("01-14-2023");
// console.log(myCreateDate3.toLocaleString());  

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getHours());
// console.log(newDate.getDay());
// console.log(newDate.getSeconds());

