// "" +
// "Як бути зі змінними, які спочатку містять в собі дані одного типу, а потім ми перезаписумо в них щось інше.
// Наприклад x:number=0 і ми далі робимо перевірку якусь і присвоюємо x значення string,
// наприклад x='неправильно введене число'. Тоді прoсто робити типом для такої змінної any?
// "

// let foo: number | string = 100500;
// foo = 'asjdgjasgd';
// if (typeof foo === 'string') {
//      foo.toUpperCase()
// }


// а різниця між Record та [key: string], чи це типу аналог? Замітив що індексна струтктура не типізуеться під літеральний тип

// let x: Record<'prop1' | 'prop2', number> = {
//     prop1: 100500,
//     prop2: 5000,
// }

type Fields = 'id' | 'name' | 'age'

let x: Record<Fields, string> = {
    id: 'aasd',
    name: 'iut23e7t7',
    age: 'ashdjashd'
}
