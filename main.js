let b1=document.getElementById('b1')
let b2=document.getElementById('b2')
let b3=document.getElementById('b3')
let nx=document.getElementById('nx')
let score=0
function ms(c1,c2,c3) {
  b1.style.background=c1
  b2.style.background=c2
  b3.style.background=c3
  nx.style.display="block"
}
function sc(){
  score++
  console.log(score)
}