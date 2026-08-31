const image = document.getElementById('toggleImage');
const images = ['images/lake.jpg', 'images/mount.jpg'];
const email = document.getElementById('email');
let index = 0;

if (image){
    image.addEventListener('click', () => {
        index = (index + 1) % images.length;
        image.src = images[index];}
    );
}

if (email){
    const emailAddress = email.textContent;

    email.addEventListener("click", function(){
        navigator.clipboard.writeText(emailAddress);
        email.textContent = "Copied to clipboard";

        setTimeout(function(){
            email.textContent = emailAddress;

        },2000);
    });
}
