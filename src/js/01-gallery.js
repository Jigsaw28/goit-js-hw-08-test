// Add imports above this line
import { galleryItems } from './gallery-items';
import simpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('ul.gallery');
console.log(galleryList);

const cards = galleryItems.map(({description, original, preview}) => {
  return `<li class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      alt=${description}
    />
  </a>
</li>`;
}).join('');

galleryList.insertAdjacentHTML('afterbegin', cards);

const galleryLightBox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});