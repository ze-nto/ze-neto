let currentLastProjectIndex = 4
let deletedNumber = 4


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
  feedProjectCard(projects)
  filterInit()
}

async function fetchFilteredProjects() {
  const activeFilter = document.querySelector('.list.active > a')
  let techFilter = activeFilter.getAttribute('data-tech')
  const projectContainer = document.querySelector('.project-container')
  if(techFilter == 'todos'){
    currentLastProjectIndex = 4
    deletedNumber = 4
    projectContainer.innerHTML = ''
     await fetchProjects()
  }else{
    projectContainer.innerHTML = ''
    let dados = data.filter(project => project.technologies.includes(techFilter))
    feedProjectCard(dados)
  }
  filterInit()
}

async function projectFetchButtonInit(){
  const ProjectFetch = document.querySelector('.project__fetch')
  
  ProjectFetch.addEventListener('click', async () => {
    const activeFilter = document.querySelector('.list.active > a')
    let techFilter = activeFilter.getAttribute('data-tech')
    if(techFilter == 'todos'){
      await fetchProjects()
    } else {
      await fetchFilteredProjects(techFilter)
    }
  })
}
