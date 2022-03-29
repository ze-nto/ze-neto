function pageMarker() {
  const pages = document.querySelectorAll('.header__navlist ul a')
  pages.forEach(page => {
    let link = page.getAttribute('href')
    if(link == document.location.pathname){
      page.classList.add('isHere')
      page.style.cursor = 'default'
      page.addEventListener('click', (event) => event.preventDefault())
    } 
    if (document.location.pathname == '/'){
      let portfolio = document.querySelectorAll('.header__navlist ul a')[0]
      portfolio.classList.add('isHere')
    } 
  })
}
