gsap.to(".block-1", 2, {
  x: "-240",
  y: "-100",
  scale: "2.4",
  ease: Expo.easeInOut,
});
gsap.to(".block-2", 2, {
  x: "-180",
  y: "200",
  scale: "1.2",
  ease: Expo.easeInOut,
});
gsap.to(".block-3", 2, {
  x: "180",
  y: "-240",
  scale: "1.6",
  ease: Expo.easeInOut,
});
gsap.to(".block-4", 2, {
  x: "280",
  y: "240",
  scale: "0.8",
  ease: Expo.easeInOut,
});

gsap.to(".box", 2.4, {
  y: "-100%",
  ease: Expo.easeInOut,
});

gsap.from(".circle-shape", 2.4, {
  scale: "0",
  ease: Expo.easeInOut,
});

gsap.from(".circle-shape-2", 2.4, {
  scale: "0",
  ease: Expo.easeInOut,
});

gsap.from(".circle-shape-3", 2.4, {
  scale: "0",
  ease: Expo.easeInOut,
});

gsap.from(".navbar > div", 1.6, {
  opacity: 0,
  y: 60,
  ease: Expo.easeInOut,
  delay: 0.6,
});

gsap.from(".site-logo", 1.6, {
  opacity: 0,
  y: 60,
  ease: Expo.easeInOut,
  delay: 0.6,
});

gsap.from(".showreel", 1.6, {
  opacity: 0,
  y: 40,
  ease: Expo.easeInOut,
  delay: 0.6,
});

gsap.staggerFrom(
  ".site-menu > div",
  1,
  {
    opacity: 0,
    y: 40,
    ease: Expo.easeInOut,
  },
  0.2
);
