import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const divGallery = document.querySelector(".gallery");
divGallery.classList.add("gallery__item");

for (let i = 0; i < galleryItems.length; i++) {
  const link = document.createElement("a");
  const img = document.createElement("img");
  divGallery.append(link);
  link.append(img);
  link.classList.add("gallery__link");
  img.classList.add("gallery__image");
  img.setAttribute("src", `${galleryItems[i].preview}`);
  img.setAttribute("alt", `${galleryItems[i].description}`);
  img.dataset.source = `${galleryItems[i].original}`;
  link.setAttribute("href", `${galleryItems[i].original}`);
}

const img = document.querySelector(".gallery__image");
img.addEventListener("click", (e) => {
  e.preventDefault();
  const instance = basicLightbox.create(`
    <img src="${e.currentTarget.original}" width="800" height="600">
`);

  instance.show();
});
