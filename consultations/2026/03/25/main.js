// #NKB0tgWIK1G
// ***PAGINATION
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться наступні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів


const items = Array.from({length: 100}, (_, i) => `Об'єкт ${i + 1}`);

let page = 0;
let perPage = 10;


const itemsDiv = document.getElementById('items');
render(page);
const prevbtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');


function render(page) {
    const start = page * perPage;
    const end = start + perPage;
    itemsDiv.innerHTML = items.slice(start, end).join('<br>');
}


prevbtn.addEventListener('click', () => {
    if (page > 0) page--;
    render(page);
});


nextBtn.addEventListener('click', () => {
    page++;
    render(page);
});


[].forEach(()=> {

});

console.log(+'@2');
console.log(parseInt('2@'));

