
document.querySelectorAll(".nav-right span").forEach(item => {
  item.addEventListener("click", () => {
    alert(item.innerText + " clicked (demo)");
  });
});

document.querySelector(".login-btn").addEventListener("click", () => {
  alert("Login page (demo)");
});
const searchInput = document.querySelector(".nav-left input");
searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    if (searchInput.value.trim() === "") {
      alert("Please type something to search 🎵");
    } else {
      alert(`Searching for "${searchInput.value}" (demo)`);
    }
  }
});
document.querySelector(".create-btn").addEventListener("click", () => {
  alert("Create menu opened (demo)");
});
document.querySelectorAll(".side-card button").forEach(btn => {
  btn.addEventListener("click", () => {
    alert(btn.innerText + " clicked (demo)");
  });
});
document.querySelectorAll(".song-card").forEach(card => {
  card.addEventListener("click", () => {
    const songName = card.querySelector("h4").innerText;
    const artist = card.querySelector("p").innerText;
    alert(`▶ Now playing:\n${songName}\nby ${artist} (demo)`);
  });
});
document.querySelectorAll(".artist-card").forEach(card => {
  card.addEventListener("click", () => {
    const artistName = card.querySelector("p").innerText;
    alert(`Opening artist page:\n${artistName} (demo)`);
  });
});
document.querySelectorAll(".section-header span").forEach(span => {
  span.addEventListener("click", () => {
    alert("Show all clicked (demo)");
  });
});
document.querySelector(".bottom-banner button").addEventListener("click", () => {
  alert("Sign up page (demo)");
});
