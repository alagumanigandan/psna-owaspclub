const toggleButton = document.getElementById("sidebarToggle");
const sidebar = document.getElementById("sidebar");

toggleButton.addEventListener("click", () => {
  sidebar.classList.toggle("active");

  if (sidebar.classList.contains("active")) {
    sidebar.style.display = "none";
  } else {
    sidebar.style.display = "flex";
  }
});