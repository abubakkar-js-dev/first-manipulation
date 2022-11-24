'use strict'
let btn = document.getElementById('btn');
let list = document.getElementById('list');

// btn.onclick = function(e){
//     console.log(e);
// }
btn.addEventListener('click',function(e){
    // alert('I have clicked');
    console.log('clicked')
})

let box = document.getElementById('color-box');


box.addEventListener('mousemove',function(e){
    document.getElementById('x-position').innerHTML = e.offsetX;
    document.getElementById('y-position').innerHTML = e.offsetY;
    if(e.offsetX == 100 && e.offsetY){
        console.log('Iam a talented person');
        alert('You are win!');
    }   
})

btn.addEventListener('click',function addMore(){
    let items = list.lastElementChild.cloneNode(true);
    items.innerHTML = 'Created a new item'
    list.appendChild(items);
})
// ;[ ... list.children].forEach(li => {

//    li.onclick = function(e){
//     //  console.log(e.target)
//     e.target.remove()
//    } 
// });
// Event elegation problem

// list.addEventListener('click',function(e){
//     // console.log(this.contains(e.target));
//     if(this.contains(e.target)){
//         e.target.remove();
//     }
// });
let name1 = document.getElementById('name')
name1.addEventListener('keypress',function(event){
    let nameShow = document.getElementById('show-name');
    if(event.key === 'Enter'){
        
        nameShow.innerHTML = event.target.value;
        nameShow.style.display = 'block'

        console.log(event.target.value);
        event.target.value = '';
        if(nameShow.innerHTML == ''){
            nameShow.style.display = 'none'
            // name1.style.color = 'tomato'
        }
        
    }
    

})
let skills = document.getElementsByName('skills');
let result = document.getElementById('have-skills')
let cheakedSkills = [];

[...skills].forEach(skills =>{
    skills.addEventListener('change',function(event){
        if(event.target.checked){
            cheakedSkills.push(event.target.value);
            haveSkills(result,cheakedSkills);
        }else{
            let ind = cheakedSkills.indexOf(event.target.value);
            cheakedSkills.splice(ind,1);
            haveSkills(result,cheakedSkills)
             
        }
    })
})

console.log(cheakedSkills);

function haveSkills(parent,skills){
    let result = '';
    skills.forEach((value,index) => {
        result += ` (${index +1}) ${value}  `;  
    })
    parent.innerHTML = result;
}
let list2 = document.getElementById('list')

list2.addEventListener('dblclick',function(e){
    if(this.contains(e.target)){
        let innerTxt = e.target.innerText;
        e.target.innerHTML = '';
        let creatInput = creatInputBox(innerTxt);
        e.target.appendChild(creatInput);
        creatInput.addEventListener('keypress',(ev) => {
            if(ev.key === 'Enter'){
                e.target.innerHTML = ev.target.value;
            }
        })
        
    }
})

function creatInputBox(value){
    let inp = document.createElement('input');
    inp.type = 'text';
    inp.value = value;
    inp.className = 'from-control'
    return inp;

}





