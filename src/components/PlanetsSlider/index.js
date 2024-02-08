// Write your code here
import Slider from 'react-slick'

import PlanetsItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="slider-container" data-testid="planets">
      <Slider {...settings}>
        {planetsList.map(each => (
          <PlanetsItem eachDetails={each} key={each.id} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
