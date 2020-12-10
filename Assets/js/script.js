function pictureChange() {
    var image = document.getElementById('img');
    if (image.src.match("/assets/images/computer2.jpg")) {
        image.src = "/assets/images/computer2b.jpg";
    }
    else {
        image.src = "/assets/images/computer2.jpg";
    }
}
