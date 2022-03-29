function showAboutMe() {
  const more = document.querySelector('.about__more')
  const hided = document.querySelector('.about_hidedAboutInfo')
  more.addEventListener('click', (event) => {
    event.preventDefault();
    hided.classList.toggle('about_showHidedAboutInfo')
    if(more.innerText == 'Mais sobre mim'){
      more.innerText = 'Mostrar menos'
      more.setAttribute('data-arrow', '▲')
    }else{
      more.innerText = 'Mais sobre mim'
      more.setAttribute('data-arrow', '▼')
    }
  })
  ageCount()
}


