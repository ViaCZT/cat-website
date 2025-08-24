/*----------------- Release 2.0 -----------------*/

/**
 * In Feedback form, this function is called when the user clicks the submit button.
*/

function mailSubmit() {
    alert("Thank you for your feedback! We will get back to you soon.");
}



/**
 * In Photo Gallery, this function is called when the user clicks on a photo.
*/

// Function to open the lightbox
function openbox() {
    document.getElementById("mybox").style.display = "block";
}

// Function to close the lightbox
function closebox() {
    document.getElementById("mybox").style.display = "none";
}

// Initialize slide index
var slideIndex = 1;
showSlides(slideIndex);

// Function to change slide when clicking prev/next
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Function to change slide when clicking on a thumbnail
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Main function to display slides
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    
    // Ensure that slides and dots elements exist
    if (slides.length === 0 || dots.length === 0 || !captionText) {
        console.warn("Slides or dots elements are missing.");
        return;
    }

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}




/*----------------- Release 3.0 -----------------*/

/*------------- Dark Mode ---------------*/
/**
 * Saves the user's mode selection and applies it when the page loads.
*/

// Function to toggle dark mode and store the preference
function toggleDarkMode() {
    var element = document.body;
    element.classList.toggle("dark");
    localStorage.setItem('darkMode', element.classList.contains("dark"));
    console.log("Dark mode toggled:", element.classList.contains("dark"));
    updateButton();
}

// Function to update the button text based on the current mode
function updateButton() {
    var button = document.getElementById('darkModeToggle');
    if (document.body.classList.contains('dark')) {
        button.textContent = 'Toggle Light Mode';
    } else {
        button.textContent = 'Toggle Dark Mode';
    }
    console.log("Button updated:", button.textContent);
}

// Check localStorage on page load and apply dark mode if needed
window.onload = function() {
    // Check if dark mode is set in localStorage, default to false if not set
    let darkMode = localStorage.getItem('darkMode');
    if (darkMode === null) {
        localStorage.setItem('darkMode', false);
        darkMode = 'false';
    }
    console.log("Page loaded. Dark mode setting:", darkMode);
    if (darkMode === 'true') {
        document.body.classList.add('dark');
        console.log("Dark mode applied");
    } else {
        console.log("Dark mode not applied");
    }
    updateButton();
    showSlides(slideIndex);
}




