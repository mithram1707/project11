const galleryImages = [
  { src: "https://picsum.photos/id/1015/400/300", title: "Mountain River", category: "nature" },
  { src: "https://picsum.photos/id/1035/400/300", title: "Desert Rocks", category: "nature" },
  { src: "https://picsum.photos/id/1043/400/300", title: "New York", category: "city" },
  { src: "https://picsum.photos/id/1050/400/300", title: "Dog Portrait", category: "animals" },
  { src: "https://picsum.photos/id/1062/400/300", title: "Wild Tiger", category: "animals" },
  { src: "https://picsum.photos/id/1012/400/300", title: "Skyscrapers", category: "city" },
  { src: "https://picsum.photos/id/1025/400/300", title: "Cute Puppy", category: "animals" },
  { src: "https://picsum.photos/id/1003/400/300", title: "Green Hills", category: "nature" }
];

const gallery = document.getElementById("gallery");
const categoryFilter = document.getElementById("categoryFilter");
const searchBox = document.getElementById("searchBox");

function displayImages(images) {
  gallery.innerHTML = "";
  images.forEach(img => {
    const imageElement = document.createElement("img");
    imageElement.src = img.src;
    imageElement.alt = img.title;
    imageElement.title = img.title;
    gallery.appendChild(imageElement);
  });
}

function filterGallery() {
  const category = categoryFilter.value.toLowerCase();
  const searchText = searchBox.value.toLowerCase();

  const filteredImages = galleryImages.filter(img => {
    const matchCategory = category === "all" || img.category === category;
    const matchText = img.title.toLowerCase().includes(searchText);
    return matchCategory && matchText;
  });

  displayImages(filteredImages);
}

categoryFilter.addEventListener("change", filterGallery);
searchBox.addEventListener("input", filterGallery);

displayImages(galleryImages);
