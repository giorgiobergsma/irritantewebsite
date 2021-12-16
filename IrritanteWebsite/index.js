const applebutton = document.getElementById("IOS")


applebutton.onclick = function () {
    let number = 0;

    while (number < 5) {
        document.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley");
        number++;
    }
};