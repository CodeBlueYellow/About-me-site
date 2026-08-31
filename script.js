const image = document.getElementById('toggleImage');
const images = ['images/lake.jpg', 'images/mount.jpg'];
const email = document.getElementById('email');
const emailAddress = email.textContent;
let index = 0;

image.addEventListener('click', () => {
    index = (index + 1) % images.length;
    image.src = images[index];}
);

email.addEventListener("click", function(){
    navigator.clipboard.writeText(emailAddress);
    email.textContent = "Copied to clipboard";

    setTimeout(function(){
        email.textContent = emailAddress;

    },2000);
});

