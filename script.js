// Define all posts
const posts = [
  {
    id: 1,
    title: "Welcome to My Blog",
    date: "October 30, 2025",
    image: "ai1.png",
    description: "An introduction to what this blog is about and what to expect.",
    content: `
      <p>Welcome to my blog! This is where I share my thoughts, learnings, and reflections. 
      You’ll find posts on technology, creativity, and everything that inspires me to keep learning.</p>
      <p>Every article is written to offer something meaningful — whether it’s a lesson, perspective, or story.</p>
      <img src="ai1.png" alt="blog intro image">
      <p>Thanks for visiting — I hope you find something valuable here.</p>
    `
  },
  {
    id: 2,
    title: "Learning Git and GitHub",
    date: "October 25, 2025",
    image: "ai2.png",
    description: "A simple guide to understanding Git and GitHub for beginners.",
    content: `
      <p>When I first learned Git, it felt intimidating. But once I realized it’s just like “Save Game” for code — everything clicked!</p>
      <p>Git lets you track your code changes locally, while GitHub helps you share and collaborate with others online.</p>
      <img src="ai2.png" alt="Git and GitHub Image">
      <p>Whether you're building solo projects or contributing to open source, Git is an essential skill that makes your workflow cleaner and safer.</p>
    `
  },
  {
    id: 3,
    title: "Why I Love Building Projects",
    date: "October 22, 2025",
    image: "ai3.png",
    description: "Projects teach more than theory ever can — here’s why I believe in learning by doing.",
    content: `
      <p>Projects give life to knowledge. Every time you build something new, you understand concepts in a deeper, practical way.</p>
      <p>From small Python scripts to AI models, each project I’ve built taught me problem-solving, patience, and creativity.</p>
      <img src="ai3.png" alt="Building projects image">
      <p>So stop waiting for the perfect idea — start with curiosity, and let the journey teach you more than the destination.</p>
    `
  }
];

// Fill posts on homepage
function renderPosts() {
  const postsContainer = document.getElementById("posts");
  postsContainer.innerHTML = posts.map(post => `
    <div class="card">
      <img src="${post.image}" alt="${post.title}">
      <h2>${post.title}</h2>
      <small>${post.date}</small>
      <p>${post.description}</p>
      <a href="post.html" class="read-more" onclick="savePost(${post.id})">Read More →</a>
    </div>
  `).join('');
}

// Save post ID to local storage
function savePost(id) {
  localStorage.setItem('selectedPost', id);
}

// For homepage
if (document.getElementById("posts")) {
  document.getElementById("year").textContent = new Date().getFullYear();
  renderPosts();
}

// For post.html
if (document.getElementById("post-container")) {
  const id = localStorage.getItem('selectedPost');
  const post = posts.find(p => p.id == id);
  if (post) {
    document.getElementById("post-container").innerHTML = `
      <div class="post-container">
        <img src="${post.image}" alt="${post.title}">
        <h1>${post.title}</h1>
        <small>${post.date}</small>
        <div class="post-content">${post.content}</div>
        <a href="index.html" class="back-btn">← Back to Home</a>
      </div>
    `;
  }
}
