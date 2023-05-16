import FeaturedCard from "./FeaturedCard"
import CruiseCards from "../../../Layout/CruisesCards/CruiseCards"
import { selectFeatured } from "../../../shared/Data"
import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"



const FeaturedList = () => {
  const featured = selectFeatured()
  const ref = useRef(null)
  const isInView = useInView(ref)
  const animation = useAnimation()

  useEffect(() => {
    if (isInView) {
      animation.start({
        x: 0,
        opacity: 1,
        transition: { type: 'spring', duration: 1, bounce: 0.2 }
      })
    }
    if (!isInView) {
      animation.start({
        x: '-100vw',
        opacity: 0
      })
    }
  })

  return (
    <div>


      <h1 className="featured-heading">Our Featured Destinations</h1>
      <div ref={ref} className="featured-container">



        <motion.div
          animate={animation} className="card-featured-container" key={featured.id}>
          <CruiseCards firstCards={4} />
        </motion.div>



      </div>
    </div>
  )

}

export default FeaturedList