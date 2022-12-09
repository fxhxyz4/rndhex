const btnEl = document.getElementById('btn')
const colEl = document.getElementById('color')
const gen = function() {
  newColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16)
  console.log(`${newColor}`)
}

btnEl.addEventListener('click', function() {
    gen()
    document.body.style.background = newColor
    btnEl.style.color = newColor
    colEl.innerText = newColor
});