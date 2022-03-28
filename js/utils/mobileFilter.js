// function mobileFilterInit(){
//   let menu = document.querySelector('.navigation')
//   let list = document.querySelector('.navigation ul')
//   let menuItems = document.querySelectorAll('.list')
//   let active = document.querySelector('.indicator .list.active')

//   menuItems.forEach((item, index) => 
//     item.addEventListener('click', (event) => {
//       event.preventDefault()
//       if(item.classList.contains('active')){
//         list.style.transform = `translateY(0)`
//         menu.classList.toggle('visible')
//         list.style.transition = 'none'
//       }else{
//         menu.classList.remove('visible')
//         removeActive()
//         item.classList.add('active')
//         getMenuItens()
//         list.style.transition = 'all .6s'
//         list.style.transform = `translateY(calc(-50px * ${index}))`
//       }
//     })
//   )

//   function removeActive(){
//     menuItems.forEach(menuItem => menuItem.classList.remove('active'))
//   }


//   function getMenuItens(){
//     menuItems = document.querySelectorAll('.list')
//   }

// }


// if(window.screen.width < 600){
//   mobileFilterInit()
// }


