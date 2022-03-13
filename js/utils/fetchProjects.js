let currentLastProjectIndex = 4
let deletedNumber = 4

async function getData() {
  let response  = await fetch('./data/portfolio.json');
  let data = await response.json();
  return data
}

async function fetchProjects() {
  let dados = []
  if(dados.length == 0){
    dados = await getData();
  }
  let index = 0;
  let projects = []
  while(index < currentLastProjectIndex){
    projects.push(dados[index])
    ++index
  }
  if(currentLastProjectIndex > 4){
    projects.splice(0, deletedNumber)
    deletedNumber = deletedNumber + 4
  }
  currentLastProjectIndex = currentLastProjectIndex + 4
  createProjectCard(projects)
}



function filterInit(){
  const filters = document.querySelectorAll('.list')
  filters.forEach(filter => {
    filter.addEventListener('click', fetchFilteredProjects)
  })
}

async function fetchFilteredProjects() {
  const activeFilter = document.querySelector('.list.active > a')
  let techFilter = activeFilter.getAttribute('data-tech')
  const projectContainer = document.querySelector('.project-container')
  let response  = await fetch('./data/portfolio.json');
  let dados = await response.json();
  if(techFilter == 'todos'){
    currentLastProjectIndex = 4
    deletedNumber = 4
    projectContainer.innerHTML = ''
    fetchProjects()
  }else{
    projectContainer.innerHTML = ''
    dados = dados.filter( project => project.technologies.includes(techFilter))
    createProjectCard(dados)
  }
}


function createProjectCard(projects){
  projects.forEach( project => {
    if(project.mainImage == ""){
      project.mainImage = "public/img/no-image.png"
    }
    const projectContainer = document.querySelector('.project-container')
    let card = document.createElement('article')
    card.classList.add('project')
    card.id = project.id
    const cardContent = `
      <div class="project__head">
        <span class="project__title">${project.name}</span>
        <div class="project__links">
          <a class="project__links-item disabled" href="${project.repository}" target="_blanket" rel="noreferrer">
              <i class="fab fa-github"></i>
              <span>Ver Código</span>     
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
    projectContainer.appendChild(card)
    activeButtons()
    })
}

function projectFetchButtonInit(){
  const ProjectFetch = document.querySelector('.project__fetch')
  
  ProjectFetch.addEventListener('click', () => {
    const activeFilter = document.querySelector('.list.active > a')
    let techFilter = activeFilter.getAttribute('data-tech')
    if(techFilter == 'todos'){
      fetchProjects()
    } else {
      fetchFilteredProjects(techFilter)
    }
  })
}
