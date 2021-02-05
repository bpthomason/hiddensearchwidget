const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', () => {
  search.classList.toggle('active')
  input.focus()
})

input.addEventListener('blur', () => {
  if (input.value == '' || input.value == undefined) {
    search.classList.toggle('active')
  }
})
