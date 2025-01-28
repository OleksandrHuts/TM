
//click
//pointer-events
//form events: focus/blur/input/change

document.addEventListener("keydown", (event) => {
    //console.log(event);
    if(event.ctrlKey && event.code === "KeyS") {
        event.preventDefault();
        console.log('Run save function');
        
    }
});