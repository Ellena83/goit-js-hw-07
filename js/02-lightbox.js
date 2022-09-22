import { galleryItems } from './gallery-items.js';
// Change code below this line
const ulRef = document.querySelector('.gallery');

    const lightbox = new SimpleLightbox('.gallery a', {
        captions: 'true',
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: '250'
}); 

function createGallery(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `<a class="gallery__item" href="${original}">
        <img class="gallery__image" 
             src="${preview}" 
             alt="${description}" />
                    </a>`;
        })
        .join('');
}
const imageGallery = createGallery(galleryItems);
ulRef.insertAdjacentHTML("afterbegin", imageGallery);

ulRef.addEventListener('click', clickHandler);

function clickHandler(event) {
    event.preventDefault();
    if (!event.target.classList.contains('gallery__image')) {
        return;
    }
}