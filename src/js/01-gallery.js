import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryRef = document.querySelector('.gallery');
const createGalleryItemsMarkup = galleryItems.map(
    ({ preview, original, description }) =>
        `<li class="gallery__link">
        <a class="gallery__item" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        alt="${description}" />
        </a>
        </li>`
).join('');
galleryRef.insertAdjacentHTML('beforeend', createGalleryItemsMarkup)

let lightbox = new SimpleLightbox(".gallery__item", {
  captions: true,
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
  disableScroll: true,
});

lightbox.on('closed.simplelightbox', function () {
 console.log('Спасибо за уделенное время');   
});
console.log(galleryItems);
