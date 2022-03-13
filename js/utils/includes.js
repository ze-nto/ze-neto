
async function includeHead(){
  const head = document.querySelector('head')
  const response = await fetch('./includes/head.html')
  const content = await response.text()
  head.innerHTML = content;
}


async function includeFooter(){
  // const body = document.querySelector('body')
  const response = await fetch('./includes/footer.html')
  const content = await response.text()
  const footer = document.createElement('footer')
  footer.innerHTML = content;
  document.body.appendChild(footer);
}


