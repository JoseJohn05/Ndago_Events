function logIn() {
                // Go to sign-in page
                window.location.href = "SignIn.html";
            }

function bookEvent() {
                // Redirect to booking page
                window.location.href = "Booking.html";
            }
// Sample event data
const events = [
  {
    title: "Birthday Party",
    type: "Birthday",
    description: "Celebrate your special day with us!",
    image: "Images/BirthdayParty.jpg"
  },
  {
    title: "Camping Adventure",
    type: "Camping",
    description: "Enjoy nature and camp under the stars.",
    image: "Images/CampingEvent.jpg"
  },
  {
    title: "Wedding Ceremony",
    type: "Wedding",
    description: "Make your wedding unforgettable at Ndago.",
    image: "Images/WeddingCeremony.jpg"
  },
  {
    title: "Music Video Shoot",
    type: "Music Video",
    description: "Perfect venue for creative shoots.",
    image: "Images/MusicEvent.jpg"
  },
  {
    title: "Photo Shoot",
    type: "Photography",
    description: "Capture beautiful moments with a professional photo shoot.",
    image: "Images/Exposition Park Rose Garden l Los Angeles….jpg"
  },
  {
    title: "Picnic Day",
    type: "Picnic",
    description: "Relax and enjoy a picnic with loved ones.",
    image: "Images/FamilyPicnic.jpg"
  },
  {
    title: "Dating Experience",
    type: "Dating",
    description: "Romantic settings for couples.",
    image: "Images/Date Event.jpg"
  },
  {
    title: "Other Event",
    type: "Other",
    description: "Contact us for custom events.",
    image: "Images/image.jpg"
  }
];

function renderEvents(filteredEvents) {
  const container = document.getElementById('events-container');
  container.innerHTML = '';
  if (filteredEvents.length === 0) {
    container.innerHTML = '<div class="col-12"><div class="alert alert-warning text-center">No events found.</div></div>';
    return;
  }
  filteredEvents.forEach(event => {
    const card = document.createElement('div');
    card.className = 'col-md-6 col-lg-4 mb-4';
    card.innerHTML = `
      <div class="card h-100 shadow-sm">
        <img src="${event.image}" class="card-img-top" alt="${event.title}">
        <div class="card-body">
          <h5 class="card-title">${event.title}</h5>
          <p class="card-text">${event.description}</p>
          <span class="badge bg-primary">${event.type}</span>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

function detectEventType(query) {
  query = query.toLowerCase();
  if (query.includes('birthday')) return 'Birthday';
  if (query.includes('camping')) return 'Camping';
  if (query.includes('wedding')) return 'Wedding';
  if (query.includes('music')) return 'Music Video';
  if (query.includes('picnic')) return 'Picnic';
  if (query.includes('date') || query.includes('dating')) return 'Dating';
  return 'Other';
}

function handleSearch() {
  const input = document.getElementById('searchInput').value.trim();
  if (!input) {
    renderEvents(events);
    return;
  }
  const detectedType = detectEventType(input);
  const filtered = events.filter(e =>
    e.type.toLowerCase() === detectedType.toLowerCase() ||
    e.title.toLowerCase().includes(input.toLowerCase()) ||
    e.description.toLowerCase().includes(input.toLowerCase())
  );
  renderEvents(filtered);
}

document.getElementById('searchBtn').addEventListener('click', handleSearch);
document.getElementById('searchInput').addEventListener('input', handleSearch);

// Initial render
window.addEventListener('DOMContentLoaded', () => {
  renderEvents(events);
});

//View password
function togglePasswordVisibility() {
    const passwordField = document.getElementById("Pass");
    const viewPasswordCheckbox = document.getElementById("viewpassword");
    if (viewPasswordCheckbox.checked) {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}