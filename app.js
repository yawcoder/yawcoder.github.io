//Navbar
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', () => {
   /*if(!links.classList.contains('show-links')){
        links.classList.add('show-links');
    }else{
        links.classList.remove('show-links');
    }*/
    links.classList.toggle('show-links');
});




const projects = [
    {
        id: 1,
        title: "Hover Effect",
        img: "./images/hover-effect.JPG",
        address: "https://expanding-hover-yawcoder.netlify.app"
    },
    {
        id: 2,
        title: "Triple Price Page",
        img: "./images/triple-price.JPG",
        address: "https://triple-price-yawcoder.netlify.app"
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
    }
];

const project1 = document.querySelector('.project-1');
const project2 = document.querySelector('.project-2');
const project3 = document.querySelector('.project-3');

window.addEventListener("DOMContentLoaded", () => {
    project1.innerHTML = displayHomeProjects(projects, 1);
});

function displayHomeProjects(arr, num){

    return `<a href=${arr[num].address} target="_blank" class="col-md-4 card">
                <img src=${arr[num].img} alt=${ar[num].title} class="project-img mb-3">
                <h5 class="project-title">${arr[num].title}</h5>
            </a>`
    
}



// functions for displaying projects on website

const projectsDiv = document.querySelector('.projects-div');

window.addEventListener("DOMContentLoaded", function () {
        displayMenuItems(projects)
    });


function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function (item) {
      //console.log(item);
  
      return `<a href=${item.address} target="_blank" class="col-md-4 card">
                <img src=${item.img} alt=${item.title} class="project-img mb-3">
                <h5 class="project-title">${item.title}</h5>
            </a>`;
    });
     displayMenu = displayMenu.join("");
     projectsDiv.innerHTML = displayMenu;
  };
