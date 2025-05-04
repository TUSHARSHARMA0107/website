// Function to dynamically change the video source
function playVideo(videoSrc) {
      // Select all video elements
      const exerciseVideo = document.getElementById("exercise-video");
      const yogaVideo = document.getElementById("yoga-video");
  
      // Check and update the correct video section
      if (exerciseVideo && yogaVideo) {
          if (videoSrc.includes("pose")) {
              yogaVideo.querySelector("source").src = videoSrc;
              yogaVideo.load();
          } else {
              exerciseVideo.querySelector("source").src = videoSrc;
              exerciseVideo.load();
          }
      }
  }
  
  // Tab functionality for Diet Plan
  function openTab(evt, tabName) {
      let i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablink");
      for (i = 0; i < tablinks.length; i++) {
          tablinks[i].classList.remove("active");
      }
      document.getElementById(tabName).style.display = "block";
      evt.currentTarget.classList.add("active");
  }
  
  // Initialize the Vegetarian tab by default
  document.addEventListener("DOMContentLoaded", () => {
      document.querySelector(".tablink").click();
  });