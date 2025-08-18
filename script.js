const board = document.querySelector('.board')

for (let i = 0; i < 9; i++) {
    board.innerHTML += '<div class="places"></div>'
}

let counter = 0;
let xWon = false;
let oWon = false;

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
            } else if ([...board.children].slice(3, 6).every(cell => cell.innerText === 'x')) {
                xWon = true;
            } else if ([...board.children].slice(6, 9).every(cell => cell.innerText === 'x')) {
                xWon = true;
            } else if (board.children[0].innerText == 'x' && board.children[3].innerText == 'x' && board.children[6].innerText == 'x') {
                xWon = true;
            } else if (board.children[1].innerText == 'x' && board.children[4].innerText == 'x' && board.children[7].innerText == 'x') {
                xWon = true;
            } else if (board.children[2].innerText == 'x' && board.children[5].innerText == 'x' && board.children[8].innerText == 'x') {
                xWon = true;
            } else if (board.children[0].innerText == 'x' && board.children[4].innerText == 'x' && board.children[8].innerText == 'x') {
                xWon = true;
            } else if (board.children[2].innerText == 'x' && board.children[4].innerText == 'x' && board.children[6].innerText == 'x') {
                xWon = true;
            }

            else if ([...board.children].slice(0, 3).every(cell => cell.innerText === 'o')) {
                oWon = true;
            } else if ([...board.children].slice(3, 6).every(cell => cell.innerText === 'o')) {
                oWon = true;
            } else if ([...board.children].slice(6, 9).every(cell => cell.innerText === 'o')) {
                oWon = true;
            } else if (board.children[0].innerText == 'o' && board.children[3].innerText == 'o' && board.children[6].innerText == 'o') {
                oWon = true;
            } else if (board.children[1].innerText == 'o' && board.children[4].innerText == 'o' && board.children[7].innerText == 'o') {
                oWon = true;
            } else if (board.children[2].innerText == 'o' && board.children[5].innerText == 'o' && board.children[8].innerText == 'o') {
                oWon = true;
            } else if (board.children[0].innerText == 'o' && board.children[4].innerText == 'o' && board.children[8].innerText == 'o') {
                oWon = true;
            } else if (board.children[2].innerText == 'o' && board.children[4].innerText == 'o' && board.children[6].innerText == 'o') {
                oWon = true;
            }

        })

        if (xWon) {
            alert('x won')
        } else if (oWon) {
            alert('o won')
        }
    })

})