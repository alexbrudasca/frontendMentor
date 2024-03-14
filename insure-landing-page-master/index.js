const burger = document.getElementById('burgerBtn');
const listItems = document.getElementById('listMenu');

burger.addEventListener('click',()=>{
    listItems.classList.toggle('hidden')
})

console.log(listItems)