document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("header").innerHTML = `
    <div class="logo">
      <img src="https://media.discordapp.net/attachments/1341195734124466258/1341195808523161612/a5d64d120571949.60b4b4b2a9f63.jpg?ex=67b8692e&is=67b717ae&hm=bdf89bfd2615e3155ecf1f7de88c7d9bf14984b0b2416adc906f5e35749d2f33&=&format=webp&width=900&height=675" alt="Logo" />
      <h1>FlyIntel</h1>
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
    <p>© 2025 FlyIntel. All rights reserved.</p>
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
      <p class="description">The future of flight simulation tracking. Offered completely for free! Currently supporting all major simulators!</p>
      <div class="button-container">
        <button onclick="window.open('https://discord.gg/GuJzmG2VBv', '_blank')">Join Discord</button>
      </div>
      <div class="app-preview">App Preview Coming Soon...</div>
    </div>
  `;
}

function loadPrivacyPolicyPage() {
  document.getElementById("main").innerHTML = `
    <div class="privacy-policy">
      <h2>Privacy Policy for FlyIntel</h2>
      <p><strong>Effective Date:</strong> 2-25-2025</p>
      <p>At FlyIntel, your privacy is our top priority. This Privacy Policy explains how we collect, use, and protect your information when you use our services. By using FlyIntel, you agree to the terms outlined below.</p>

      <h3>1. Information We Collect</h3>
      <p>FlyIntel collects minimal data to provide you with the best experience. We may collect:</p>
      <ul>
        <li><strong>Personal Information:</strong> Such as your email address if you choose to create an account.</li>
        <li><strong>Usage Data:</strong> Information about how you use FlyIntel, including simulator data for tracking purposes.</li>
        <li><strong>Device Information:</strong> Technical data about the devices you use to access FlyIntel (e.g., browser type, operating system).</li>
      </ul>

      <h3>2. How We Use Your Information</h3>
      <p>We use the collected data to:</p>
      <ul>
        <li>Provide and maintain our services.</li>
        <li>Improve user experience and service functionality.</li>
        <li>Communicate updates and relevant information.</li>
        <li>Ensure compliance with legal obligations.</li>
      </ul>
      <p>We do not sell, rent, or share your personal data with third parties except as required by law.</p>

      <h3>3. Data Security</h3>
      <p>FlyIntel employs industry-standard security measures to protect your data. However, no online service is completely secure. We strive to use commercially acceptable means to protect your information but cannot guarantee absolute security.</p>

      <h3>4. Cookies and Tracking Technologies</h3>
      <p>FlyIntel may use cookies to:</p>
      <ul>
        <li>Enhance site performance.</li>
        <li>Personalize your experience.</li>
        <li>Collect anonymous usage statistics.</li>
      </ul>
      <p>You can control cookie settings through your browser preferences.</p>

      <h3>5. Third-Party Links</h3>
      <p>FlyIntel may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage users to read the privacy policies of any linked websites.</p>

      <h3>6. Children's Privacy</h3>
      <p>FlyIntel does not knowingly collect data from children under 13. If you believe that a child under 13 has provided personal information, please contact us immediately.</p>

      <h3>7. Changes to This Privacy Policy</h3>
      <p>We may update this Privacy Policy periodically. Changes will be posted on this page with an updated "Effective Date." Continued use of FlyIntel after updates constitutes acceptance of the revised policy.</p>

      <h3>8. Contact Us</h3>
      <p>For questions or concerns regarding this Privacy Policy, please contact us at:<br>
      <a href="https://discord.gg/zuVafyumMy" target="_blank">https://discord.gg/zuVafyumMy</a></p>
    </div>
  `;
}

function loadForumsPage() {
  document.getElementById("main").innerHTML = `
    <div class="coming-soon">Coming Soon!</div>
  `;
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
    loadPrivacyPolicyPage();
  } else {
    document.getElementById("main").innerHTML = `
      <h2>Welcome to ${page.charAt(0).toUpperCase() + page.slice(1)} Page</h2>
      <p>Content for ${page} will be here.</p>
    `;
  }
}
