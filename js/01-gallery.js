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

divGallery.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(e.target.classList.value);
  if (e.target.classList.value === "gallery__image") {
    const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="1280" height="720">
`);

    instance.show();
  } else {
    return;
  }
});
