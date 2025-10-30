const posts = [
  {
    id: 1,
    title: "Welcome to My Blog",
    date: "October 30, 2025",
    image: "ai1.png",
    description: "An introduction to what this blog is about and what to expect.",
    content: `
      <p>Welcome to my blog! This space is where I share my experiences, learnings, and insights on topics that matter to me.</p>
      <p>Here’s a sneak peek of what’s coming: personal growth stories, tech tutorials, reflections, and a bit of creativity.</p>
      <img src="image1.png" alt="blog intro image">
      <p>Stick around—each post aims to offer something meaningful you can take away.</p>
    `
  },
  {
    id: 2,
    title: "Learning Git and GitHub",
    date: "October 25, 2025",
    image: "ai2.png",
    description: "A simple guide to understanding Git and GitHub for beginners.",
    content: `
      <p>Version control might sound complicated, but Git makes it simple once you get the basics.</p>
      <img src="image2.png" alt="git and github image">
      <p>Git helps you track changes in your code. GitHub lets you store and collaborate on those changes online.</p>
      <p>Learning this skill improves your teamwork, coding discipline, and professional credibility.</p>
    `
  },
  {
    id: 3,
    title: "Why I Love Building Projects",
    date: "October 22, 2025",
    image: "ai3.png",
    description: "Projects teach more than theory ever can — here’s why I believe in learning by doing.",
    content: `
      <p>Building projects gives you the confidence that tutorials can’t. It’s the difference between knowing and doing.</p>
      <img src="image3.png" alt="project building image">
      <p>Every project I’ve worked on — from data dashboards to AI models — taught me something new, practical, and impactful.</p>
      <p>Don’t wait to feel ready; start small, fail fast, and learn faster.</p>
    `
  }
];

// Load current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

const postsContainer = document.getElementById("posts");
const postDetail = document.getElementById("post-detail");

// Render all posts
function renderPosts() {
  postsContainer.innerHTML = posts.map(post => `
    <div class="card">
      <img src="${post.image}" alt="${post.title}">
      <h2>${post.title}</h2>
      <small>${post.date}</small>
      <p>${post.description}</p>
      <a href="#" class="read-more" onclick="openPost(${post.id});return false;">Read More →</a>
    </div>
  `).join("");
}

// Open single post
function openPost(id) {
  const post = posts.find(p => p.id === id);
  if (!post) return;

  postsContainer.classList.add("hidden");
  postDetail.classList.remove("hidden");

  postDetail.innerHTML = `
    <div class="card">
      <h2>${post.title}</h2>
      <small>${post.date}</small>
      <div>${post.content}</div>
      <a href="#" class="back-btn" onclick="goBack();return false;">← Back to Home</a>
    </div>
  `;
}

// Back to home
function goBack() {
  postDetail.classList.add("hidden");
  postsContainer.classList.remove("hidden");
}

// Initialize
renderPosts();
