const galleryData = [
  {
    image: "Images/DateEvent.jpg",
    name: "Dating",
    description: "Where two souls meet, love begins.",
  },
  {
    image: "Images/WeddingCeremony.jpg",
    name: "Wedding Ceremony",
    description: "Make memories under rose petals and twinkling lights.",
  },
  {
    image: "Images/MusicVideo.jpg",
    name: "Music Video",
    description: "A vibrant music video set in the heart of an exquisite garden.",
  },
];

let currentIndex = 0;

const gallery = document.querySelector(".card-gallery");
const cards = document.querySelectorAll(".card");
const navBtns = document.querySelectorAll(".nav-btn");

function updateGallery(index) {
  cards.forEach((card, i) => {
    if (i === index) {
      card.classList.add("active");
      card.innerHTML = `<div class="card-info"><h2>${galleryData[i].name}</h2><p>${galleryData[i].description}</p></div>`;
    } else {
      card.classList.remove("active");
      card.innerHTML = "";
    }
    card.style.backgroundImage = `url('${galleryData[i].image}')`;
  });
}

navBtns[0].addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + galleryData.length) % galleryData.length;
  updateGallery(currentIndex);
});
navBtns[1].addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % galleryData.length;
  updateGallery(currentIndex);
});

gallery.addEventListener("click", (e) => {
  const card = e.target.closest(".card");
  if (!card) return;
  const idx = Array.from(cards).indexOf(card);
  currentIndex = idx;
  updateGallery(currentIndex);
});

updateGallery(currentIndex);

document.getElementById('view-more').addEventListener('click', function(){
  window.location.href = 'Gallery.html';
})
