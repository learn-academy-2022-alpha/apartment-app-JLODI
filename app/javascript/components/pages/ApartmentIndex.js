import React, { Component } from 'react'
import { 
    Card, 
    CardTitle, 
    CardGroup, 
    CardImg, 
    CardBody, 
    CardSubtitle,
} from 'reactstrap'
import { NavLink } from 'react-router-dom'

class ApartmentIndex extends Component {
  render() {
    return(
    <>
      <h3>Available Apartments</h3>
        <br />
        <CardGroup>
        {this.props.apartments && this.props.apartments.map(apartment => {
            return <Card id = 'indexcard' key={apartment.id}>
            <NavLink to={`/apartshow/${apartment.id}`}>
            <CardImg id = 'index-image'
              alt="Card image cap"
              src={apartment.image}
              top
              width="100%"
            />
            </NavLink>
            <CardBody>
            <NavLink to={`/apartshow/${apartment.id}`}>
              <CardTitle tag="h5">
                  {apartment.street}
              </CardTitle>
              </NavLink>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                 City: {apartment.city}
                 <br />
                 Rent price: {apartment.price}
              </CardSubtitle>
            </CardBody>
          </Card>
        })}
        </CardGroup>
    </>
    )
  }
}

export default ApartmentIndex