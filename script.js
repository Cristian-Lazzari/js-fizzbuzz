const eleContainer = document.querySelector(".container");

for (let i = 1; i < 101; i++){
    if (i%15 == 0){
        eleContainer.innerHTML += `<div class="card fizz-buzz">${i}</div>`
    } 
    else if (i%5 == 0 && !i%3 == 0) {
        eleContainer.innerHTML += `<div class="card fizz">${i}</div>`
        
    } 
    else if (i%3 == 0 && !i%5 == 0) {
        eleContainer.innerHTML += `<div class="card buzz">${i}</div>`
        
    } else {
        eleContainer.innerHTML += `<div class="card">${i}</div>`
    }
    
}