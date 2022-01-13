

// let button = document.querySelector('#curriculo')
// let maisInfo = document.querySelector('.mais-info');
// let menos = document.querySelector('#menos-info');

// button.addEventListener('click', (event) => {
//     event.preventDefault();
//     button.setAttribute("value", "Menos");
//     maisInfo.classList.toggle('open-info');
// })


// // CATEGORIAS

// let pill = document.querySelectorAll('.pill');
// let ps = document.querySelector('#ps');

// pill.forEach(botao => botao.addEventListener('click', (e) => {
//     botao.classList.toggle('selected');
//     if (!ps.classList.contains('show')){
//         ps.classList.toggle('show')
//     }
// }));

// let novo = document.querySelector('.projects__category');

// // novo.addEventListener('click', () => {
// //     console.log('click')
// // })
const modal = document.getElementById("modal")
const fechar = document.getElementsByClassName("modal__close")[0]
const body = document.getElementsByTagName('body')[0]

function showModal (event) {
    event.preventDefault()    
    modal.classList.add("show-modal")
    body.classList.add("overflow")
}

function closeModal () {
    body.classList.remove("overflow")
    modal.classList.remove("show-modal")
}
