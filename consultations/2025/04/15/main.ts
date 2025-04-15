// як типізувати функцію з callback? Дивилась в google, робила подібно тому що бачила, але нічого з того не працює.

// type CalculatorCallback = (a: number, b: number) => number;
//
// function calculator(num1: number, num2: number, callback: CalculatorCallback): number {
//     return callback(num1, num2);
//
// }
//
// type ForEachCustomParams<T> = (item: T) => void;
//
// type MyFilterParams<T> = (item: T) => boolean;
//
// interface Array<T> {
//
//     forEachCustom: (callback: ForEachCustomParams<T>) => void
//     myFilter: (callback: MyFilterParams<T>) => T[]
// }
//
// Array.prototype.forEachCustom = function <T>(callback) {
//     for (const item of this) {
//         callback(item)
//     }
// }
//
// Array.prototype.myFilter = function <T>(callback) {
//     let arr: T[] = [];
//     for (const item of this) {
//         if (callback(item)) {
//             arr.push(item);
//         }
//     }
//     return arr;
// };


interface Array<T> {
    foreachCustom(callback: (value: T, index: number) => void): void;
}

Array.prototype.foreachCustom = function <T>(
    this: T[],
    callback: (value: T, index?: number, array?: T[]) => void
): void {
    for (const item of this) {
        callback(item)
        console.log('asdd')
    }
};

['asd'].foreachCustom((value) => console.log(value))

