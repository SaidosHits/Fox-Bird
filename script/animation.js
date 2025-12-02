import { animate, inView } from "https://cdn.jsdelivr.net/npm/motion@latest/+esm";

// Elements
const elements = {
  feature1: document.getElementById('feature-1-lottie'),
  feature2: document.getElementById('feature-2-lottie'),
  feature3: document.getElementById('feature-3-lottie'),
  heroImage: document.getElementById('hero_section-image_lottie'),
  button: document.querySelector(".coding-bootcamp-banner button"),
  Star_svg: document.getElementById("svg_star"),
  icons: document.querySelectorAll(".javascript_logo, .python_logo, .typscript_logo, .angular_logo, .csharp_logo, .svelt_logo"),
  arrow: document.getElementById("arrow"),
  T_image: document.querySelector(".teamwork-showcase-image"),
  Path: document.getElementById("svg_path"),
};


// Lottie animation setup

function loadLottieAnimation({ container, path, delay = 700 }) {
  if (!container) return;        // Skip if container is missing
  const animation = lottie.loadAnimation({
    container,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path,
    rendererSettings: { preserveAspectRatio: 'xMidYMid meet' }
  });

  inView(container, () => {
    setTimeout(() => animation.play(), delay);
  });
}

// Icon animations

elements.icons.forEach((icon, i) => {
  animate(icon, {
    x: [0, Math.random() * 20 - 10, Math.random() * -20 + 10, 0], // random x movement each icon independently
    y: [0, Math.random() * 16 - 6, Math.random() * -16 + 6, 0] // random y movement for each icon independently
  }, {
    duration: 3 + Math.random() * 2,
    repeat: Infinity,
    easing: "ease-in-out",
    delay: Math.random() * 2
  });
});

// CTA button animation

inView(elements.button, () => {
  animate(elements.button, {
    scale: [1, 1.05, 1],
    rotate: [0, 5, -5, 0]
  }, {
    duration: 2,
    repeat: 1,
    easing: "ease-in-out",
    delay: 0.7
  });
});

// Star SVG animation

inView(elements.Star_svg, () => {
  animate(elements.Star_svg, {
    rotate: [0, 17, -17, 0]
  }, {
    duration: 4,
    duration: 2,
    repeat: 1,
    easing: "ease-in-out",
    delay: 0.7
  })
})


// Load Lottie animations

loadLottieAnimation({ container: elements.Path, path: './Fox-Bird/lottie/Path.json' });
loadLottieAnimation({ container: elements.feature1, path: '../lottie/feature_1.json' });
loadLottieAnimation({ container: elements.feature2, path: '../lottie/feature_2.json' });
loadLottieAnimation({ container: elements.feature3, path: '../lottie/feature_3.json' });
loadLottieAnimation({ container: elements.heroImage, path: '../lottie/Hero image_1.json' });
loadLottieAnimation({ container: elements.T_image, path: '../lottie/Team_work.json' });
loadLottieAnimation({ container: elements.arrow, path: '../lottie/arrow.json' });


