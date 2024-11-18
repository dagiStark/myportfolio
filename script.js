import { skills, skills2, projects } from "./assets/constants/index.js";

// const toggleButton = document.getElementById("theme-toggle");
// const body = document.body;

// // Check localStorage for saved theme preference
// const savedTheme = localStorage.getItem("theme");
// if (savedTheme) {
//   body.classList.add(savedTheme);
//   updateButtonText(savedTheme);
// }

// // Toggle light/dark mode on button click
// toggleButton.addEventListener("click", () => {
//   if (body.classList.contains("dark-mode")) {
//     body.classList.remove("dark-mode");
//     localStorage.setItem("theme", ""); // Save light mode preference
//     updateButtonText("");
//   } else {
//     body.classList.add("dark-mode");
//     localStorage.setItem("theme", "dark-mode"); // Save dark mode preference
//     updateButtonText("dark-mode");
//   }
// });

// // Update button text based on theme
// function updateButtonText(currentTheme) {
//   toggleButton.textContent =
//     currentTheme === "dark-mode"
//       ? "Switch to Light Mode"
//       : "Switch to Dark Mode";
// }

// skills

const skillsContainer = document.querySelector(".skills-list");

// Create an unordered list
const ul = document.createElement("ul");

// Iterate over skills and create list items
skills.forEach((skill) => {
  const li = document.createElement("li");
  li.classList.add("skill-item"); // Add a class for animation
  const img = document.createElement("img");
  img.src = skill.icon;
  img.alt = "icon";
  img.loading = "lazy";

  const p = document.createElement("p");
  p.textContent = skill.title;

  li.appendChild(img);
  li.appendChild(p);
  ul.appendChild(li);
});

const ul2 = document.createElement("ul");

skills2.forEach((skill) => {
  const li = document.createElement("li");
  li.classList.add("skill-item"); // Add a class for animation
  const img = document.createElement("img");
  img.src = skill.icon;
  img.alt = "icon";
  img.loading = "lazy";

  const p = document.createElement("p");
  p.textContent = skill.title;

  li.appendChild(img);
  li.appendChild(p);
  ul2.appendChild(li);
});

skillsContainer.appendChild(ul);
skillsContainer.appendChild(ul2);

// Wait for skills to render before observing
window.addEventListener("load", () => {
  const skillItems = document.querySelectorAll(".skill-item");

  const observerOptions = {
    root: null,
    threshold: 0.1, // Trigger when 10% of the element is visible
  };

  const onIntersect = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  };

  const observer = new IntersectionObserver(onIntersect, observerOptions);

  skillItems.forEach((el) => observer.observe(el));
});

const projectsContainer = document.querySelector(".work-list");

// Limit to first 6 projects
const firstSixProjects = projects.slice(0, 6);

firstSixProjects.forEach((project) => {
  // Create the main project div
  const projectDiv = document.createElement("div");
  projectDiv.classList.add("work");

  // Create the image element
  const projectImg = document.createElement("img");
  projectImg.src = project.img;
  projectImg.alt = `${project.title} image`;
  projectImg.loading = "lazy";

  // Create the layer div for text and link
  const layerDiv = document.createElement("div");
  layerDiv.classList.add("layer");

  // Create the title
  const projectTitle = document.createElement("h3");
  projectTitle.textContent = project.title;

  // Create the description
  const projectDes = document.createElement("p");
  projectDes.textContent = project.des;

  // Create the link
  const projectLink = document.createElement("a");
  projectLink.href = project.link;
  const arrowIcon = document.createElement("i");
  arrowIcon.classList.add("fa-solid", "fa-arrow-up-right-from-square");
  projectLink.appendChild(arrowIcon);

  // Append everything to the layer
  layerDiv.appendChild(projectTitle);
  layerDiv.appendChild(projectDes);
  layerDiv.appendChild(projectLink);

  // Append the image and layer to the project div
  projectDiv.appendChild(projectImg);
  projectDiv.appendChild(layerDiv);

  // Append the project div to the container
  projectsContainer.appendChild(projectDiv);
});

window.addEventListener("load", () => {
  const workElements = document.querySelectorAll(".work");

  const observerOptions = {
    root: null,
    threshold: 0.2, // Trigger when 10% of the element is visible
  };

  const onIntersect = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  };

  const observer = new IntersectionObserver(onIntersect, observerOptions);

  workElements.forEach((el) => observer.observe(el));
});

const recentProjectsContainer = document.querySelector(".recent-projects");

// Limit to first 6 projects
const recentProjects = projects.slice(6, 12);

recentProjects.forEach((project) => {
  // Create the main project div
  const projectDiv = document.createElement("div");
  projectDiv.classList.add("work");

  // Create the image element
  const projectImg = document.createElement("img");
  projectImg.src = project.img;
  projectImg.alt = `${project.title} image`;
  projectImg.loading = "lazy";

  // Create the layer div for text and link
  const layerDiv = document.createElement("div");
  layerDiv.classList.add("layer");

  // Create the title
  const projectTitle = document.createElement("h3");
  projectTitle.textContent = project.title;

  // Create the description
  const projectDes = document.createElement("p");
  projectDes.textContent = project.des;

  // Create the link
  const projectLink = document.createElement("a");
  projectLink.href = project.link;
  const arrowIcon = document.createElement("i");
  arrowIcon.classList.add("fa-solid", "fa-arrow-up-right-from-square");
  projectLink.appendChild(arrowIcon);

  // Append everything to the layer
  layerDiv.appendChild(projectTitle);
  layerDiv.appendChild(projectDes);
  layerDiv.appendChild(projectLink);

  // Append the image and layer to the project div
  projectDiv.appendChild(projectImg);
  projectDiv.appendChild(layerDiv);

  // Append the project div to the container
  recentProjectsContainer.appendChild(projectDiv);
});

document.addEventListener("DOMContentLoaded", () => {
  const serviceItems = document.querySelectorAll(".services-list div");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("scroll-in"); // Add the animation class when in view
        } else {
          entry.target.classList.remove("scroll-in"); // Remove the class when out of view
        }
      });
    },
    {
      threshold: 0.2, // Trigger when 20% of the element is visible
    }
  );

  serviceItems.forEach((item) => observer.observe(item));
});

document.addEventListener("DOMContentLoaded", () => {
  const aboutCols = document.querySelectorAll(".about-col-1, .about-col-2");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("scroll-in"); // Add the animation class when in view
        } else {
          entry.target.classList.remove("scroll-in"); // Remove the class when out of view
        }
      });
    },
    {
      threshold: 0.2, // Trigger when 20% of the element is visible
    }
  );

  aboutCols.forEach((col) => observer.observe(col));
});

// Create a map and set its view to a chosen geographical location and zoom level
const map = L.map("map").setView([9.03, 38.74], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([9.03, 38.74])
  .addTo(map)
  .bindPopup("Addis Ababa, Ethiopia.<br> Welcome!")
  .openPopup();

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission

  // Use EmailJS to send the form data
  emailjs.sendForm("service_xb0ng6s", "template_g61nutd", form).then(
    function (response) {
      alert("Send the message through Gmail for double check, Thank you!");
      form.reset(); // Reset the form after submission
    },
    function (error) {
      alert("Failed to send message. Please try again.");
      console.error("EmailJS error:", error);
    }
  );
});
