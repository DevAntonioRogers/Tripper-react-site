export const aboutSectionAnimations = {
  enter: { opacity: 1, x: 0, transition: { type: 'spring', duration: 1, bounce: 0.2, delay: 0.3 } },

  imageExit: { opacity: 0, x: '-100%' },

  aboutExit: { opacity: 0, x: '100%' }
}

export const mttAnimations = {
  titleEnter: { y: 0, transition: { type: 'spring', duration: 1, bounce: 0.2, delay: 0.3 } },
  titleExit: { y: '-1000%' },
  enter: { opacity: 1, transition: { duration: 1, ease: [0.5, 0.71, 1, 1.5], delay: 0.3 } },
  exit: { opacity: 0 }
}