import './card.scss';

import { Link } from 'react-router-dom';

const Card = ({data, id}) => {
  return (
    <>
    <Link to={data.link} key={id} style={{ textDecoration: 'none' }} >
      <div className="card">
        <div className="cardimg">
          {data.icon}
        </div>
        <div className="lower">
          <div className="heading">
          {data.name}
          </div>
        <div className="details">
          {data.details} : {data.value}
        </div>
        </div>
      </div>
      </Link>
    </>
  )
}

export default Card
