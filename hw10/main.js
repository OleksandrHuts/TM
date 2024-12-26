
var playList = [
    {
     author: "LED ZEPPELIN",
     song:"STAIRWAY TO HEAVEN"
    },
    {
     author: "QUEEN",
     song:"BOHEMIAN RHAPSODY"
    },
    {
     author: "LYNYRD SKYNYRD",
     song:"FREE BIRD"
    },
    {
     author: "DEEP PURPLE",
     song:"SMOKE ON THE WATER"
    },
    {
     author: "JIMI HENDRIX",
     song:"ALL ALONG THE WATCHTOWER"
    },
    {
     author: "AC/DC",
     song:"BACK IN BLACK"
    },
    {
     author: "QUEEN",
     song:"WE WILL ROCK YOU"
    },
    {
     author: "METALLICA",
     song:"ENTER SANDMAN"
    }
    ];



function winModal() {
    const modal = document.querySelector('.modal_window');
    if(modal) {
        modal.classList.toggle('open');
    }
}

const button = document.querySelector('#button_show');
button.addEventListener('click', ()=> {
    winModal(); 
    addContent();
});

function addContent() {
    const content = document.querySelector('.content');
    let arr = '';
    playList.forEach(product => {
        arr = arr + `<div>Author: ${product.author}, Song:${product.song}</div>`
    });
    content.innerHTML = arr;
}

