const inputField = document.querySelector('.inputField');
const btn = document.querySelector('.btn');
const toDoContainer = document.querySelector('.toDoContainer');

btn.addEventListener('click',()=>{ 
const item = document.createElement('li');
item.innerText = inputField.value;
 
if (inputField.value.length === 0) {
return false;
}
toDoContainer.appendChild(item)
item.classList.add('toDoAdded');
inputField.value = '';

item.addEventListener('click', ()=>{
item.classList.add('toDoCompleted')

})

item.addEventListener('dblclick', ()=>{
    toDoContainer.removeChild(item);
})
} )

//GSAP//
 
gsap.to("h1",{
  y:-60,
  duration:3,
  delay:0.3,
 }
)
 