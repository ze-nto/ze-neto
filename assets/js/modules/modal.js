const modal = document.getElementById('modal')
const fechar=document.getElementsByClassName("modal__close")[0]
const body=document.getElementsByTagName("body")[0]

const portfolioButtons = document.querySelectorAll('.project__action button') 

portfolioButtons.forEach(button => {
  button.addEventListener('click', showModal)
})


function showModal(event){
  event.preventDefault()
  modal.classList.add("show-modal")
  body.classList.add("overflow")
  getContent()
}

function closeModal(){
  let content = document.querySelector('.content')
  document.querySelector('.modal__content').removeChild(content)
  body.classList.remove("overflow")
  modal.classList.remove("show-modal")
}


function getContent() {
  let h1 = document.createElement('h1')
  h1.innerText = 'Tudo Certo'
  h1.classList.add('content')
  document.querySelector('.modal__content').appendChild(h1)
}