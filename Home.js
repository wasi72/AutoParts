function showCategory(category, type) {
  var i, tabcontent, tablinks;

  // Determine which set of tabs to manage
  if (type === 'tab') {
      // Handle tabs for "Our top collections"
      tabcontent = document.getElementsByClassName("tab-content");
      tablinks = document.getElementsByClassName("tab-link");
  } else if (type === 'custom') {
      // Handle tabs for "Best sellers"
      tabcontent = document.getElementsByClassName("custom-tab-content");
      tablinks = document.getElementsByClassName("custom-tab");
  }

  // Hide all tab contents
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].classList.remove("active");
  }

  // Remove the active class from all tab links
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
  }

  // Show the current tab and add the active class
  document.getElementById(category).classList.add("active");
  event.currentTarget.classList.add("active");
}











// Set the countdown timer
function countdown() {
    const countdownDate = new Date().getTime() + (2 * 24 * 60 * 60 * 1000); 
  
    const interval = setInterval(function() {
      const now = new Date().getTime();
      const distance = countdownDate - now;
  
      // Time calculations for days, hours, minutes, and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      // Output the result
      document.getElementById("days").innerText = days;
      document.getElementById("hours").innerText = hours;
      document.getElementById("minutes").innerText = minutes;
      document.getElementById("seconds").innerText = seconds;
  
      // If the countdown is over
      if (distance < 0) {
        clearInterval(interval);
        document.querySelector('.timer').innerHTML = "Offer Expired";
      }
    }, 1000);
  }
  
  countdown();
  

  // Function to show the small image with smooth transition
function showImage(id) {
  const image = document.getElementById(id);
  image.style.opacity = '1';
  image.style.transform = 'scale(1.1)'; // Slight zoom effect on hover
}

// Function to hide the small image with smooth transition
function hideImage(id) {
  const image = document.getElementById(id);
  image.style.opacity = '0';
  image.style.transform = 'scale(1)'; // Return to original size
}

// Hover functionality for dot 1
document.getElementById("dot1").addEventListener("mouseover", function() {
  showImage("image1");
});
document.getElementById("dot1").addEventListener("mouseout", function() {
  hideImage("image1");
});

// Hover functionality for dot 2
document.getElementById("dot2").addEventListener("mouseover", function() {
  showImage("image2");
});
document.getElementById("dot2").addEventListener("mouseout", function() {
  hideImage("image2");
});

// Hover functionality for dot 3
document.getElementById("dot3").addEventListener("mouseover", function() {
  showImage("image3");
});
document.getElementById("dot3").addEventListener("mouseout", function() {
  hideImage("image3");
});

// Hover functionality for dot 4
document.getElementById("dot4").addEventListener("mouseover", function() {
  showImage("image4");
});
document.getElementById("dot4").addEventListener("mouseout", function() {
  hideImage("image4");
});

// Hover functionality for dot 5
document.getElementById("dot5").addEventListener("mouseover", function() {
  showImage("image5");
});
document.getElementById("dot5").addEventListener("mouseout", function() {
  hideImage("image5");
});


