import React from 'react';
import axios from 'axios';
import InstitutionDetailsComponent from './InstitutionDetailsComponent';
import { Link } from 'react-router-dom';    
const styles = {
    heading: {  }
}
class InstitutionDetailsContainer extends React.Component {
    

    constructor(){
        super();
        this.state = {
            books: [],
            institutionTitle: ''
        }   
    }
    
    componentWillMount(){
        this.setState({institutionTitle: this.props.match.params.title});
    }

    componentDidMount(){
        console.log(this.state.books.length);
        axios.get("http://localhost:8081/library/api/institutions/showBooks/" + this.state.institutionTitle)
        .then(response => {
            this.setState({
                books: response.data
            })
        })
        .catch((error) => {
            console.log(error);
        })
    }
    render(){
        let institutionDetails = this.state.books.map((book, index) => {
            return  <InstitutionDetailsComponent
                key={index}
                price={book.price}
                quantity={book.quantity}
                quality={book.quality}
                title={book.book.title}
                />

        })
        return <div>
            <p className="h3 text-center">{this.state.institutionTitle}</p>
            {this.state.books.length <= 2 ? <div className="alert alert-primary" role="alert">
                There are too little books here! Come back later!
            </div> :
                <div className="row">
                    {institutionDetails}
                   
                </div>
            }
            <div  className="text-center">
             <Link to='/institutions'className="btn btn-secondary" role="button">Back</Link>
             </div>
        </div>
    }
}

export default InstitutionDetailsContainer;