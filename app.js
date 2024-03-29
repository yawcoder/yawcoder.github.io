//Navbar
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', () => {
    links.classList.toggle('show-links');
});



//Code for appending recent projects to homepage
const projects = [
    {
        id: 1,
        title: "Hover Effect",
        img: "./images/hover-effect.JPG",
        address: "https://expanding-hover-yawcoder.netlify.app"
    },
    {
        id: 2,
        title: "Price Page With Toggle",
        img: "./images/triple-price.JPG",
        address: "https://price-page-yawcoder.netlify.app/"
    },
    {
        id: 3,
        title: "Reviews",
        img: "./images/reviews.JPG",
        address: "https://reviews-yawcoder.netlify.app"
    },
    {
        id: 4,
        title: "Nav Bar",
        img: "./images/navbar.JPG",
        address: "https://navbar-yawcoder.netlify.app"
    },
    {
        id: 5,
        title: "Accordion/FAQs",
        img: "./images/accordion.JPG",
        address: "https://accordion-yawcoder.netlify.app"
    },
    {
        id: 6,
        title: "Four Card Feature Page",
        img: "/images/four-card-feature.JPG",
        address: "https://four-card-feature-yawcoder.netlify.app"
    },
    {
        id: 7,
        title: "Menu With Filter",
        img: "./images/menu-filter.JPG",
        address: "https://menu-with-filter-yawcoder.netlify.app"
    },
    {
        id: 8,
        title: "Treehouse Clone",
        img: "./images/treehouse.JPG",
        address: "https://treehouse-clone-yawcoder.netlify.app"
    },
    {
        id: 9,
        title: "Color Flicker",
        img: "./images/color-flicker.JPG",
        address: "https://color-flicker-yawcoder.netlify.app/"
    },
    {
        id: 10,
        title: "Gallery Hover",
        img: "./images/gallery-hover.JPG",
        address: "https://gallery-hover-yawcoder.netlify.app/"
    },
    {
        id: 11,
        title: "Counter App",
        img: "./images/counter.JPG",
        address: "https://counter-yawcoder.netlify.app/"
    },
    {
        id: 12,
        title: "Emoji Rating",
        img: "./images/emoji.JPG",
        address: "https://emoji-rating-yawcoder.netlify.app/"
    },
    {
        id: 13,
        title: "Countdown Timer",
        img: "./images/countdown.JPG",
        address: "https://new-year-countdown-yawcoder.netlify.app/"
    },
    {
        id: 14,
        title: "WASSCE Aggregate Calculator",
        img: "./images/aggregate-calculator.JPG",
        address: "https://wassce-aggregate-calculator.netlify.app/"
    }
];

const project1 = document.querySelector('.project-1');
const project2 = document.querySelector('.project-2');
const project3 = document.querySelector('.project-3');
const project4 = document.querySelector('.project-4');
const project5 = document.querySelector('.project-5');
const project6 = document.querySelector('.project-6');

//function for displaying 6 latest projects on homepage
window.addEventListener("DOMContentLoaded", () => {
    let homePageProjects = projects.filter((item) => {
        return item.id > projects.length-6;
    });
     //console.log(homePageProjects);
    project1.innerHTML = `<div class="card"><a href=${homePageProjects[5].address} target="_blank">
                     <img src=${homePageProjects[5].img} alt=${homePageProjects[5].title} class="project-img mb-3">
                     <h5 class="project-title">${homePageProjects[5].title}</h5>
                 </a></div>`;
    project2.innerHTML = `<div class="card"><a href=${homePageProjects[4].address} target="_blank">
                     <img src=${homePageProjects[4].img} alt=${homePageProjects[4].title} class="project-img mb-3">
                     <h5 class="project-title">${homePageProjects[4].title}</h5>
                 </a></div>`;
    project3.innerHTML = `<div class="card"><a href=${homePageProjects[3].address} target="_blank">
                     <img src=${homePageProjects[3].img} alt=${homePageProjects[3].title} class="project-img mb-3">
                     <h5 class="project-title">${homePageProjects[3].title}</h5>
                 </a></div>`;
    project4.innerHTML = `<div class="card"><a href=${homePageProjects[2].address} target="_blank">
                 <img src=${homePageProjects[2].img} alt=${homePageProjects[2].title} class="project-img mb-3">
                 <h5 class="project-title">${homePageProjects[2].title}</h5>
             </a></div>`;
    project5.innerHTML = `<div class="card"><a href=${homePageProjects[1].address} target="_blank">
                 <img src=${homePageProjects[1].img} alt=${homePageProjects[1].title} class="project-img mb-3">
                 <h5 class="project-title">${homePageProjects[1].title}</h5>
             </a></div>`;
    project6.innerHTML = `<div class="card"><a href=${homePageProjects[0].address} target="_blank">
                 <img src=${homePageProjects[0].img} alt=${homePageProjects[0].title} class="project-img mb-3">
                 <h5 class="project-title">${homePageProjects[0].title}</h5>
             </a></div>`;

});



// functions for displaying projects on projects page

const projectsDiv = document.querySelector('.projects-div');

window.addEventListener("DOMContentLoaded", () => {
        displayMenuItems(projects);
    });


function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function (item) {
      //console.log(item);
  
      return `<div class=col-md-4><a href=${item.address} target="_blank" class="card">
                <img src=${item.img} alt=${item.title} class="project-img mb-3">
                <h5 class="project-title">${item.title}</h5>
            </a></div>`;
    });
     displayMenu = displayMenu.join("");
     projectsDiv.innerHTML = displayMenu;
  };
