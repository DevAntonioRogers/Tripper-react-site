import { FeaturedData } from "../components/HomeComponents/FeaturedDestinations/FeaturedData";
import { DestinationData } from "../components/DestinationComponents/DestinationGrid/DestinationData";


export const selectFeatured = () => {
  return FeaturedData;
}

export const selectDestination = () => {
  return DestinationData
}