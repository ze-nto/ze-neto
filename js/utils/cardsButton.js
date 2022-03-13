const modal = document.getElementById('modal')
const body = document.getElementsByTagName("body")[0]
const fechar = document.querySelector('.modal__close')

function showModal(event) {
  event.preventDefault()
  fechar.addEventListener('click', closeModal)
  modal.classList.add("show-modal")
  body.classList.add("overflow")
  let id = event.target.parentNode.parentNode.id
  getModalContent(id)
}

function closeModal() {
  let content = document.querySelector('.content')
  document.querySelector('.modal__content').removeChild(content)
  body.classList.remove("overflow")
  modal.classList.remove("show-modal")
}

async function getModalContent(id) {
  let response  = await fetch('./data/portfolio.json')
  let dados = await response.json()
  const project = dados.filter(project => project.id == id)[0]
  let div = document.createElement('div')
  let techs =  ''  
  if( project.technologies){
    project.technologies.forEach(tech =>{
        techs += `<span class="${tech}">${tech}</span>`
    })
  }
  let topics =  ''  
  if(project.topics){
    project.topics.forEach(topic =>{
      topics += `  <li>${topic}</li>`
    })
  }
  let topicsTitle = topics? 'Técnicas e Métodos Utilizados': ''
  div.innerHTML = `
    <h2>${project.name}</h2>
    <div class="modal__pillsContainer">
      ${techs}
    </div>
    <p>${project.description}</p> 
    <div class="tecnicas">
      <h4>${topicsTitle}</h4>
      <ul>
        ${topics}
      </ul>
    </div>
  `

  const linksContent = `
  <a class="modal__link github" href=${project.repository}>
    <i class="fab fa-github"></i> Repositório GitHub
  </a>
  <a class="modal__link liveproject" href=${project.url}>
    <i class="fas fa-link"></i> Ver Projeto Online
  </a>
  `

  let imagesContent = ``
  if(project.images){
    project.images.forEach( image => {
      imagesContent += `<img src="${image}"/>`
    })
  }

  div.classList.add('content')
  document.querySelector('.modal__content').appendChild(div)
  document.querySelector('.modal__linksWrap').innerHTML = linksContent
  document.querySelector('.modal__imagesContainer').innerHTML = imagesContent

}

function activeButtons () {
  const portfolioButtons = document.querySelectorAll('.project__action button') 
  
  portfolioButtons.forEach(button => {
    button.addEventListener('click', showModal)
  })
}
