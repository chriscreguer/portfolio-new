  // Hamburger Menu
  var hamburger = document.querySelector(".hamburger");
  var navbarMobile = document.querySelector(".overlay-menu");

  hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("is-active");
    navbarMobile.classList.toggle("display-overlay-menu");
    document.documentElement.classList.toggle("disable-overflow");
  });

    // Index Filters



    const indexChipsArray = Array.from(document.getElementById('index-chips').children);
    const allFilter = document.getElementById('all-filter');
    
    for (var i = 0; i < indexChipsArray.length; i++) {
      var indexChip = indexChipsArray[i];
    
      indexChip.addEventListener('click', function (event) {
        event.target.classList.toggle("active");
    
        // Check if either none or all of the nonAllindexChipsArray elements have the class "active"
        const nonAllindexChipsArray = indexChipsArray.slice(0, 5);
        const checkIfNoneOrAllActive =
          nonAllindexChipsArray.every((li) => li.classList.contains("active")) ||
          !nonAllindexChipsArray.some((li) => li.classList.contains("active"));
    
        if (allFilter.classList.contains('active')) {
          allFilter.classList.remove('active');
        }
    
        if (checkIfNoneOrAllActive) {
          for (var j = 1; j < indexChipsArray.length; j++) {
            var chip = indexChipsArray[j];
            chip.classList.remove("active");
          }
          allFilter.classList.toggle("active");
        }
      }, false);
    }
    


allFilter.addEventListener('click', function(){
  if(allFilter.classList.contains('active') === false){
    for (var i = 1; i < indexChipsArray.length; i++) {
      var indexChip = indexChipsArray[i];
          indexChip.classList.remove("active");
      }
  }
  allFilter.classList.toggle("active");
  });


    var hamburger = document.querySelector(".hamburger");
    var navbarMobile = document.querySelector(".overlay-menu");
  
    hamburger.addEventListener("click", function() {
      hamburger.classList.toggle("is-active");
      navbarMobile.classList.toggle("display-overlay-menu");
      document.documentElement.classList.toggle("disable-overflow");
    });

/*
var projectNavList = document.getElementById('project-nav-list');
var projectNavLeft =  document.getElementsByClassName('arrow-left')[0];
var projectNavRight =  document.getElementsByClassName('arrow-right')[0];

projectNavLeft.addEventListener("click", function() {
  projectNavList.scrollBy({
    left: -300,
    behavior: 'smooth'
  });
}
  );

  projectNavRight.addEventListener("click", function() {
    projectNavList.scrollBy({
      left: 300,
      behavior: 'smooth'
    });
  }
    );

    
    var maxScrollLeft = projectNavList.scrollWidth - projectNavList.clientWidth;

    window.addEventListener("resize", hideShowArrows);
    window.addEventListener("load", hideShowArrows);
    projectNavList.addEventListener("scroll", hideShowArrows);
   

    function hideShowArrows(){
     if(projectNavList.clientWidth < projectNavList.scrollWidth){
      projectNavLeft.style.display = "flex";
      projectNavRight.style.display = "flex";

      if(projectNavList.scrollLeft === 0){
        projectNavLeft.style.display = "none";
      }

      else if(projectNavList.scrollLeft > 0){
        projectNavLeft.style.display = "flex";
      }

      if (projectNavList.scrollLeft === (projectNavList.scrollWidth - projectNavList.offsetWidth)){
        projectNavRight.style.display = "none";
      }
      
      }
      
     else if (projectNavList.clientWidth >= projectNavList.scrollWidth){
      projectNavLeft.style.display = "none";
      projectNavRight.style.display = "none";  
     }

    }






const introductionSection = document.getElementById("introduction-section");
const introduction =  document.getElementById("introduction");

const metricsSection = document.getElementById("metrics-section");
const metrics =  document.getElementById("metrics");

const caseOneSection = document.getElementById("caseOne-section");
const caseOne =  document.getElementById("caseOne");

const caseTwoSection = document.getElementById("caseTwo-section");
const caseTwo =  document.getElementById("caseTwo");

const caseThreeSection = document.getElementById("caseThree-section");
const caseThree =  document.getElementById("caseThree");

const caseFourSection = document.getElementById("caseFour-section");
const caseFour =  document.getElementById("caseFour");

const caseFiveSection = document.getElementById("caseFour-section");
const caseFive =  document.getElementById("caseFive");

const projectNavListArray = document.getElementById('project-nav-list').children;

window.onscroll = function(){

  for (let i = 0; i < projectNavListArray.length; i++) {

  var currentSection = document.getElementById(projectNavListArray[i].id + '-section');

    if(i < 1){
      if(currentSection.getBoundingClientRect().top <= 64){
        projectNavListArray[i].classList.add("active");
        var currentNavItem = projectNavList.getElementsByClassName('active')[0];
        var currentNavRect = currentNavItem.getBoundingClientRect();
      
        if( 
         currentNavRect.right < 0) {
          projectNavList.scrollTo(currentNavRect.left, 0);
         }
        else if( currentNavRect.left > (window.innerWidth || document.documentElement.clientWidth)){
          projectNavList.scrollTo(currentNavRect.right, 0);
       }
      }
  
      if(currentSection.getBoundingClientRect().bottom <= 64){
        projectNavListArray[i].classList.remove("active");
      }
    }

    else{

    if(currentSection.getBoundingClientRect().top <= 64){
      projectNavListArray[i].classList.add("active");
      var currentNavItem = projectNavList.getElementsByClassName('active')[0];
      var currentNavRect = currentNavItem.getBoundingClientRect();
    
      if( 
       currentNavRect.right < 0) {
        projectNavList.scrollTo(currentNavRect.left, 0);
       }
      else if( currentNavRect.left > (window.innerWidth || document.documentElement.clientWidth)){
        projectNavList.scrollTo(currentNavRect.right, 0);
     }
    }

    else if(currentSection.getBoundingClientRect().top > 64){
      projectNavListArray[i].classList.remove("active");
    }

    if(currentSection.getBoundingClientRect().bottom <= 64){
      projectNavListArray[i].classList.remove("active");
    }
  }
  }
}*/

// Modal Setup
var modal = document.getElementById('modal');

var modalClose = document.getElementById('modal-close');
modalClose.addEventListener('click', function() { 
  modal.style.display = "none";
});

// global handler
document.addEventListener('click', function (e) { 
  if (e.target.className.indexOf('modal-target') !== -1) {
      var img = e.target;
      var modalImg = document.getElementById("modal-content");
      var captionText = document.getElementById("modal-caption");
      modal.style.display = "block";
      modalImg.src = img.src;
      captionText.innerHTML = img.alt;
   }
});

