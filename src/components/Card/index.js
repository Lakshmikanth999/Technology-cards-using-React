// Write your code here.

import './index.css'

const Card = props => {
  const {cardData} = props
  const {title, description, imgUrl, className} = cardData
  return (
    <div className={`${className} card-container`}>
      <div className="img-container">
        <img className="card-img" src={imgUrl} alt={`${title}-img`} />
      </div>
      <h1 className="card-title">{title}</h1>
      <p className="card-description">{description}</p>
    </div>
  )
}

export default Card
