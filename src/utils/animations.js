import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const fadeUp = (target, options = {}) => {
  const { duration = 1, delay = 0, y = 40, opacity = 0, ease = 'power3.out' } = options;
  return gsap.fromTo(
    target,
    { y, opacity },
    { y: 0, opacity: 1, duration, delay, ease, clearProps: 'transform,opacity' },
  );
};

export const fadeIn = (target, options = {}) => {
  const { duration = 1, delay = 0, opacity = 0, ease = 'power3.out' } = options;
  return gsap.fromTo(
    target,
    { opacity },
    { opacity: 1, duration, delay, ease, clearProps: 'opacity' },
  );
};

export const slideFromLeft = (target, options = {}) => {
  const { duration = 1, x = -60, opacity = 0, ease = 'power3.out' } = options;
  return gsap.fromTo(
    target,
    { x, opacity },
    { x: 0, opacity: 1, duration, ease, clearProps: 'transform,opacity' },
  );
};

export const slideFromRight = (target, options = {}) => {
  const { duration = 1, x = 60, opacity = 0, ease = 'power3.out' } = options;
  return gsap.fromTo(
    target,
    { x, opacity },
    { x: 0, opacity: 1, duration, ease, clearProps: 'transform,opacity' },
  );
};

export const scaleIn = (target, options = {}) => {
  const { duration = 1, scale = 0.9, opacity = 0, ease = 'power3.out' } = options;
  return gsap.fromTo(
    target,
    { scale, opacity },
    { scale: 1, opacity: 1, duration, ease, clearProps: 'transform,opacity' },
  );
};

export const staggerCards = (selector, options = {}) => {
  const { duration = 0.8, stagger = 0.12, y = 50, opacity = 0, ease = 'power3.out' } = options;
  return gsap.fromTo(
    selector,
    { y, opacity },
    { y: 0, opacity: 1, duration, stagger, ease, clearProps: 'transform,opacity', scrollTrigger: { trigger: selector, start: 'top 85%', once: true } },
  );
};

export const animateCounter = (element, endValue, options = {}) => {
  const { duration = 1.8, suffix = '', prefix = '', decimals = 0 } = options;
  const obj = { value: 0 };
  gsap.to(obj, {
    value: endValue,
    duration,
    ease: 'power3.out',
    onUpdate: () => {
      if (element) {
        const formatted = Number(obj.value).toFixed(decimals);
        element.textContent = `${prefix}${formatted}${suffix}`;
      }
    },
  });
};

export const parallaxImage = (target, options = {}) => {
  const { speed = 0.2 } = options;
  gsap.to(target, {
    yPercent: speed * 100,
    ease: 'none',
    scrollTrigger: {
      trigger: target,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  });
};

export const pageTransition = (target, options = {}) => {
  const { duration = 0.45, ease = 'power3.inOut' } = options;
  if (!target) return null;
  return gsap.fromTo(
    target,
    { opacity: 0, y: 16 },
    { opacity: 1, y: 0, duration, ease, clearProps: 'opacity,transform' },
  );
};

export const animateModal = (target) => {
  if (!target) return null;
  return gsap.fromTo(
    target,
    { opacity: 0, y: 50, scale: 0.9 },
    { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: 'power3.out' },
  );
};

export default {
  fadeUp,
  fadeIn,
  slideFromLeft,
  slideFromRight,
  scaleIn,
  staggerCards,
  animateCounter,
  parallaxImage,
  pageTransition,
  animateModal,
};
