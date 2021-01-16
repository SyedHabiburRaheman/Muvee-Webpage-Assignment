function pictureChange() {
    var image = document.getElementById("img");
    if (image.src.match("Assets/images/computer2.jpg")) {
        image.src = "Assets/images/computer2b.jpg";
    }
    else {
        image.src = "Assets/images/computer2.jpg";
    }
}
