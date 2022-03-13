// const modal = document.getElementById('modal')
// const body = document.getElementsByTagName("body")[0]
// const fechar = document.querySelector('.modal__close')

export default class Modal {
  constructor (modal, body, fechar) {
    this.modal = document.getElementById(modal)
    this.body = document.querySelector(body)[0]
    this.fechar = document.querySelector('.modal__close')
  }

  init(){
    if(this.modal && this.body && this.fechar) {

    }
  }
  showModal(event) {
    event.preventDefault()
    this.fechar.addEventListener('click', closeModal)
    this.modal.classList.add("show-modal")
    this.body.classList.add("overflow")
    let id = event.target.parentNode.parentNode.id
    getContent(id)
  }

  closeModal() {
    let content = document.querySelector('.content')
    document.querySelector('.modal__content').removeChild(content)
    this.body.classList.remove("overflow")
    this.modal.classList.remove("show-modal")
  }


  async getContent(id) {
    let response  = await fetch('../../dados/portfolio.json')
    let dados = await response.json()
    const project = dados.filter(project => project.id == id)[0]
    let div = document.createElement('div')
    div.innerHTML = `
      <h2>${project.name}</h2>
      <div class="modal__pillsContainer">
              <span class="javascript">JavaScript</span>
              <span class="site">Site</span>
              <span class="php">PHP</span>
              <span class="css">CSS</span>
              <span class="html">HTML</span>
            </div>
      <p>${project.description}</p> 
      <div class="tecnicas">
        <h4>Técnicas e Métodos Utilizados</h4>
        <ul>
          <li>Requisições Assíncronas</li>
          <li>Chache HTML</li>
          <li>Cookies</li>
          <li>Includes em PHP</li>
        </ul>
      </div>
    `
    div.classList.add('content')
    document.querySelector('.modal__content').appendChild(div)
  }
}