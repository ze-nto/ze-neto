function age() {
  const age = document.querySelector('.age')
  const thisYear = new Date().getFullYear()  
  if(new Date().getMonth >= 8){
    age.innerText =  `${thisYear - 1986} anos`
  } else {
    age.innerText =  `${(thisYear - 1986) - 1} anos`
  }
}

