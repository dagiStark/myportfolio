import { skills, skills2, projects } from "./assets/constants/index.js";

// skills

const skillsContainer = document.querySelector(".skills-list");

// Create an unordered list
const ul = document.createElement("ul");

// Iterate over skills and create list items
skills.forEach((skill) => {
  const li = document.createElement("li");
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
  const img = document.createElement("img");
  img.src = skill.icon;
  img.alt = "icon";

  const p = document.createElement("p");
  p.textContent = skill.title;

  li.appendChild(img);
  li.appendChild(p);
  ul2.appendChild(li);
});

skillsContainer.appendChild(ul);
skillsContainer.appendChild(ul2);



const projectsContainer = document.querySelector('.work-list');

// Limit to first 6 projects
const firstSixProjects = projects.slice(0, 6);

firstSixProjects.forEach((project) => {
  // Create the main project div
  const projectDiv = document.createElement('div');
  projectDiv.classList.add('work');

  // Create the image element
  const projectImg = document.createElement('img');
  projectImg.src = project.img;
  projectImg.alt = `${project.title} image`;

  // Create the layer div for text and link
  const layerDiv = document.createElement('div');
  layerDiv.classList.add('layer');

  // Create the title
  const projectTitle = document.createElement('h3');
  projectTitle.textContent = project.title;

  // Create the description
  const projectDes = document.createElement('p');
  projectDes.textContent = project.des;

  // Create the link
  const projectLink = document.createElement('a');
  projectLink.href = project.link;
  const arrowIcon = document.createElement('i');
  arrowIcon.classList.add('fa-solid', 'fa-arrow-up-right-from-square');
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



const recentProjectsContainer = document.querySelector('.recent-projects');

// Limit to first 6 projects
const recentProjects = projects.slice(6, 12);

recentProjects.forEach((project) => {
  // Create the main project div
  const projectDiv = document.createElement('div');
  projectDiv.classList.add('work');

  // Create the image element
  const projectImg = document.createElement('img');
  projectImg.src = project.img;
  projectImg.alt = `${project.title} image`;

  // Create the layer div for text and link
  const layerDiv = document.createElement('div');
  layerDiv.classList.add('layer');

  // Create the title
  const projectTitle = document.createElement('h3');
  projectTitle.textContent = project.title;

  // Create the description
  const projectDes = document.createElement('p');
  projectDes.textContent = project.des;

  // Create the link
  const projectLink = document.createElement('a');
  projectLink.href = project.link;
  const arrowIcon = document.createElement('i');
  arrowIcon.classList.add('fa-solid', 'fa-arrow-up-right-from-square');
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




// Create a map and set its view to a chosen geographical location and zoom level
const map = L.map("map").setView([51.505, -0.09], 13);

// Add a tile layer to the map (from OpenStreetMap by default)
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// Add a marker at the same location
L.marker([51.505, -0.09])
  .addTo(map)
  .bindPopup("A pretty popup.<br> Easily customizable.")
  .openPopup();
