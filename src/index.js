document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    createToDo(e.target.new-task-description.value)
  })
})

function createToDo(new-task-description) {
  let p = document.createElement('p')
  let buttn = document.createElement('button')
  buttn.addEventListener('click', doDelete)
  buttn.textContent = 'x'
  p.textContent = `${todo}  `
  p.appendChild(buttn)
  console.log(p)
  document.querySelector('#list').appendChild(p)
}

function doDelete(e){
  e.target.parentNode.remove()
}