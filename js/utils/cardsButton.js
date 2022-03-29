function activeButtons () {
  const portfolioButtons = document.querySelectorAll('.project__action button') 
  
  portfolioButtons.forEach(button => {
    button.addEventListener('click', showModal)
  })
}
