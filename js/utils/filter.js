
function activeLink(){
  const list = document.querySelectorAll('.list');
  list.forEach(item => {
    item.addEventListener('click', (event) => {
      event.preventDefault()
      list.forEach(link => link.classList.remove('active'))
      let clickTarget = event.target.parentNode.parentNode
      clickTarget.classList.add('active')
      activeLink()
    })
  })
  
  // fetchFilteredProjects()
}
