const image = document.getElementById('toggleImage');
const images = ['images/lake.jpg', 'images/mount.jpg'];
const email = document.getElementById('email');
let index = 0;

image.addEventListener('click', () => {
    index = (index + 1) % images.length;
    image.src = images[index];}
);

email.addEventListener("click", function(){
    navigator.clipboard.writeText(email.text);
});

