document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("header").innerHTML = `
    <div class="logo">
      <img src="https://media.discordapp.net/attachments/1341195734124466258/1341195808523161612/a5d64d120571949.60b4b4b2a9f63.jpg?ex=67b9baae&is=67b8692e&hm=d31a004a3b4780997a4cf36b1b9001042a987390297d95dfa1489e20a3c3b76f&=&format=webp&width=900&height=675" alt="Logo" />
      <h1>FLYIntel</h1>
    </div>
    <nav>
      <a href="#" onclick="navigate('home')">Home</a>
      <a href="https://discord.gg/GuJzmG2VBv" target="_blank">Discord</a>
      <a href="#" onclick="navigate('forums')">Forums</a>
      <a href="#" onclick="navigate('map')">Public Map</a>
    </nav>
  `;

  loadHomePage();

  document.getElementById("footer").innerHTML = `
    <p>© 2025 FLYIntel. All rights reserved.</p>
    <p>Made with ❤️ by Dmi</p>
    <nav>
      <a href="#" onclick="navigate('home')">Home</a>
      <a href="https://discord.gg/GuJzmG2VBv" target="_blank">Discord</a>
      <a href="#" onclick="navigate('forums')">Forums</a>
      <a href="#" onclick="navigate('map')">Public Map</a>
      <a href="#" onclick="navigate('privacy')">Privacy Policy</a>
    </nav>
  `;
});

function loadHomePage() {
  document.getElementById("main").innerHTML = `
    <div class="banner">
      <p class="announcement">We're currently in Development! Join our Discord to stay updated.</p>
      <h2>Track Flights like <span>never before</span>.</h2>
      <p class="description">FlyIntel is redefining the future of flight simulation tracking completely free for all users! Currently supporting all major simulators!</p>
      <div class="button-container">
        <button onclick="window.open('https://discord.gg/GuJzmG2VBv', '_blank')">Join Discord</button>
      </div>
      <div class="app-preview">App Preview Coming Soon...</div>
    </div>
  `;
}

function loadForumsPage() {
  document.getElementById("main").innerHTML = `
    <div class="forum-container">
      <h2>Community Forums</h2>
      <div id="forum-posts"></div>
    </div>
  `;
  displayForumPosts();
}

function displayForumPosts() {
  const postsContainer = document.getElementById("forum-posts");
  postsContainer.innerHTML = "";
  forum.posts.forEach((post) => {
    postsContainer.innerHTML += `
      <div class="forum-post">
        <h3>${post.title}</h3>
        <p>${post.content}</p>
      </div>
    `;
  });
}

function loadMapPage() {
  document.getElementById("main").innerHTML = `
    <div class="coming-soon">Coming Soon!</div>
  `;
}

function navigate(page) {
  if (page === "home") {
    loadHomePage();
  } else if (page === "forums") {
    loadForumsPage();
  } else if (page === "map") {
    loadMapPage();
  } else if (page === "privacy") {
    document.getElementById("main").innerHTML = `
      <h2>Privacy Policy</h2>
      <p>Details about our privacy policy will be displayed here.</p>
    `;
  } else {
    document.getElementById("main").innerHTML = `
      <h2>Welcome to ${page.charAt(0).toUpperCase() + page.slice(1)} Page</h2>
      <p>Content for ${page} will be here.</p>
    `;
  }
}
