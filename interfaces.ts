

// ***** Interfaces Extending Classes *****
class Control {
    private state: any; // -> public state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control implements SelectableControl {
    select() {}
}

class TextBox extends Control {
    select() {}
}

// Error: Property 'state' is missing in type 'Image'.
// class Image1 implements SelectableControl {
//     // TS2420: Class 'Image1' incorrectly implements interface 'SelectableControl'.
//     // Types have separate declarations of a private property 'state'.
//     private state: any;
//     select() {}
// }
//
// class Location1 {}



// ***** Extending Interfaces2 *****
// interface Counter {
//     (start: number): string;
//     interval: number;
//     reset(): void;
// }
//
// function getCounter(): Counter {
//     let counter = function(start: number) {} as Counter;
//     counter.interval = 123;
//     counter.reset = function() {};
//     return counter;
// }
//
// let c = getCounter();
// console.log(c.interval);
// c(10);
// console.log(c.interval);
// c.reset();
// console.log(c.interval);
// c.interval = 5.0;
// console.log(c.interval);




// ***** Extending Interfaces1 *****
// interface Shape {
//     color: string;
// }
//
// interface PenStroke {
//     penWidth: number;
// }
//
// interface Square extends Shape, PenStroke {
//     sideLength: number;
// }
//
// let square = {} as Square;
// square.color = "blue";
// square.sideLength = 10;
// square.penWidth = 5.0;



// ***** Extending Interfaces *****
// interface Shape {
//     color: string;
// }
//
// interface Square extends Shape {
//     sideLength: number;
// }
//
// let square = {} as Square;
// square.color = "blue";
// square.sideLength = 10;





// ***** Class Types5 *****
// interface ClockConstructor {
//     new (hour: number, minute: number);
// }
//
// interface ClockInterface {
//     tick();
// }
//
// const Clock: ClockConstructor = class Clock implements ClockInterface {
//     constructor(h: number, m: number) {}
//     tick() {
//         console.log("beep beep");
//     }
// };


// ***** Class Types4 *****
// interface ClockConstructor {
//     new (hour: number, minute: number): ClockInterface;
// }
// interface ClockInterface {
//     tick(): void;
// }
//
// function createClock(
//     ctor: ClockConstructor,
//     hour: number,
//     minute: number
// ): ClockInterface {
//     return new ctor(hour, minute);
// }
//
// class DigitalClock implements ClockInterface {
//     constructor(h: number, m: number) {}
//     tick() {
//         console.log("beep beep");
//     }
// }
// class AnalogClock implements ClockInterface {
//     constructor(h: number, m: number) {}
//     tick() {
//         console.log("tick tock");
//     }
// }
//
// let digital = createClock(DigitalClock, 12, 17);
// let analog = createClock(AnalogClock, 7, 32);



// ***** Class Types3 *****
// interface ClockConstructor {
//     new (hour: number, minute: number);
// }
//
// class Clock implements ClockConstructor {
//     currentTime: Date;
//     constructor(h: number, m: number) {}
// }



// ***** Class Types2 *****
// interface ClockInterface {
//     currentTime: Date;
//     setTime(d: Date): void;
// }
//
// class Clock implements ClockInterface {
//     currentTime: Date = new Date();
//     setTime(d: Date) {
//         this.currentTime = d;
//     }
//     constructor(h: number, m: number) {}
// }


// ***** Class Types1 *****
// interface ClockInterface {
//     currentTime: Date;
// }
//
// class Clock implements ClockInterface {
//     currentTime: Date = new Date();
//     constructor(h: number, m: number) {}
// }



// ***** Indexable Types3 *****
// interface NumberDictionary {
//     [index: string]: number;
//     length: number; // ok, length is a number
//     name: string; // error, the type of 'name' is not a subtype of the indexer
//     // TS2411: Property 'name' of type 'string' is not assignable to string index type 'number'.
// }

// interface NumberOrStringDictionary {
//     [index: string]: number | string;
//     length: number; // ok, length is a number
//     name: string; // ok, name is a string
// }

// interface ReadonlyStringArray {
//     readonly [index: number]: string;
// }
// let myArray: ReadonlyStringArray = ["Alice", "Bob"];
// myArray[2] = "Mallory"; // error!
// // TS2542: Index signature in type 'ReadonlyStringArray' only permits reading.



// interface ReadonlyStringArray {
//     readonly [index: number]: string;
// }
// let myArray: ReadonlyStringArray = ["Alice", "Bob"];
// myArray[2] = "Mallory"; // error!




// ***** Indexable Types2 *****
// class Animal {
//     name: string;
// }
// class Dog extends Animal {
//     breed: number;
// }
//
// // Error: indexing with a numeric string might get you a completely separate type of Animal!
// interface NotOkay {
//     [x: number]: Animal;
//     [x: string]: Dog;
// }

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