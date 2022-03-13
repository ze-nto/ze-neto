function flipCard(){

  const card = document.querySelector('.about__endWrapper')

  card.addEventListener('click', (event) => {
    event.preventDefault()
    card.classList.toggle('flipCard')
    
  })
}

