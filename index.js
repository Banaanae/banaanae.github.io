let random = document.getElementById('random')
let marrace = document.getElementById('marquee')
let start = document.getElementById('start')
let i = 0

function updateDirection() {
    let int = Math.floor(Math.random() * 4);
    let dir;
    switch (int) {
        case 0: dir = 'left'; break;
        case 1: dir = 'right'; break;
        case 2: dir = 'up'; break;
        case 3: dir = 'down'; break;
    }
    random.setAttribute('direction', dir);
}

setInterval(updateDirection, 2500);

document.getElementById('start').addEventListener('click', createBtn)
function createBtn() {
    var nextButton = document.createElement('button');
    nextButton.innerText = 'One Click = One Marquee Saved';
    var newMarquee = document.createElement('marquee');
    newMarquee.behavior = 'scroll';
    newMarquee.direction = direction();
    nextButton.addEventListener('click', createBtn)
    document.getElementById('container').appendChild(newMarquee);
    newMarquee.appendChild(nextButton);
    document.getElementById('container').appendChild(document.createElement('br'));
};

function direction() {
    i++
    if (i % 2 == 0) {
        return 'left'
    } else {
        return 'right'
    }
}