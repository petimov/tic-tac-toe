const board = document.querySelector('.board')

for (let i = 0; i < 9; i++) {
    board.innerHTML += '<div class="places"></div>'
}

let counter = 0;
let xWon = false;

const places = document.querySelectorAll('.places')

places.forEach(place => {
    place.addEventListener('click', (e) => {
        if (place.classList.contains('clicked')) {
        } else {
            place.classList.add('clicked');
            counter += 1;
        }

        if (counter % 2 == 0) {
            place.innerHTML = 'o'
        } else {
            place.innerHTML = 'x'
        }

        places.forEach(place => {
            if ([...board.children].slice(0, 3).every(cell => cell.innerText === 'x')) {
                xWon = true;
            }
        })

        if (xWon) {
            alert('x won')
        }
    })

})