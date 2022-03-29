function feedProjectCard(projects){
  const projectContainer = document.querySelector('.project-container')
  projects.forEach( project => {
  if(project.mainImage == ""){
    project.mainImage = "public/img/no-image.png"
  }
  const card = createCard(project)
  projectContainer.appendChild(card)
  activeButtons()
  })
}

function createCard(project) {
  let card = document.createElement('article')
  card.classList.add('project')
  card.id = project.id
  const cardContent = `
    <div class="project__head">
      <span class="project__title">${project.name}</span>
      <div class="project__links">
        <a class="project__links-item disabled" href="${project.repository}" target="_blanket" rel="noreferrer">
            <i class="fab fa-github"></i>
            <span>Código</span>     
        </a>
        <a class="project__links-item" href="${project.url}" target="_blanket">
            <i class="fas fa-desktop"></i></fas>
            <span>Visualizar</spa>     
        </a>    
      </div> 
    </div>
    <div class="project__image">
        <img src="${project.mainImage}" alt="Screenshot do projeto ${project.name}">
    </div>
    <div class="project__description">
        ${project.description}
    </div>
    <div class="project__action">
        <button>Descrição completa</button>
    </div>
  `
  card.innerHTML = cardContent
  return card
}