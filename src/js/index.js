const btnEl = document.getElementById('btn')
const colEl = document.getElementById('color')
const generate = function() {
  newcolor = '#'+(Math.random()*0xFFFFFF<<0).toString(16)
  console.log(`${newcolor}`)
}

btnEl.addEventListener('click', function() {
    generate()
    document.body.style.background = newcolor
    btnEl.style.color = newcolor
    colEl.innerText = newcolor
});