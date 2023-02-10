import FeaturedCard from "./FeaturedCard"
import { selectFeatured } from "../../../shared/Data"



const FeaturedList = () => {

  const featured = selectFeatured()

  return (
    <div>


      <h1 className="featured-heading">Our Featured Destinations</h1>
      <div className="featured-container">

        {featured.map((featured) => {
          return (
            <div className="card-featured-container" key={featured.id}>
              <FeaturedCard featured={featured} />
            </div>
          )
        })}

      </div>
    </div>
  )

}

export default FeaturedList