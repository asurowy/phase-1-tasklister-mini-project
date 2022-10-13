document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit', (e) => {
      e.preventDefault()
      buildList(e.target['new-task-description'].value)
  })
});

function buildList(thingsToDo){
    let p = document.createElement('p')
    let btn = document.createElement('button')
    btn.addEventListener('click', timeToDelete)
    btn.textContent = "x"
    p.textContent = thingsToDo
    p.appendChild(btn)
    console.log(p)
    document.querySelector('#list').appendChild(p)
}

function timeToDelete(e){
  e.target.parentNode.remove()
}