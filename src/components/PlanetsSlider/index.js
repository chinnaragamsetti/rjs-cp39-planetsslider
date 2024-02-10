// Write your code here
import Slider from 'react-slick'

import PlanetsItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  return (
    <div className="slider-container" data-testid="planets">
      <Slider>
        {planetsList.map(each => (
          <PlanetsItem eachDetails={each} key={each.id} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
