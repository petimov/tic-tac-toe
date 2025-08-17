const board = document.querySelector('.board')

for (let i = 0; i < 9; i++) {
    board.innerHTML += '<div class="places"></div>'
}

const places = document.querySelectorAll('.places')

console.log(places)


places.forEach(place => {
    place.addEventListener('click', (e) => {
        place.classList.add('clicked');
    })

})