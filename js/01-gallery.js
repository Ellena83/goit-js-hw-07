import { galleryItems } from './gallery-items.js';
// Change code below this line
const galeryListRef = document.querySelector('.gallery');

function createGallery(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
        })
        .join('');
}
const imageGallery = createGallery(galleryItems);
galeryListRef.insertAdjacentHTML("afterbegin", imageGallery);

galeryListRef.addEventListener('click', clickHandler);

function clickHandler(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    const source = event.target.dataset.source;

    const instance = basicLightbox.create(`
   <div class ='modal'></div>
    <img src="${source}" width="800" height="600">
 
`,
        // {
        //     onShow: (instance) => {
        //         window.addEventListener("keydown", (event) => {
        //             event.preventDefault();
        //             if (event.code === "Escape") {
        //                 instance.element().keydown = instance.close;
        //             }
        //         }
        //         )
        //     }
        // },
        // {
        //     onclose: (instance) => {
        //         window.removeEventListener("keydown", (event) => {
        //             if (event.code === "Escape") {
        //                 instance.close;
        //             }
        //         }
        //         )
        //     }
        // }
    )
    
    instance.show();

    // window.addEventListener("keydown", (event) => {
    //     event.preventDefault();
    //         if (event.code === "Escape") {
    //                onShow: (instance) => {
    //     instance.element().querySelector('a').onclick = instance.close
    // }
           
    //     }
        
    // 
}