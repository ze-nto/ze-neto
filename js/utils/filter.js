
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
}

if(window.innerWidth < 600){
  mobileFilterInit()
  let filters = document.querySelectorAll('.list')
  filters.forEach(filter => {
    if(!filter.classList.contains('active')){ 
      filter.addEventListener('click', () => {
        setTimeout(fetchFilteredProjects, 500)
      })
    }
  })
}

function mobileFilterInit(){
  let menu = document.querySelector('.navigation')
  let list = document.querySelector('.navigation ul')
  let menuItems = document.querySelectorAll('.list')

  menuItems.forEach((item, index) => 
    item.addEventListener('click', (event) => {
      event.preventDefault()
      if(item.classList.contains('active')){
        list.style.transform = `translateY(0)`
        menu.classList.toggle('visible')
        list.style.transition = 'none'
      }else{
        menu.classList.remove('visible')
        removeActive()
        item.classList.add('active')
        getMenuItens()
        list.style.transition = 'all .6s'
        list.style.transform = `translateY(calc(-50px * ${index}))`
      }
    })
  )

  function removeActive(){
    menuItems.forEach(menuItem => menuItem.classList.remove('active'))
  }

  function getMenuItens(){
    menuItems = document.querySelectorAll('.list')
  }
}