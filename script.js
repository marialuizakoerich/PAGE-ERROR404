window.addEventListener("load", () => {
  const divVideo = document.querySelector(".divVideo");

  const videoDesktopSrc = "assets/video_desktop.mp4";
  const videoMobileSrc  = "assets/video_mobile.mp4";

  const video = document.createElement("video");
  video.autoplay = true;
  video.muted = true;
  video.playsInline = true;
  video.loop = true;
  video.preload = "auto";

  video.style.opacity = 0;
  video.style.transition = "opacity 250ms ease";

  divVideo.appendChild(video);

  const mq = window.matchMedia("(max-width: 768px)");

  function applyVideoSrc(isMobile) {
    const nextSrc = isMobile ? videoMobileSrc : videoDesktopSrc;

    if (video.getAttribute("data-src") === nextSrc) return;

    video.style.opacity = 0;

    video.src = nextSrc;
    video.setAttribute("data-src", nextSrc);
    video.load();

    video.addEventListener("canplaythrough", () => {
      video.play().catch(() => {});
      video.style.opacity = 1;
    }, { once: true });
  }

  // Primeira execução
  applyVideoSrc(mq.matches);

  // Troca quando cruzar 768px
  mq.addEventListener("change", (e) => {
    applyVideoSrc(e.matches);
  });
});
