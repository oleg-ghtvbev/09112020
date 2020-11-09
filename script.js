let h = [1,2,3]
console.log(h)
let limit = 4
let first = document.getElementById("botton")
let elem = document.getElementById("spisok")
let ofset = 0
first.addEventListener("click", function(){
    fetch(`http://user08.test1.seschool.ru:3000/api/chat/?offset=${ofset}&limit=${limit}`)
    .then((response) => {
        ofset=limit+ofset
      return response.json();
      
    })
    .then((data) => {
    //   console.log(data[0]);
    for(let fist=0; fist<data.length; fist++){
      console.log(data[fist].id);
      console.log(data[fist].message);
      console.log(data[fist].email);
      const newMessageElem = document.createElement("li");
      newMessageElem.innerHTML = `${data[fist].message}: ${data[fist].email}: ${data[fist].id}`;
      elem.append(newMessageElem)
    }});
});
