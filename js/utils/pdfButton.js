
function initPdfButton(){
  const button = document.querySelector('.about__pdfButton')
  button.addEventListener('mouseover', showFullButton)
  button.addEventListener('mouseleave', hideButton)
  
  function showFullButton(){
    button.classList.add('showFullButton')
  }
  
  function hideButton(){
    button.classList.remove('showFullButton')
  }
}


