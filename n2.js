const url='https://jsonplaceholder.typicode.com/comments'
async function getcard(i){
let response = await fetch(url);
if (response.ok) { 
  let json = await response.json();
} else {
  alert("Ошибка HTTP: " + response.status);
}
  addElement(i);
}

 async function getlist(i){
let response = await fetch(url);
if (response.ok) { 
  let json = await response.json();
} else {
  alert("Ошибка HTTP: " + response.status);
}
  for (let a=0; a<i; ++a){
    addElement(a);
}
  }
  function addElement(i) {
  let div = document.createElement(`div`);
    div.id=`div${i}`
    div.className="os";
    div.style.width = 505 + "px";
    div.style.height = 110 + "px";
  n1.appendChild(div)
   var el = document.getElementById(`div${i}`);
   let div2 = document.createElement(`p`);
   div.appendChild(div2);
 div2.prepend(`Карточка № ${i+1}`);
   let div3 = document.createElement(`p`);
   div.appendChild(div3);

 div3.prepend(`name: ${persondata[i].name}`);
 let div4 = document.createElement(`p`);
   div.appendChild(div4);
 div4.prepend(`e-mail: ${persondata[i].email}`)
 let div5 = document.createElement(`p`);
   div.appendChild(div5);
 div5.prepend(`text: ${persondata[i].body}`)
  }
document.getElementById("But_one").addEventListener('click', function () { 
fetch(url)
.then((response=>response.json()))
.then((data)=>persondata=data)
.then((data)=>console.log(data));
  let x1 = document.getElementById("in_one");
  let x = x1.value;
  getlist(x);
  });
document.getElementById("But_two").addEventListener('click', function () {
fetch(url)
.then((response=>response.json()))
.then((data)=>persondata=data)
.then((data)=>console.log(data));
  let x1 = document.getElementById("in_one");
  let x = x1.value-1;
  getcard(x);
});

