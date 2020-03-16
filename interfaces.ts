


// interface NumberDictionary {
//     [index: string]: number;
//     length: number; // ok, length is a number
//     name: string; // error, the type of 'name' is not a subtype of the indexer
// }

// ***** Indexable Types2 *****
class Animal {
    name: string;
}
class Dog extends Animal {
    breed: string;
}

// Error: indexing with a numeric string might get you a completely separate type of Animal!
interface NotOkay {
    [x: number]: Animal;
    [x: string]: Dog;
}


// ***** Indexable Types *****
// interface StringArray {
//     [index: number]: string;
// }
//
// let myArray: StringArray;
// myArray = ["Bob", "Fred"];
//
// let myStr: string = myArray[0];
// console.log(myStr);


// ***** Function Types2 *****
// interface SearchFunc {
//     (source: string, subString: string): boolean;
// }
//
// let mySearch: SearchFunc;
//
// // error: Type '(src: string, sub: string) => string' is not assignable to type 'SearchFunc'.
// // Type 'string' is not assignable to type 'boolean'.
// mySearch = function(src, sub) {
//     let result = src.search(sub);
//     return "string";
// };



// ***** Function Types *****
// interface SearchFunc {
//     (source: string, subString: string): boolean;
// }
//
// // let mySearch: SearchFunc;
// // mySearch = function(source: string, subString: string) {
// //     let result = source.search(subString);
// //     return result > -1;
// // };
//
// let mySearch: SearchFunc;
// mySearch = function(src: string, sub: string): boolean {
//     let result = src.search(sub);
//     return result > -1;
// };

// ***** Excess Property Checks *****
// interface SquareConfig {
//     color?: string;
//     width?: number;
//     [propName: string]: any;
// }
//
// function createSquare(config: SquareConfig): { color: string; area: number } {
//     let newSquare = { color: "white", area: 100 };
//     if (config.color) {
//         newSquare.color = config.color;
//     }
//     if (config.width) {
//         newSquare.area = config.width * config.width;
//     }
//     return newSquare;
// }
//
// let squareOptions1 = { colour: "red", width: 100 };
// let mySquare1 = createSquare(squareOptions1);
// console.log("mySquare1", mySquare1);
//
// let squareOptions2 = { colour: "red" };
// let mySquare2 = createSquare(squareOptions2);
// console.log("mySquare2", mySquare2);



// ***** Readonly properties2 *****
// let a: number[] = [1, 2, 3, 4];
// console.log(a);
// let ro: ReadonlyArray<number> = a;
// console.log(ro);
// // ro[0] = 12; // error!
// // ro.push(5); // error!
// // ro.length = 100; // error!
// // a = ro; // error!
// a = ro as number[];
// console.log(ro);



// ***** Readonly properties *****
// interface Point {
//     readonly x: number;
//     readonly y: number;
// }
//
// let p1: Point = { x: 10, y: 20 };
// p1.x = 5; // error!


// ***** Optional Properties2 *****
// interface SquareConfig {
//     color?: string;
//     width?: number;
// }
//
// function createSquare(config: SquareConfig): { color: string; area: number } {
//     let newSquare = { color: "white", area: 100 };
//     if (config.clor) {
//         // Error: Property 'clor' does not exist on type 'SquareConfig'
//         newSquare.color = config.clor;
//     }
//     if (config.width) {
//         newSquare.area = config.width * config.width;
//     }
//     return newSquare;
// }
//
// let mySquare = createSquare({ color: "black" });


// ***** Optional Properties *****
// interface SquareConfig {
//     color?: string;
//     width?: number;
// }
//
// function createSquare(config: SquareConfig): { color: string; area: number } {
//     let newSquare = { color: "white", area: 100 };
//     if (config.color) {
//         newSquare.color = config.color;
//     }
//     if (config.width) {
//         newSquare.area = config.width * config.width;
//     }
//     return newSquare;
// }
//
// let mySquare = createSquare({ color: "black" });
//
// console.log(mySquare);


// ***** Our First Interface2 *****
// interface LabeledValue {
//     label: string;
// }
//
// function printLabel(labeledObj: LabeledValue) {
//     console.log(labeledObj.label);
// }
//
// let myObj = { size: 10, label: "Size 10 Object" };
// printLabel(myObj);


// ***** Our First Interface *****
// function printLabel(labeledObj: { label: string }) {
//     console.log(labeledObj.label);
// }
//
// let myObj = { size: 10, label: "Size 10 Object" };
// printLabel(myObj);