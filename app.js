const images = [
   'images/image-1.jpg', 
   'images/image-2.jpg', 
   'images/image-3.jpg', 
   'images/image-4.jpg', 
   'images/image-5.jpg', 
]
let imageIndex = 0;
const container = document.getElementById('img-container');
const img = document.querySelector('img');
console.log(container.firstElementChild.src)
setInterval(() => {
   img.src = images[imageIndex]
   imageIndex++;
   console.log(imageIndex)
    if(imageIndex == images.length){
        imageIndex = 0;
    }
}, 1000);