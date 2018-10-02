let main = document.querySelector("#mainContainer")
let scoreElement = document.querySelector("#score")
var score = 0

let nums = Array.from({length: 20}, () => Math.floor(Math.random() * 100)).sort((a, b) => a - b);
// Create a times function
const times = x => f => {if (x > 0) { f(); times (x - 1) (f)}}
// Call the times function to create all the on-screen elements
var i = 0
times (20) (() => {main.innerHTML += `<div class="item grey"><div>Idx: ${i}</div><div class="number hidden">${nums[i]}</span></div>`, i+=1})
// Create an array of random numbers

let children = document.querySelectorAll(".item")
children.forEach(child => {
  child.addEventListener('click', e => {
    if (child.classList.contains('grey')) {
      console.log(child.childNodes)
      child.classList.remove('grey')
      child.childNodes[1].classList.remove('hidden')
      score += 1
      scoreElement.innerHTML = score
      console.log(score)
    } else {
      console.log("already clicked")
    }
  })
  console.log("child")
})
