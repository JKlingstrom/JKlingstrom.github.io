document.addEventListener("DOMContentLoaded", function() {
    const texts = [
        "Digital Forensics Student",
        "I'm a CTF player",
        "Interested in tech"
    ];

    let currentIndex = 0;
    let currentText = "";
    let isDeleting = false;
    let speed = 120; // Speed of typing effect
    let element = document.getElementById("typewriter-text");

    // Adjust font size based on screen width
    function adjustFontSize() {
        if (window.innerWidth <= 480) {
            element.style.fontSize = '0.9rem'; // Smaller font size for small screens
        } else if (window.innerWidth <= 768) {
            element.style.fontSize = '1.2rem'; // Medium font size for tablets
        } else {
            element.style.fontSize = '1.5rem'; // Default font size for larger screens
        }
    }

    // Call adjustFontSize initially and on window resize
    adjustFontSize();
    window.addEventListener('resize', adjustFontSize);

    function type() {
        let fullText = texts[currentIndex];
        
        if (isDeleting) {
            currentText = fullText.substring(0, currentText.length - 1);
            element.innerHTML = currentText;
        } else {
            currentText = fullText.substring(0, currentText.length + 1);
            element.innerHTML = currentText;
        }

        if (!isDeleting && currentText === fullText) {
            setTimeout(() => { isDeleting = true; }, 1500);
        } else if (isDeleting && currentText === "") {
            isDeleting = false;
            currentIndex = (currentIndex + 1) % texts.length;
            setTimeout(() => { type(); }, 500);
            return;
        }

        setTimeout(type, speed);
    }

    function crackEffect() {
        element.style.animation = "crack-effect 0.5s linear";
        setTimeout(() => {
            element.style.animation = "none";
        }, 500);
    }

    function startAnimation() {
        type();
        setInterval(crackEffect, 3000); // Change the interval as needed
    }

    startAnimation();
});
