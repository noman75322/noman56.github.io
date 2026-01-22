<script>
document.addEventListener("DOMContentLoaded", () => {

  /* Smooth scroll for nav buttons */
  const buttons = document.querySelectorAll(".nav-buttons .btn");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = document.querySelector(button.dataset.target);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  /* Splash video transition */
  const videoContainer = document.getElementById("video-container");
  const homePage = document.getElementById("home-page");
  const splashVideo = document.getElementById("splash-video");

  splashVideo.addEventListener("ended", () => {
    videoContainer.style.display = "none";
    homePage.style.display = "block";
  });

});
</script>
