const blogCards = document.querySelectorAll(".blog-card");
const blogView = document.getElementById("blog-view");
const blogList = document.querySelector(".blog-list");
const blogContent = document.getElementById("blog-content");
const blogImages = document.getElementById("blog-images");
const backBtn = document.getElementById("back-btn");

blogCards.forEach(card => {
  card.addEventListener("click", async () => {
    const file = card.getAttribute("data-file");
    const images = card.getAttribute("data-images");

    const res = await fetch(file);
    const text = await res.text();

    blogContent.innerHTML = marked.parse(text);

    // show all images if multiple provided
    if (images) {
      const imageList = images.split(",").map(img => img.trim());
      blogImages.innerHTML = imageList
        .map(img => `<img src="${img}" alt="Blog Image">`)
        .join("");
    } else {
      blogImages.innerHTML = "";
    }

    blogList.classList.add("hidden");
    blogView.classList.remove("hidden");
  });
});

backBtn.addEventListener("click", () => {
  blogList.classList.remove("hidden");
  blogView.classList.add("hidden");
  blogContent.innerHTML = "";
  blogImages.innerHTML = "";
});
