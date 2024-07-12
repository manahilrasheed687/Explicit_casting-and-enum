// #! /usr/bin/env
// // Expilit casting

// let myName: unknown = "zia";
// console.log((myName as string).length)
// console.log((<string> myName))

// // Enum 

// // syntax: enum num {}

// enum color {red,green,blue};// starts with a
// var c : color = color.green;
// console.log(c); // 1 answer


// enum color1 {red = 1, green,blue}
// var colorName: string = color1[2]
// console.log(colorName) // green answer


// enum color2 {red = 1, green = 2, blue = 4} // can assign values to all
// var coloindex = color2["blue"]
// console.log(coloindex) // 4 answer


// // const enum

// const enum color {red,green,blue}
// var c: color = color.green
// console.log(c) // 1

// const enum color1 {red = 1, green,blue}
// var colorName: string =  color[2]; // not allowed with const enum
// console.log(colorName)// error

// const enum color2 {red = 1, green = 2, blue = 4} //can assign all values
// var coloindex = color2["blue"]
// console.log(coloindex) //4