import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDYrC0XP7yWgoGaQnB7T26jgsYP-ysEU2c",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "travel-in-depth",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (!user) {
    alert("Please sign in to explore AR content.");
  }
});

const images = [
  { url: 'https://images8.alphacoders.com/538/538085.jpg', name: 'Taj Mahal, Agra' },
  { url: 'https://data.1freewallpapers.com/download/india-monuments-1440x1080.jpg', name: 'Historic India' },
  { url: 'https://www.mistay.in/travel-blog/content/images/2020/07/travel-4813658_1920.jpg', name: 'India Gate' },
  { url: 'https://www.holidify.com/images/cmsuploads/compressed/golden-temple-397886_1920_20180814155122.jpg', name: 'Golden Temple, Amritsar' },
  { url: 'https://th.bing.com/th/id/OIP.2O5z9IY6TgsNWMtZTGmF1AHaFW?rs=1&pid=ImgDetMain', name: 'Lotus Temple' },
  { url: 'https://wallpaperaccess.com/full/1635203.jpg', name: 'Kerala Backwaters' },
  { url: 'https://e1.pxfuel.com/desktop-wallpaper/764/222/desktop-wallpaper-ancient-india-indian-monuments.jpg', name: 'Sun Temple' },
  { url: 'https://wallpaperaccess.com/full/9516008.jpg', name: 'Gateway of India' },
  { url: 'https://i.pinimg.com/originals/f8/2e/cc/f82eccbd6aa6bb6c37a416cdff3d4356.jpg', name: 'Hawa Mahal' }
];

const slideshow = document.getElementById('slideshow');
const slideInfo = document.getElementById('slideInfo');

images.forEach((img, index) => {
  const div = document.createElement('div');
  div.className = 'slide';
  if (index === 0) div.classList.add('active');
  div.style.backgroundImage = `url(${img.url})`;
  slideshow.appendChild(div);
});

let currentSlide = 0;
setInterval(() => {
  const slides = document.querySelectorAll('.slide');
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');

  slideInfo.innerHTML = `
    <h2>${images[currentSlide].name}</h2>
    <button onclick="window.location.href='valley-of-flowers.html'">Explore More in AR</button>
  `;
}, 5000);

window.toggleDropdown = function () {
  const dropdown = document.getElementById('profileDropdown');
  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
};

if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  document.getElementById('arBtn').style.display = 'block';
}
onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = 'index.html'; // Redirect if not logged in
  }
});
function handleLogin() {
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const message = document.getElementById('message');

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      message.textContent = "Login successful! Redirecting...";
      message.className = "message success";

      // Redirect to homepage after 1.5 seconds
      setTimeout(() => {
        window.location.href = 'homepage.html'; // 👈 This line handles the redirect
      }, 1500);
    })
    
    .catch((error) => {
      message.textContent = error.message;
      message.className = "message error";
    });
// firebase-config.js
// Import Firebase
// Moved to the top level of the module
function login() {
  const auth = getAuth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  signInWithPopup(auth, provider)
      .then((result) => {
          // User is signed in
          console.log(result.user);
          // Redirect to homepage or Assam page based on logic
          window.location.href = 'assam.html'; // or 'assam.html'
      })
      .catch((error) => {
          console.error(error);
      });
}
function searchPlace() {
  var searchTerm = document.getElementById('search-bar').value.toLowerCase().trim();

  if (searchTerm === 'assam') {
      window.location.href = 'assam.html'; // Redirect to Assam page
  } else {
      alert('Place not found');
  }
}
const firebaseConfig = {
    apiKey: "AIzaSyDYrC0XP7yWgoGaQnB7T26jgsYP-ysEU2c",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "travel-in-depth",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
function handleSearch() {
  const query = document.getElementById("searchBar").value.toLowerCase();
  if (query.includes("kerala")) {
    window.location.href = "kerala.html";
  }
}

// Check user authentication status
onAuthStateChanged(auth, (user) => {
    if (user) {
        // Redirect to Assam page or homepage based on user login
        console.log('User logged in');
        // You can redirect to specific pages as needed
    } else {
        console.log('No user is signed in');
    }
});




}
