// fetch("/data.json").then

document.addEventListener("DOMContentLoaded", () => {
  const dots = document.querySelectorAll(".timeline-dot");
  const dateElement = document.getElementById("date");
  const descriptionElement = document.getElementById("description");
  const infoElement = document.querySelector(".info");
  const timelineBar = document.querySelector(".timeline-bar");

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      // Remove active class from all dots
      dots.forEach((dot) => dot.classList.remove("active"));

      // Add active class to the clicked dot
      dot.classList.add("active");

      infoElement.style.opacity = 0;
      infoElement.style.transform = "translateX(20px)";

      timelineBar.style.opacity = 0.4;
      timelineBar.style.transform = "translateX(10px)";

      setTimeout(() => {
        const percentage = (index / (dots.length - 1)) * 100;
        timelineBar.style.background = `linear-gradient(to right, #007bff ${percentage}%, #bebaba ${percentage}%)`;
        timelineBar.style.opacity = 1;
        timelineBar.style.transform = "translateX(0)";
      }, 500);

      setTimeout(() => {
        // info div content update
        const date = dot.getAttribute("data-date");
        const description = dot.getAttribute("data-description");
        dateElement.textContent = date;
        descriptionElement.textContent = description;

        infoElement.style.opacity = 1;
        infoElement.style.transform = "translateX(0)";
      }, 500);
    });
  });
});
