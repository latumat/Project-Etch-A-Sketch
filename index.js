var container = document.querySelector('.container')

for (var i = 0; i < 16; i++) {
    var row = document.createElement('div');
    row.className = 'row';
    for (var x = 0; x < 16; x++) {
        var col = document.createElement('div');
        var s =  510/16
        col.className = 'col';
        col.style.width = s.toString() + 'px'
        col.style.height = s.toString() + 'px'
        row.append(col);
    }
    container.append(row);
}

var square = document.querySelectorAll('.col');
square.forEach((e) => {
    e.addEventListener('mouseover', () => {
        e.style.backgroundColor = 'black';
    })
})

function draw() {
    var square = document.querySelectorAll('.col');
    var couleur = document.querySelector('.color').value;
    square.forEach((e) => {
        e.addEventListener('mouseover', () => {
            e.style.backgroundColor = couleur;
        })
    })
}

function newGrid() {
    var size = prompt("What size?")
    container.innerHTML = "";

    for (var i = 0; i < size; i++) {
        var row = document.createElement('div');
        for (var x = 0; x < size; x++) {
            var col = document.createElement('div');
            col.className = 'col';
            s = 510/size;
            col.style.width = s.toString() + 'px';
            col.style.height = s.toString() + 'px';
            row.append(col);
        }
        container.append(row);
    }
}

function etchASketh() {
    var changeS = document.querySelector('.size');
    var changeC = document.querySelector('.change-color')
    changeS.addEventListener('click', () => {
        newGrid()
        draw()
    })

    changeC.addEventListener('click', () => {
        draw()
    })
}

etchASketh()

