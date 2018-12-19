import React from 'react';
import mazvydas from '../../img/mazvydas.jpeg';
import { Link } from 'react-router-dom';
const InstitutionCardComponent = (props) => {
    let institutionUri = '/institutions/' + props.title;

    return  <div className="col-sm-6 col-md-4 mx-auto px-auto w-50  ">
                <div className="thumbnail">
                <img src={props.image} alt="..." className="w-75"/>
                    <div className="caption ">
                        <h3 className="">{props.title}</h3>
                        <p className="text-capitalize">{props.category.toLowerCase()}</p>
                        <p><Link to={institutionUri} className="btn btn-warning" role="button">Details</Link> </p>
                    </div>
                </div>
            </div>
}

export default InstitutionCardComponent;