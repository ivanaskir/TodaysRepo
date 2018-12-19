import React from 'react';
import axios from 'axios';
import InstitutionListComponent from './InstitutionListComponent';
class InstitutionListContainer extends React.Component{

    constructor() {
        super();
        this.state = {
            institutions: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:8081/library/api/institutions/all")
        .then(response => {
            this.setState({
                institutions: response.data
            })
        })
        .catch((error) => {
            console.log(error);
        })
    }
  
    render(){

        return <div className="container">
            <InstitutionListComponent  institutions={this.state.institutions}/>
           
        </div>
    }
}

export default InstitutionListContainer;