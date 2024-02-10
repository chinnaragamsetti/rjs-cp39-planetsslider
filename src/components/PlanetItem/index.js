// Write your code here
import './index.css'

const PlanetItem = props => {
  const {eachDetails} = props
  const {name, imageUrl, description} = eachDetails
  return (
    <div className="maincontainer">
      <h1 className="mainheading">PLANETS</h1>
      <img src={imageUrl} alt={`planet ${name}`} className="image" />
      <h1 className="name">{name}</h1>
      <p className="description">{description}</p>
    </div>
  )
}

export default PlanetItem
