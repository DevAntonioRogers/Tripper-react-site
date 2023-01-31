import FeaturedCard from "./FeaturedCard"
import { selectFeatured } from "../../../shared/Data"


const FeaturedList = () => {

  const featured = selectFeatured()
  return (
    <>
      <h1 className="featured-heading">Our Featured Destinations</h1>
      <div className="featured-container">

        {featured.map((featured) => {
          return (
            <div key={featured.id}>
              <FeaturedCard featured={featured} />
            </div>
          )
        })}
      </div>
    </>
  )

}

export default FeaturedList