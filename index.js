let quotes = ['You go!','You can do it!','Go get it!','Keep it up!']
let show = document.getElementById('show');
let Btn = document.getElementById('btn');
let closeBtn = document.getElementById('close-btn')
console.log(Btn);


Btn.addEventListener('click',function(){

  let indexRandomNumber = Math.floor(Math.random()*quotes.length)
  console.log(quotes[indexRandomNumber]);
  show.textContent= quotes[indexRandomNumber]
  


})

