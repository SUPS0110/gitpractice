const table = document.querySelector("table");

fetch('https://634c1296317dc96a3090b7a0.mockapi.io/insta')
.then((res)=>res.json())
.then((responseJson)=>{
 responseJson.forEach((item)=>{
  const tr = document.createElement("tr");
const name = document.createElement("td");
 const age = document.createElement("td");   
 const country = document.createElement("td");
 const number = document.createElement("td");
 const email = document.createElement("td"); 
 const profile = document.createElement("td");

name.innerHTML = item.name;
age.innerHTML = item.age;
country.innerHTML = item.country;
number.innerHTML = item.number;
email.innerHTML = item.email;
const image = document.createElement("img");
image.setAttribute("src",item.image);

profile.appendChild(image);


 tr.appendChild(name);
 tr.appendChild(age);
 tr.appendChild(country);
 tr.appendChild(number);
 tr.appendChild(email);
 tr.appendChild(profile);
 table.appendChild(tr);
 

 })
});