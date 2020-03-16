

// ***** Type assertions2 *****
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;

console.log(someValue);
console.log(strLength);


// ***** Type assertions *****
// let someValue: any = "this is a string";
// let strLength: number = (<string>someValue).length;
//
// console.log(someValue);
// console.log(strLength);


// ***** Object *****
// declare function create(o: object | null): void;
//
// create({ prop:0 }); // OK
// create(null); // OK
//
// // create(42); // Error
// // // Argument of type '42' is not assignable to parameter of type 'object | null'.
// // create("string"); // Error
// // // Argument of type '"string"' is not assignable to parameter of type 'object | null'.
// // create(false); // Error
// // // Argument of type 'false' is not assignable to parameter of type 'object | null'.
// create(undefined); // Error
// // Argument of type 'undefined' is not assignable to parameter of type 'object | null'.


// ***** never *****
// // Function returning never must have unreachable end point
// function error(message: string): never {
//     throw new Error(message)
// }
//
// // Inferred return type is never
// function fail() {
//     return error("Something failed");
// }
//
// // Function returning never must have unreachable end point
// function infiniteLoop(): never {
//     while (true) {}
// }
//
// // error("This is a error message"); // Error
// // Error1 : Error: This is a error message
//
// // fail(); // Error
// // Error1 : Error: Something failed
// //
// // infiniteLoop(); // never get output
// // Error1 : nothing come up on the terminal

// ***** Null and Undefined *****
// // Not much else we can assign to these variables!
// let u: undefined = undefined;
// let n: null = null;
//
// console.log(u, n);


// ***** Void *****
// function warnUser(): void {
//     console.log("This is my warning message");
// }
// warnUser();
//
// let unusable: void = undefined;
// unusable = null; // OK if `--strictNullChecks` is not given
// console.log(unusable);


// ***** Any3 *****
// let list: any[] = [1, true, "free"];
// console.log(list);
//
// list[1] = 100;
// console.log(list);

// ***** Any2 *****
// let notSure: any = 4;
// notSure.ifItExists();   // okay, ifItExists might exist at runtime
// notSure.toFixed();      // okay, toFixed exists (but the compiler doesn't check)
//
// let prettySure: Object = 4;
// prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.
// // Property 'toFixed' does not exist on type 'Object'.


// ***** Any *****
// let notSure: any = 4;
//
// notSure = "maybe a string instead";
// console.log(notSure);
//
// notSure = false; // okay, definitely a boolean﻿
// console.log(notSure);


// ***** tuple *****
// enum Color {
//     Red = 1,
//     Green = 2,
//     Blue = 4
// }
// let c: Color = Color.Green;
// let b: Color = Color.Blue;
//
// console.log(c);
// console.log(b);


// ***** tuple *****
// // Declare a tuple type
// let x: [string, number];
// // Initialize it
// x = ["hello", 10]; // OK
// // Initialize it incorrectly
// // x = [10, "hello"]; // Error
// // Error1 : Type 'number' is not assignable to type 'string'.
// // Error2 : Type 'string' is not assignable to type 'number'.
//
// console.log(x);
//
// // x[3] = "world"; // Error
// // Error1 : Property '3' does not exist on type '[string, number]'.
//
// // console.log(x[5].toString()); // Error
// // Error1 : Property '5' does not exist on type '[string, number]'.﻿


// ***** Array *****
// let list: number[] = [1, 2, 3];
// let listGeneric: Array<number> = [1, 2, 3];
//
// console.log(list);
// console.log(listGeneric);


// ***** string3 *****
// let fullName: string = `Bob Bobbington`;
// let age: number = 37;
// let sentence: string = "Hello, my name is " + fullName + ".\n\n" + "I'll be " + (age + 1) + " years old next month.";
//
// console.log(sentence);


// ***** string2 *****
// let fullName: string = `Bob Bobbington`;
// let age: number = 37;
// let sentence: string = `Hello, my name is ${fullName}. I'll be ${age + 1} years old next month.`;
//
// console.log(fullName);
// console.log(age);
// console.log(sentence);


// ***** string *****
// let color: string = "blue";
// console.log(color);
//
// color = 'red';
// console.log(color);
//
// let str_undefined : string;
// console.log(str_undefined);
//
// let str_null : string = "";
// console.log(str_null);


// ***** nubmers *****
// let decimal: number = 6;
// let hex: number = 0xf00d;
// let binary: number = 0b1010;
// let octal: number = 0o744;
//
// console.log(decimal);
// console.log(hex);
// console.log(binary);
// console.log(octal);


// ***** boolean *****
// let isDone: boolean = false;
// let isDoneTrue: boolean = true;
// let isDoneUndefined: boolean;
//
// console.log(isDone);
// console.log(isDoneTrue);
// console.log(isDoneUndefined);
// console.log(isDone===false);
// // @ts-ignore
// console.log(isDone===true);
// // @ts-ignore
// console.log(isDone===isDoneTrue);
// console.log(isDone===isDoneUndefined);
// console.log(isDoneTrue===isDoneUndefined);


