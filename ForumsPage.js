// forums.js with enhanced authentication (email, username, password), login/register tab, and logout functionality

class Forum {
  constructor() {
    this.users = JSON.parse(localStorage.getItem("forumUsers")) || [];
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.posts = JSON.parse(localStorage.getItem("forumPosts")) || [
      {
        title: "Recent Announcements",
        content: "Dev Update 2/21/2025: Started to Build the App",
        comments: [],
      },
      {
        title: "Recent Announcements",
        content: "Dev Update 2/26/2025: We created the frontend of the app",
        comments: [],
      },
    ];
    this.savePosts();
  }

  saveUsers() {
    localStorage.setItem("forumUsers", JSON.stringify(this.users));
  }

  savePosts() {
    localStorage.setItem("forumPosts", JSON.stringify(this.posts));
  }

  registerUser(email, username, password) {
    if (this.users.find((user) => user.username === username)) {
      alert("Username already exists.");
    } else {
      this.users.push({ email, username, password });
      this.saveUsers();
      alert("Registration successful! Please log in.");
      this.showLoginForm();
    }
  }

  loginUser(username, password) {
    const user = this.users.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      this.currentUser = user;
      localStorage.setItem("currentUser", JSON.stringify(this.currentUser));
      this.loadForumsPage();
    } else {
      alert("Invalid credentials. Please try again.");
    }
  }

  logoutUser() {
    this.currentUser = null;
    localStorage.removeItem("currentUser");
    this.loadForumsPage();
  }

  addPost(title, content) {
    if (this.currentUser) {
      if (title.trim() && content.trim()) {
        this.posts.push({
          title,
          content,
          author: this.currentUser.username,
          comments: [],
        });
        this.savePosts();
        this.displayPosts();
      } else {
        alert("Title and content cannot be empty.");
      }
    } else {
      alert("Please log in to add a post.");
    }
  }

  addComment(postIndex, comment) {
    if (this.currentUser) {
      if (comment.trim()) {
        this.posts[postIndex].comments.push({
          user: this.currentUser.username,
          text: comment,
        });
        this.savePosts();
        this.displayPosts();
      } else {
        alert("Comment cannot be empty.");
      }
    } else {
      alert("Please log in to comment.");
    }
  }

  displayPosts() {
    const mainContainer = document.getElementById("main");
    mainContainer.innerHTML = "";

    const postsContainer = document.createElement("div");
    postsContainer.id = "forum-posts";

    this.posts.forEach((post, index) => {
      const postElement = document.createElement("div");
      postElement.className = "forum-post";
      postElement.innerHTML = `
        <h4>${post.title} (by ${post.author || "Anonymous"})</h4>
        <p>${post.content}</p>
        <div class="comments-section">
          <h5>Comments:</h5>
          <ul>
            ${post.comments
              .map((comment) => `<li><strong>${comment.user}:</strong> ${comment.text}</li>`)
              .join("")}
          </ul>
          ${
            this.currentUser
              ? `<form onsubmit="handleComment(event, ${index})">
                    <input type="text" placeholder="Add a comment..." required />
                    <button type="submit">Comment</button>
                </form>`
              : "<p>Log in to comment.</p>"
          }
        </div>
      `;
      postsContainer.appendChild(postElement);
    });
    mainContainer.appendChild(postsContainer);
  }

  showLoginForm() {
    document.getElementById("login-register-tab").innerHTML = `
      <div class="auth-form">
        <h2>Login</h2>
        <form onsubmit="handleLogin(event)">
          <input type="text" id="login-username" placeholder="Username" required />
          <input type="password" id="login-password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <a href="#" onclick="forum.showRegisterForm()">Register here</a></p>
      </div>
    `;
  }

  showRegisterForm() {
    document.getElementById("login-register-tab").innerHTML = `
      <div class="auth-form">
        <h2>Register</h2>
        <form onsubmit="handleRegister(event)">
          <input type="email" id="register-email" placeholder="Email" required />
          <input type="text" id="register-username" placeholder="Username" required />
          <input type="password" id="register-password" placeholder="Password" required />
          <button type="submit">Register</button>
        </form>
        <p>Already have an account? <a href="#" onclick="forum.showLoginForm()">Login here</a></p>
      </div>
    `;
  }

  loadForumsPage() {
    document.getElementById("main").innerHTML = `
      <div class="forum-container">
        <div id="login-register-tab"></div>
        <h2>Community Forums</h2>
        ${
          this.currentUser
            ? `<button onclick="forum.logoutUser()">Logout (${this.currentUser.username})</button>`
            : '<p><a href="#" onclick="forum.showLoginForm()">Login</a> or <a href="#" onclick="forum.showRegisterForm()">Register</a> to post or comment.</p>'
        }
        <div class="forum-announcements">
          <h3>Recent Announcements</h3>
          <p>Dev Update 2/21/2025: Started to Build the App</p>
          <p>Dev Update 2/26/2025: We created the frontend of the app</p>
        </div>
        ${
          this.currentUser
            ? `<form class="post-form" onsubmit="handlePost(event)">
                  <input type="text" id="post-title" placeholder="Post Title" required />
                  <textarea id="post-content" rows="4" placeholder="Write something..." required></textarea>
                  <button type="submit">Add Post</button>
              </form>`
            : ""
        }
        <div id="forum-posts"></div>
      </div>
    `;
    this.displayPosts();
  }
}

const forum = new Forum();

function handlePost(event) {
  event.preventDefault();
  const title = document.getElementById("post-title").value;
  const content = document.getElementById("post-content").value;
  forum.addPost(title, content);
  document.getElementById("post-title").value = "";
  document.getElementById("post-content").value = "";
}

function handleComment(event, postIndex) {
  event.preventDefault();
  const commentInput = event.target.querySelector("input");
  const comment = commentInput.value;
  forum.addComment(postIndex, comment);
  commentInput.value = "";
}

function handleLogin(event) {
  event.preventDefault();
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;
  forum.loginUser(username, password);
}

function handleRegister(event) {
  event.preventDefault();
  const email = document.getElementById("register-email").value;
  const username = document.getElementById("register-username").value;
  const password = document.getElementById("register-password").value;
  forum.registerUser(email, username, password);
}

// Initialize forums page
forum.loadForumsPage();
