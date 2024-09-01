// document.addEventListener("DOMContentLoaded", () => {
//   const entries = document.querySelectorAll(".timeline-entry");

//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add("show");
//       }
//     });
//   });

//   entries.forEach((entry) => {
//     observer.observe(entry);
//   });
// });

// fetch("/data.json").then
document.addEventListener("DOMContentLoaded", () => {
  const dots = document.querySelectorAll(".timeline-dot");
  const dateElement = document.getElementById("date");
  const descriptionElement = document.getElementById("description");
  // const imgElement = document.getElementById("imgs");

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      // Remove active class from all dots
      dots.forEach((dot) => dot.classList.remove("active"));

      // Add active class to the clicked dot
      dot.classList.add("active");

      // Update the content in the img div
      // const img = dot.getAttribute("data-img");
      // imgElement.textContent = img;

      // Update the content in the info div
      const date = dot.getAttribute("data-date");
      const description = dot.getAttribute("data-description");
      dateElement.textContent = date;
      descriptionElement.textContent = description;
    });
  });
});
