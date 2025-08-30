const images = [
    {src: "images/IMG_8337.jpg", link: "showpictureid=1.html"},
    {src: "images/dji_fly_20240610.jpg", link: "showpictureid=2.html"},
    {src: "images/MG_3203.jpg", link: "showpictureid=3.html"},
    {src: "images/DSC00948.jpg", link: "showpictureid=4.html"},
    {src: "images/DSC_1708.JPG", link: "showpictureid=5.html"},
    {src: "images/DSC_2014.JPG", link: "showpictureid=6.html"},
    {src: "images/DSC_2073.JPG", link: "showpictureid=7.html"},
    {src: "images/DSC_1560.JPG", link: "showpictureid=8.html"},
    {src: "images/DSC_2572.JPG", link: "showpictureid=9.html"},
    {src: "images/DSC_4139.JPG", link: "showpictureid=10.html"},
    {src: "images/MG_3312.jpg", link: "showpictureid=11.html"},
    {src: "images/DSC_3856.JPG", link: "showpictureid=12.html"},
    {src: "images/DSC_2565.JPG", link: "showpictureid=13.html"},
    {src: "images/MG_3182.jpg", link: "showpictureid=14.html"},
    {src: "images/MG_3173.jpg", link: "showpictureid=15.html"},
    {src: "images/MG_3316.jpg", link: "showpictureid=16.html"},
    {src: "images/MG_3256.jpg", link: "showpictureid=17.html"},
    {src: "images/DSC_4027.JPG", link: "showpictureid=18.html"},
    {src: "images/DSC_4337.JPG", link: "showpictureid=19.html"},
    {src: "images/P1010715.JPG", link: "showpictureid=20.html"},
    {src: "images/MG_3220.jpg", link: "showpictureid=21.html"},
    {src: "images/IMG_1908.jpg", link: "showpictureid=22.html"},
    {src: "images/IMG_3526.jpg", link: "showpictureid=25.html"},
    {src: "images/IMG_3695.jpg", link: "showpictureid=26.html"},
    {src: "images/IMG_4046.jpg", link: "showpictureid=27.html"},
    {src: "images/IMG_8871.jpg", link: "showpictureid=29.html"},
    {src: "images/IMG_8879.jpg", link: "showpictureid=30.html"},
    {src: "images/MG_1848.jpg", link: "showpictureid=31.html"},
    {src: "images/MG_1865.jpg", link: "showpictureid=32.html"},
    {src: "images/MG_1886.jpg", link: "showpictureid=33.html"},
    {src: "images/MG_1956.jpg", link: "showpictureid=34.html"},
    {src: "images/MG_2066.jpg", link: "showpictureid=35.html"},
    {src: "images/MG_2179.jpg", link: "showpictureid=36.html"},
    {src: "images/MG_3215.jpg", link: "showpictureid=37.html"},
    {src: "images/MG_3280.jpg", link: "showpictureid=38.html"},
    {src: "images/P1000313.JPG", link: "showpictureid=39.html"},
    {src: "images/dji_fly_20240331.jpg", link: "showpictureid=40.html"},
    {src: "images/dji_fly_20240428.jpg", link: "showpictureid=41.html"},
    {src: "images/dji_fly_20240502.jpg", link: "showpictureid=42.html"},
    {src: "images/MG_3435.jpg", link: "showpictureid=23.html"},
    {src: "images/MG_3452.jpg", link: "showpictureid=24.html"},
    {src: "images/DSC_0260.JPG", link: "showpictureid=55.html"},
    {src: "images/DSC_0191.JPG", link: "showpictureid=54.html"},
    {src: "images/DSC_0018.JPG", link: "showpictureid=53.html"},
    {src: "images/CSC_0371.JPG", link: "showpictureid=52.html"},
    {src: "images/DSC_0601.JPG", link: "showpictureid=51.html"},
    {src: "images/DSC_0431.JPG", link: "showpictureid=50.html"},
    {src: "images/DSC_0286.JPG", link: "showpictureid=49.html"},
    {src: "images/CSC_0302.JPG", link: "showpictureid=48.html"},
    {src: "images/472070735_1580262769264924_2326834061653819060_n.jpg", link: "showpictureid=56.html"},
    {src: "images/DSC_0386.JPG", link: "showpictureid=57.html"},
    {src: "images/DSC_0744.JPG", link: "showpictureid=58.html"},
    {src: "images/DSC_1033.JPG", link: "showpictureid=59.html"},
    {src: "images/DSC_0434.JPG", link: "showpictureid=60.html"},
    {src: "images/DSC_0534.JPG", link: "showpictureid=61.html"},
    {src: "images/CSC_0693.JPG", link: "showpictureid=62.html"},
    {src: "images/CSC_0694.JPG", link: "showpictureid=63.html"}];

function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}

function displayRandomImage() {
    const randomImage = getRandomImage();
    const container = document.createElement('div');
    
    const link = document.createElement('a');
    link.href = randomImage.link;
    
    const img = document.createElement('img');
    img.style.cssText = 'max-width: 100%; max-height: 600px; object-fit: contain; border-radius: 8px; border: 1px solid #eee; box-shadow: 0 2px 4px rgba(0,0,0,0.1);';
    img.alt = 'Featured Railroad Photo';
    img.src = randomImage.src;
    img.loading = 'eager';
    img.decoding = 'sync';
    img.fetchPriority = 'high';
    
    link.appendChild(img);
    container.appendChild(link);
    
    const scriptElement = document.currentScript;
    if (scriptElement && scriptElement.parentElement) {
        scriptElement.parentElement.appendChild(container);
    }
}

function loadRandomImages(containerId, count) {
    const container = document.getElementById(containerId);
    const availableImages = [...images]; // Make a copy of the images array
    const selectedImages = [];

    // Select random images without repetition
    while (selectedImages.length < count && availableImages.length > 0) {
        const randomIndex = Math.floor(Math.random() * availableImages.length);
        const image = availableImages.splice(randomIndex, 1)[0]; // Remove and get the selected image
        selectedImages.push(image);
        
        // Create image element with link
        const link = document.createElement('a');
        link.href = image.link;
        
        const img = document.createElement('img');
        img.src = image.src;
        img.alt = 'Railroad Photo';
        img.loading = 'lazy';
        
        link.appendChild(img);
        container.appendChild(link);
    }
}

// Export functions for use with ES modules
export { getRandomImage, displayRandomImage, loadRandomImages };