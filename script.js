// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animate USP items on scroll
document.addEventListener('scroll', function() {
    const uspItems = document.querySelectorAll('.usp-item');
    const viewportHeight = window.innerHeight;
    
    uspItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        if (rect.top < viewportHeight * 0.75) {
            item.classList.add('visible');
        }
    });
});

// Initialize map (optional, add Google Maps or similar)
function initMap() {
    const mapOptions = {
        zoom: 15,
        center: { lat: -34.397, lng: 150.644 } // Replace with your coordinates
    };
    const map = new google.maps.Map(document.getElementById("map"), mapOptions);
}

document.addEventListener('DOMContentLoaded', function() {
    if (typeof google !== 'undefined') {
        initMap();
    }
});
