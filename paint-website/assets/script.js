// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------
// Home-Page
// --------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------
// Navbar
// --------------------------------------------------------------------------------------
// Navlink Activate
function setCurrentPageLinkActive() {
  const navLinks = document.getElementsByClassName("nav-link");
  const currentURL = window.location.href;

  for (let i = 0; i < navLinks.length; i++) {
    const linkURL = navLinks[i].getAttribute("href");
    console.log(linkURL);
    if (linkURL !== "#" && currentURL.includes(linkURL)) {
      navLinks[i].classList.add("active");
      break;
    }
  }
}

setCurrentPageLinkActive();

// Search-bar Toggle
const searchIconWrapper = document.querySelector(".search-icon-wrapper");
const dropdownMenus = document.querySelectorAll(".dropdown-menu");
const searchInput = document.querySelector(".ba-searchbar");
const navbarLinks = document.querySelectorAll(".navbar-links");

function hideDropdownMenus() {
  dropdownMenus.forEach((menu) => {
    menu.style.display = "none";
  });
}

function hideLinks() {
  navbarLinks.forEach((link) => {
    link.style.display = "none";
  });
}

function showLinks() {
  navbarLinks.forEach((link) => {
    link.style.display = "inline";
  });
}

function toggleSearchBox(event) {
  event.preventDefault(); // Prevent the default click action
  const isSearchVisible = searchInput.style.display === "block";
  if (isSearchVisible) {
    searchInput.style.display = "none";
    showLinks();
  } else {
    hideDropdownMenus();
    searchIconWrapper.style.display = "none";
    searchInput.style.display = "block";
    hideLinks();
  }
}

function hideSearchBoxIfClickedOutside(event) {
  const target = event.target;
  if (!searchIconWrapper.contains(target) && target !== searchInput) {
    searchInput.style.display = "none";
    searchIconWrapper.style.display = "inline";
    showLinks();
  }
}

searchIconWrapper.addEventListener("click", toggleSearchBox);
document.addEventListener("click", hideSearchBoxIfClickedOutside);

// search suggestion mobile
document.addEventListener("DOMContentLoaded", function () {
  const mblsearchBarInput = document.querySelector(".search-input");
  const mblresultContainer = document.querySelector(".mbl-result");

  // Debug: Verify if the elements are selected correctly
  console.log(mblsearchBarInput);
  console.log(mblresultContainer);

  // Hide the result container by default using inline CSS
  mblresultContainer.style.display = "none";

  mblsearchBarInput.addEventListener("focus", () => {
    if (mblsearchBarInput.value.trim() !== "") {
      showResultContainer();
    }
  });

  mblsearchBarInput.addEventListener("blur", () => {
    hideResultContainer();
  });

  mblsearchBarInput.addEventListener("input", () => {
    if (mblsearchBarInput.value.trim() !== "") {
      showResultContainer();
    } else {
      hideResultContainer();
    }
  });

  function showResultContainer() {
    mblresultContainer.style.display = "block";
  }

  function hideResultContainer() {
    mblresultContainer.style.display = "none";
  }
});

// search suggestion desktop
document.addEventListener("DOMContentLoaded", function () {
  const searchBarInput = document.querySelector(".ba-searchbar");
  const resultContainer = document.querySelector(".result-container");

  // Debug: Verify if the elements are selected correctly
  console.log(searchBarInput);
  console.log(resultContainer);

  // Hide the result container by default using inline CSS
  resultContainer.style.display = "none";

  searchBarInput.addEventListener("focus", () => {
    if (searchBarInput.value.trim() !== "") {
      showResultContainer();
    }
  });

  searchBarInput.addEventListener("blur", () => {
    hideResultContainer();
  });

  searchBarInput.addEventListener("input", () => {
    if (searchBarInput.value.trim() !== "") {
      showResultContainer();
    } else {
      hideResultContainer();
    }
  });

  function showResultContainer() {
    resultContainer.style.display = "block";
  }

  function hideResultContainer() {
    resultContainer.style.display = "none";
  }
});

// Navbar Color & Menu Toggle
document.addEventListener("DOMContentLoaded", function () {
  const bannerHeight = document.getElementById(
    "carouselExampleIndicators"
  ).offsetHeight;
  const navbar = document.getElementById("navbar");
  const navShow = document.getElementsByClassName("nav-show");
  const navHide = document.getElementsByClassName("nav-hide");
  const navlinks = document.getElementsByClassName("nav-link");
  const mobileMenuButton = document.getElementsByClassName("navbar-toggler")[0];
  const navOpen = document.getElementById("navOpen");
  const navClose = document.getElementById("navClose");

  // For All Pages //
  function toggleMenu() {
    if (mobileMenuButton.getAttribute("aria-expanded") === "true") {
      navOpen.classList.remove("nav-show");
      navOpen.classList.add("nav-hide");
      navClose.style.display = "inline";
    } else {
      navOpen.classList.remove("nav-hide");
      navOpen.classList.add("nav-show");
      navClose.style.display = "none";
    }
  }

  // For Homepage //
  function updateNavbarBackground() {
    if (mobileMenuButton.getAttribute("aria-expanded") === "true") {
      navOpen.classList.remove("nav-show");
      navOpen.classList.add("nav-hide");
      navClose.style.display = "inline";
      navbar.style.transition = "background-color 0s ease";
    } else {
      navOpen.classList.remove("nav-hide");
      navOpen.classList.add("nav-show");
      navClose.style.display = "none";
      navbar.style.transition = "background-color 0.5s ease";
    }

    if (
      window.scrollY > bannerHeight ||
      mobileMenuButton.getAttribute("aria-expanded") === "true"
    ) {
      navbar.style.backgroundColor = "white";
      navbar.style.position = "fixed";

      for (let i = 0; i < navHide.length; i++) {
        navHide[i].style.display = "none";
      }
      for (let i = 0; i < navShow.length; i++) {
        navShow[i].style.display = "inline";
      }
      for (let i = 0; i < navlinks.length; i++) {
        navlinks[i].style.color = "var(--neutral-neutral-500, #6b7280)";

        // Add hover effect using JavaScript
        navlinks[i].addEventListener("mouseover", function () {
          this.style.color = "var(--orange-300, #b96e1d)";
        });

        navlinks[i].addEventListener("mouseout", function () {
          this.style.color = "var(--neutral-neutral-500, #6b7280)";
        });
      }
    } else {
      navbar.style.backgroundColor = "transparent";
      navbar.style.position = "fixed";

      for (let i = 0; i < navHide.length; i++) {
        navHide[i].style.display = "inline";
      }
      for (let i = 0; i < navShow.length; i++) {
        navShow[i].style.display = "none";
      }
      for (let i = 0; i < navlinks.length; i++) {
        navlinks[i].style.color = "var(--neutral-neutral-300, #D1D5DB)";

        // Add hover effect using JavaScript
        navlinks[i].addEventListener("mouseover", function () {
          this.style.color = "var(--orange-300, #b96e1d)";
        });

        navlinks[i].addEventListener("mouseout", function () {
          this.style.color = "var(--neutral-neutral-500, #D1D5DB)";
        });
      }
    }
  }

  // For All Pages //

  toggleMenu();
  mobileMenuButton.addEventListener("click", function () {
    toggleMenu();
  });

  // For Homepage //

  // updateNavbarBackground();
  // window.addEventListener("scroll", updateNavbarBackground);
  // mobileMenuButton.addEventListener("click", function () {
  //   updateNavbarBackground();
  // });
});

//------------------------------------------------------------------------------------
// Carousel
// --------------------------------------------------------------------------------------

// Wait for the document to load
$(document).ready(function () {
  // Check the screen size on window load and resize
  $(window).on("load resize", function () {
    checkScreenSize();
  });

  // Function to check the screen size and initialize the carousel accordingly
  function checkScreenSize() {
    if (window.innerWidth >= 768) {
      // Initialize the carousel with sliding properties
      $("#carouselExampleIndicators").carousel({
        interval: 5000, // Slide every 5 seconds
        ride: true, // Enable sliding
      });
    } else {
      // Disable sliding for smaller screens
      $("#carouselExampleIndicators").carousel("dispose");
    }
  }
});

// ------------------------------------------------------------------------------------
// Form1 - Section
// --------------------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const inputContainers = document.querySelectorAll(".form1-inputcontainer");
  inputContainers.forEach(function (container) {
    const input = container.querySelector("input");
    const label = container.querySelector("label");

    input.addEventListener("focus", function () {
      label.style.top = "0px";
      label.style.left = "10px";
      label.style.fontSize = "12px";
      label.style.color = "#000";
      label.style.backgroundColor = "#fff";
      label.style.paddingLeft = "5px";
      label.style.paddingRight = "5px";
    });

    input.addEventListener("blur", function () {
      if (input.value === "") {
        label.style.top = "50%";
        label.style.left = "10px";
        label.style.fontSize = "";
        label.style.color = "";
      }
    });

    if (input.value !== "") {
      label.style.top = "-20px";
      label.style.left = "10px";
      label.style.fontSize = "12px";
      label.style.color = "#888";
    }
  });
});

$(document).ready(function () {
  // Function to handle the change event for the dropdowns
  function handleDropdownChange(dropdownId) {
    const dropdown = $(`#${dropdownId}`);
    const selectedOption = dropdown.val();

    // Reset styles for the default option
    dropdown.css("color", "gray");

    // Apply styles for the selected option (not default)
    if (
      selectedOption !== "I am" &&
      selectedOption !== "Need help with" &&
      selectedOption !== null
    ) {
      dropdown.css("color", "#b96e1d");
    }
  }

  // Event listeners for the dropdowns
  $("#roleSelect").change(function () {
    handleDropdownChange("roleSelect");
  });

  $("#helpSelect").change(function () {
    handleDropdownChange("helpSelect");
  });
});

// ------------------------------------------------------------------------------------
// Blog - Section
// --------------------------------------------------------------------------------------
window.addEventListener("DOMContentLoaded", function () {
  // Get the links
  const trendsLink = document.getElementById("trends-btn");
  const inspirationsLink = document.getElementById("inspirations-btn");
  const solutionsLink = document.getElementById("solutions-btn");

  // Get the sections
  const trendsSection = document.getElementById("trends");
  const inspirationsSection = document.getElementById("inspirations");
  const solutionsSection = document.getElementById("solutions");

  // Hide solutions and trends sections initially
  inspirationsSection.style.display = "none";
  solutionsSection.style.display = "none";

  // Function to remove the active class from all links
  function removeActiveClassFromLinks() {
    inspirationsLink.classList.remove("active");
    solutionsLink.classList.remove("active");
    trendsLink.classList.remove("active");
  }

  // Click event handler for solutions link
  solutionsLink.addEventListener("click", function (event) {
    event.preventDefault();
    inspirationsSection.style.display = "none";
    solutionsSection.style.display = "block";
    trendsSection.style.display = "none";

    // Update the active state of the links
    removeActiveClassFromLinks();
    solutionsLink.classList.add("active");
  });

  // Click event handler for trends link
  trendsLink.addEventListener("click", function (event) {
    event.preventDefault();
    inspirationsSection.style.display = "none";
    solutionsSection.style.display = "none";
    trendsSection.style.display = "block";

    // Update the active state of the links
    removeActiveClassFromLinks();
    trendsLink.classList.add("active");
  });

  // Click event handler for inspirations link
  inspirationsLink.addEventListener("click", function (event) {
    event.preventDefault();
    inspirationsSection.style.display = "block";
    solutionsSection.style.display = "none";
    trendsSection.style.display = "none";

    // Update the active state of the links
    removeActiveClassFromLinks();
    inspirationsLink.classList.add("active");
  });
});

// ------------------------------------------------------------------------------------
// Blog - Section
// --------------------------------------------------------------------------------------

$("#inspirations, #solutions, #trends").owlCarousel({
  loop: false,
  margin: 20,
  nav: true,
  dots: false,
  autoplay: false,
  responsive: {
    0: {
      items: 1.2,
      margin: 20,
    },
    500: {
      items: 2.2,
      margin: 20,
    },
    1000: {
      items: 3,
      margin: 60,
    },
  },
  navText: [
    '<img src="assets/images/left-button.png" alt="Prev">',
    '<img src="assets/images/right-button.png" alt="Next">',
  ], // Add the image tags for custom icons
});

// ------------------------------------------------------------------------------------
// Product - Section
// --------------------------------------------------------------------------------------

$("#product").owlCarousel({
  loop: false,
  margin: 5,
  nav: true,
  dots: false,
  autoplay: false,
  responsive: {
    0: { items: 1.05 },
    400: { items: 1.25 },
    500: { items: 1.5 },
    600: { items: 1.75 },
    700: { items: 2.0 },
    800: { items: 2.25 },
    900: { items: 2.5 },
    1000: { items: 2.75 },
    1100: { items: 3.0 },
    1200: { items: 3.25 },
    1300: { items: 3.5 },
    1400: { items: 3.75 },
    1500: { items: 4.0 },
  },
  navText: [
    '<img src="assets/images/product-left-arrow.png" alt="Prev">',
    '<img src="assets/images/product-right-arrow.png" alt="Next">',
  ], // Add the image tags for custom icons
});

// ------------------------------------------------------------------------------------
// Assistance - Section
// --------------------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const inputContainers = document.querySelectorAll(
    ".assistance-inputcontainer"
  );

  inputContainers.forEach(function (container) {
    const input = container.querySelector("input, textarea");
    const label = container.querySelector("label");

    function setLabelStyles() {
      label.style.top = "0px";
      label.style.left = "10px";
      label.style.fontSize = "12px";
      label.style.color = "#000";
      label.style.backgroundColor = "#fff";
      label.style.paddingLeft = "5px";
      label.style.paddingRight = "5px";
      label.style.zIndex = "1";
    }

    function resetLabelStyles() {
      if (input.value === "") {
        label.style.top = "50%";
        label.style.left = "10px";
        label.style.fontSize = "";
        label.style.color = "";
        label.style.backgroundColor = "";
        label.style.paddingLeft = "";
        label.style.paddingRight = "";
        label.style.zIndex = "";
      }
    }

    input.addEventListener("focus", setLabelStyles);
    input.addEventListener("blur", resetLabelStyles);

    if (input.value !== "") {
      setLabelStyles();
      label.style.color = "#888";
    }
  });
});

// dropdown //

$(document).ready(function () {
  // Function to handle the change event for the dropdowns
  function handleDropdownChange(dropdownId) {
    const dropdown = $(`#${dropdownId}`);
    const selectedOption = dropdown.val();

    // Reset styles for the default option
    dropdown.css("color", "gray");

    // Apply styles for the selected option (not default)
    if (
      selectedOption !== "I am" &&
      selectedOption !== "Need help with" &&
      selectedOption !== null
    ) {
      dropdown.css("color", "#b96e1d");
    }
  }

  // Event listeners for the dropdowns
  $("#roleSelect1").change(function () {
    handleDropdownChange("roleSelect1");
  });

  $("#helpSelect1").change(function () {
    handleDropdownChange("helpSelect1");
  });
});

// ------------------------------------------------------------------------------------
// Expert - Section
// --------------------------------------------------------------------------------------
function activateArticle(article) {
  // Remove the "active" class from all expert articles
  const expertArticles = document.querySelectorAll(".expertarticle");
  expertArticles.forEach((article) => article.classList.remove("active"));

  // If article is provided, set it as active
  if (article) {
    article.classList.add("active");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const expertArticles = document.querySelectorAll(".expertarticle");
  const container = document.querySelector(".expertcontainer");

  // Add event listeners for mouseover and mouseout on each card
  expertArticles.forEach((expertArticle) => {
    expertArticle.addEventListener("mouseover", () => {
      activateArticle(expertArticle); // Set the current card as active
    });

    expertArticle.addEventListener("mouseout", () => {
      activateArticle(expertArticles[0]); // Activate the first card by default
    });
  });

  // Activate the first card by default
  activateArticle(expertArticles[0]);
});
// ------------------------------------------------------------------------------------
// Expert - Section
// --------------------------------------------------------------------------------------

$("#expert").owlCarousel({
  loop: false,
  margin: 15,
  nav: false,
  dots: false,
  autoplay: false,
  responsive: {
    0: { items: 1.2 },
    400: { items: 1.5 },
    600: { items: 2.0 },
    800: { items: 2.5 },
    1000: { items: 3.0 },
  },
});

// ------------------------------------------------------------------------------------
// Testimonials - Section
// --------------------------------------------------------------------------------------

$("#testimonials").owlCarousel({
  loop: true,
  margin: 20,
  nav: false,
  dots: true,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
      stagePadding: 390,
    },
  },
  navText: [
    '<img src="assets/images/left-button.png" alt="Prev">',
    '<img src="assets/images/right-button.png" alt="Next">',
  ], // Add the image tags for custom icons
});

// ------------------------------------------------------------------------------------
// Form2 - Section
// --------------------------------------------------------------------------------------
$(document).ready(function () {
  // Function to handle the change event for the dropdowns
  function handleDropdownChange(dropdownId) {
    const dropdown = $(`#${dropdownId}`);
    const selectedOption = dropdown.val();

    // Reset styles for the default option
    dropdown.css("color", "gray");

    // Apply styles for the selected option (not default)
    if (
      selectedOption !== "My Background" &&
      selectedOption !== "I need help with" &&
      selectedOption !== null
    ) {
      dropdown.css("color", "#b96e1d");
    }
  }

  // Event listeners for the dropdowns
  $("#identity").change(function () {
    handleDropdownChange("identity");
  });

  $("#purpose").change(function () {
    handleDropdownChange("purpose");
  });
});

// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------
// About-Page
// --------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------
// Navbar - Section
// --------------------------------------------------------------------------------------

// homepage

// ------------------------------------------------------------------------------------
// Values - Section
// --------------------------------------------------------------------------------------

$(document).ready(function () {
  $(".value-link a").click(function (e) {
    e.preventDefault();
    var target = $(this).attr("href");
    $(".value-card").removeClass("active");
    $(target).addClass("active");
    $(".value-link a").removeClass("active");
    $(this).addClass("active");
  });
});

$(document).ready(function () {
  // Add 'active' class to the default section and link
  $("#mission").addClass("active");
  $(".value-link a[href='#mission']").addClass("active");

  $(".value-link a").click(function (e) {
    e.preventDefault();
    var target = $(this).attr("href");
    $(".value-card").removeClass("active");
    $(target).addClass("active");
    $(".value-link a").removeClass("active");
    $(this).addClass("active");
  });
});

// ------------------------------------------------------------------------------------
// Partner - Section
// --------------------------------------------------------------------------------------

$("#partner").owlCarousel({
  loop: false,
  margin: 20,
  nav: false,
  dots: false,
  autoplay: false,
  responsive: {
    0: { items: 1.2 },
    500: { items: 1.4 },
    550: { items: 1.6 },
    600: { items: 1.8 },
    650: { items: 2.0 },
    700: { items: 2.2 },
    750: { items: 2.4 },
    800: { items: 2.8 },
    850: { items: 3.0 },
    900: { items: 3.2 },
    950: { items: 3.4 },
    1000: { items: 3.6 },
    1050: { items: 3.8 },
    1100: { items: 4.0 },
  },
  navText: ['<img src="1.jpg" alt="Prev">', '<img src="2.jpg" alt="Next">'], // Add the image tags for custom icons
});

// ------------------------------------------------------------------------------------
// Form2 - Section
// --------------------------------------------------------------------------------------

// homepage

// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------
// Product-Listing-Page
// --------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------
// Navbar - Section
// --------------------------------------------------------------------------------------

// homepage

// ------------------------------------------------------------------------------------
// Form1 - Section
// --------------------------------------------------------------------------------------

// homepage

// ------------------------------------------------------------------------------------
// Testimonials - Section
// --------------------------------------------------------------------------------------

// homepage

// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------
// Product-Details-Page
// --------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------
// Navbar - Section
// --------------------------------------------------------------------------------------

// homepage

// ------------------------------------------------------------------------------------
// ProductForm - Section
// --------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  const inputContainers = document.querySelectorAll(".pdform-inputcontainer");
  inputContainers.forEach(function (container) {
    const input = container.querySelector("input");
    const label = container.querySelector("label");

    input.addEventListener("focus", function () {
      label.style.top = "0px";
      label.style.left = "10px";
      label.style.fontSize = "12px";
      label.style.color = "#000";
      label.style.background =
        "linear-gradient(to top, white 50%, var(--brown-0, #FFF9F5) 50%)";
      label.style.paddingLeft = "5px";
      label.style.paddingRight = "5px";
    });

    input.addEventListener("blur", function () {
      if (input.value === "") {
        label.style.top = "50%";
        label.style.left = "10px";
        label.style.fontSize = "";
        label.style.color = "";
        label.style.background = "linear-gradient(to top, #fff 50%, #fff 50%)";
      }
    });

    if (input.value !== "") {
      label.style.top = "-20px";
      label.style.left = "10px";
      label.style.fontSize = "12px";
      label.style.color = "#888";
    }
  });
});

$(document).ready(function () {
  // Function to handle the change event for the dropdowns
  function handleDropdownChange(dropdownId) {
    const dropdown = $(`#${dropdownId}`);
    const selectedOption = dropdown.val();

    // Reset styles for the default option
    dropdown.css("color", "gray");

    // Apply styles for the selected option (not default)
    if (selectedOption !== "Services" && selectedOption !== null) {
      dropdown.css("color", "#b96e1d");
    }
  }

  // Event listeners for the dropdowns
  $("#service").change(function () {
    handleDropdownChange("service");
  });
});

// ------------------------------------------------------------------------------------
// Select - Section
// --------------------------------------------------------------------------------------
const buttons = document.querySelectorAll(".aw-prodSlide-button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
  });
});

// ------------------------------------------------------------------------------------
// Features - Section
// --------------------------------------------------------------------------------------
$("#features").owlCarousel({
  loop: false,
  margin: 15,
  nav: false,
  dots: false,
  autoplay: false,
  responsive: {
    0: { items: 1.3 },
    400: { items: 1.6 },
    500: { items: 2.0 },
    750: { items: 2.5 },
    800: { items: 3.0 },
    1000: { items: 3.5 },
    1200: { items: 4.0 },
  },
});

// ------------------------------------------------------------------------------------
// FAQs - Section
// --------------------------------------------------------------------------------------

function toggleAnswer(faqNumber) {
  const faqItem = document.querySelector(`#answer${faqNumber}`).parentElement;
  faqItem.classList.toggle("active");
}

// ------------------------------------------------------------------------------------
// Testimonials - Section
// --------------------------------------------------------------------------------------

// homepage

// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------
// Blog-Listing-Page
// --------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------
// Navbar - Section
// --------------------------------------------------------------------------------------

// homepage

// ----------------------------------------------------------------------------------------------
// tab links
// ---------------------------------------------------------------------------------

// Get all the links with class 'ba-links'

const links = document.querySelectorAll(".ba-links");

// Add click event listener to each link
links.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent the default behavior of anchor tags

    // Remove 'active' class from all links
    links.forEach((link) => link.classList.remove("active"));

    // Add 'active' class to the clicked link
    link.classList.add("active");
  });
});

// window.addEventListener("DOMContentLoaded", function () {

window.addEventListener("DOMContentLoaded", function () {
  // Get the links
  const trendsLink = document.getElementById("trends-blogs-btn");
  const inspirationsLink = document.getElementById("inspirations-blogs-btn");
  const solutionsLink = document.getElementById("solutions-blogs-btn");

  // Get the sections
  const trendsSection = document.getElementById("trends-blogs");
  const inspirationsSection = document.getElementById("inspirations-blogs");
  const solutionsSection = document.getElementById("solutions-blogs");

  // Hide solutions and trends sections initially
  inspirationsSection.style.display = "none";
  solutionsSection.style.display = "none";

  // Function to remove the active class from all links
  function removeActiveClassFromLinks() {
    inspirationsLink.classList.remove("active");
    solutionsLink.classList.remove("active");
    trendsLink.classList.remove("active");
  }

  // Click event handler for trends link
  trendsLink.addEventListener("click", function (event) {
    event.preventDefault();
    inspirationsSection.style.display = "none";
    solutionsSection.style.display = "none";
    trendsSection.style.display = "block";

    // Update the active state of the links
    removeActiveClassFromLinks();
    trendsLink.classList.add("active");

    // Call the showData function for trends-blogs
    currentPage = 1;
    showData1(currentPage, "trends-blogs");
    generatePagination();
  });

  // Click event handler for inspirations link
  inspirationsLink.addEventListener("click", function (event) {
    event.preventDefault();
    inspirationsSection.style.display = "block";
    solutionsSection.style.display = "none";
    trendsSection.style.display = "none";

    // Update the active state of the links
    removeActiveClassFromLinks();
    inspirationsLink.classList.add("active");

    // Call the showData function for inspirations-blogs
    currentPage = 1;
    showData2(currentPage, "inspirations-blogs");
    generatePagination();
  });

  // Click event handler for solutions link
  solutionsLink.addEventListener("click", function (event) {
    event.preventDefault();
    inspirationsSection.style.display = "none";
    solutionsSection.style.display = "block";
    trendsSection.style.display = "none";

    // Update the active state of the links
    removeActiveClassFromLinks();
    solutionsLink.classList.add("active");

    // Call the showData function for solutions-blogs
    currentPage = 1;
    showData3(currentPage, "solutions-blogs");
    generatePagination();
  });
});

//------------------------------------------------------------------------------------
// Pagination
// --------------------------------------------------------------------------------------

const totalPages = 10; // Change this to the actual total number of pages
const itemsPerPage = 9;
let currentPage = 1;

function showData1(page, sectionId) {
  const section = document.getElementById("trends-blogs");
  const rows = section.querySelectorAll(".ba-data-row");

  rows.forEach((row, index) => {
    if (index === page - 1) {
      row.style.display = "flex";
    } else {
      row.style.display = "none";
    }
  });
}
function showData2(page, sectionId) {
  const section = document.getElementById("inspirations-blogs");
  const rows = section.querySelectorAll(".ba-data-row");

  rows.forEach((row, index) => {
    if (index === page - 1) {
      row.style.display = "flex";
    } else {
      row.style.display = "none";
    }
  });
}
function showData3(page, sectionId) {
  const section = document.getElementById("solutions-blogs");
  const rows = section.querySelectorAll(".ba-data-row");

  rows.forEach((row, index) => {
    if (index === page - 1) {
      row.style.display = "flex";
    } else {
      row.style.display = "none";
    }
  });
}

function changePage(page) {
  currentPage = page;
  showData1(currentPage);
  showData2(currentPage);
  showData3(currentPage);
  generatePagination(); // Update pagination when page changes
}

function generatePagination() {
  const pagination = document.getElementById("pagination");
  let paginationHTML = "";

  if (currentPage === 1) {
    // Disable previous arrow on the first page
    paginationHTML += `<li><span class="arrow">&laquo;</span></li>`;
  } else {
    paginationHTML += `<li><a href="#" class="arrow" onclick="changePage(${
      currentPage - 1
    })">&laquo;</a></li>`;
  }

  if (currentPage > 2) {
    paginationHTML += `<li><a href="#" onclick="changePage(1)">1</a></li>`;
    if (currentPage > 3) {
      paginationHTML += `<li class="ellipsis">...</li>`;
    }
  }

  if (currentPage > 1) {
    paginationHTML += `<li><a href="#" onclick="changePage(${
      currentPage - 1
    })">${currentPage - 1}</a></li>`;
  }

  paginationHTML += `<li class="active"><a href="#" onclick="changePage(${currentPage})">${currentPage}</a></li>`;

  if (currentPage < totalPages) {
    paginationHTML += `<li><a href="#" onclick="changePage(${
      currentPage + 1
    })">${currentPage + 1}</a></li>`;
  }

  if (currentPage < totalPages - 1) {
    if (currentPage < totalPages - 2) {
      paginationHTML += `<li class="ellipsis">...</li>`;
    }
    paginationHTML += `<li><a href="#" onclick="changePage(${totalPages})">${totalPages}</a></li>`;
  }

  if (currentPage === totalPages) {
    // Disable next arrow on the last page
    paginationHTML += `<li><span class="arrow">&raquo;</span></li>`;
  } else {
    paginationHTML += `<li><a href="#" class="arrow" onclick="changePage(${
      currentPage + 1
    })">&raquo;</a></li>`;
  }
  pagination.innerHTML = paginationHTML;
}

// These 4 line should be in the end of the js file
// generatePagination();
// showData1(currentPage);
// showData2(currentPage);
// showData3(currentPage);

// ------------------------------------------------------------------------------------
// Form2 - Section
// --------------------------------------------------------------------------------------

// homepage

// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------
// Blog-Details-Page
// --------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------
// Navbar - Section
// --------------------------------------------------------------------------------------

// homepage

// ------------------------------------------------------------------------------------
// Assistance - Section
// --------------------------------------------------------------------------------------

// homepage

// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------
// Contact-Page
// --------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------
// Navbar - Section
// --------------------------------------------------------------------------------------

// homepage

// ------------------------------------------------------------------------------------
// Form2 - Section
// --------------------------------------------------------------------------------------

// homepage

// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------
// Faq-Page
// --------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------
// Navbar - Section
// --------------------------------------------------------------------------------------

// homepage

// ------------------------------------------------------------------------------------
// FAQs - Section
// --------------------------------------------------------------------------------------

// Wrap your existing toggleAnswer function inside a check for screen width
function toggleAnswer1(index) {
  if (window.innerWidth >= 768) {
    const answerElement = document.getElementById(`faq-answer${index}`);
    answerElement.classList.toggle("show-answer");
  }
}

// Add an event listener to window.resize to re-evaluate the toggleAnswer function when the window is resized
window.addEventListener("resize", () => {
  // Re-evaluate the toggleAnswer function on window resize
  const faqItems = document.querySelectorAll(".faq-page-item");
  faqItems.forEach((item, index) => {
    if (window.innerWidth >= 768) {
      item.addEventListener("click", () => toggleAnswer1(index + 1));
    } else {
      // Remove the click event listener on smaller screens
      item.removeEventListener("click", () => toggleAnswer1(index + 1));
    }
  });
});

// Call the event listener once on page load to set the initial state based on the screen size
window.addEventListener("load", () => {
  // Set the first FAQ item to be open by default
  const defaultIndex = 1;
  const defaultAnswerElement = document.getElementById(
    `faq-answer${defaultIndex}`
  );
  defaultAnswerElement.classList.add("show-answer");
});

// Trigger the resize event on page load to initialize the toggle behavior
window.dispatchEvent(new Event("resize"));

// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------
// Policy-Page
// --------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------
// Navbar - Section
// --------------------------------------------------------------------------------------

// homepage

// ------------------------------------------------------------------------------------
// Pagination
// These 4 line should be in the end of the js file
generatePagination();
showData1(currentPage);
showData2(currentPage);
showData3(currentPage);
// --------------------------------------------------------------------------------------
