function color() {
    let color1 = (Math.floor(Math.random() * 16777216)).toString(16);
    let color2 = (Math.floor(Math.random() * 16777216)).toString(16);
    // console.log(color);

    document.body.style.backgroundColor = '#' + color1;


    var text = document.querySelector(".text");
    text.innerText = '#' + color1;
}