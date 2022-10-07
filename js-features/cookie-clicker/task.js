const image = document.getElementById("cookie"); 

function changeSizes(){ 
    const clicker = document.getElementById("clicker__counter");
    let clicks = parseInt(clicker.textContent, 10) + 1;
    clicker.textContent = clicks;

    if (clicks % 2 == 0) {
        image.width = 200; 
    } else {
        image.width = 250;
    }
}

image.onclick = changeSizes;