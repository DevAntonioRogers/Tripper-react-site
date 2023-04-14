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

export const contactFormAnimations = {
  enter: { x: 0, transition: { type: 'spring', duration: 1, bounce: 0.1, delay: 0.3 } },
  exit: { x: '1000%' }
}

export const contactBoxesAnimations = {
  enter: { x: 0, transition: { type: 'spring', duration: 1, bounce: 0.1, delay: 0.3 } },
  exit: { x: '-1000%' }
}

export const cruiseTopCardAnimations = {
  enter: { x: 0, transition: { type: 'spring', duration: 1.5, bounce: 0.1, delay: 0.5 } },
  exit: { x: '-1000%' }
}

export const cruiseBottomCardAnimations = {
  enter: { x: 0, transition: { type: 'spring', duration: 1.5, bounce: 0.1 } },
  exit: { x: '1000%' }
}

export const cruisePartnersAnimations = {
  titleEnter: { y: 0, transition: { type: 'spring', duration: 1.5, bounce: 0.2, delay: 0.3 } },
  titleExit: { y: '-1000%' },
  enter: { opacity: 1, transition: { duration: 1, ease: [0.5, 0.71, 1, 1.5], delay: 0.3 } },
  exit: { opacity: 0 }
}

export const bottomCruiseAnimations = {
  enter: { opacity: 1, x: 0, transition: { type: 'spring', duration: 1, bounce: 0.2, delay: 0.3 } },

  imageExit: { opacity: 0, x: '100%' },

  aboutExit: { opacity: 0, x: '-100%' }
}