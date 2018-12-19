import React from 'react';
import InstitutionCardComponent from '../InstitutionCard/InstitutionCardComponent';
const InstitutionListComponent = (props) => {



    let institutionCards = props.institutions.map((institution, index) => {
        return  <InstitutionCardComponent
            key={index}
            category={institution.category}
            city={institution.city}
            image={institution.image}
            title={institution.title}
            type={institution.type}
            />
    });
   
        return <div className="row justify-content-center">
            {institutionCards}
        
        </div>
  
}

export default InstitutionListComponent;