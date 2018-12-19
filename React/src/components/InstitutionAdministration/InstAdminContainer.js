import React from 'react';
import axios from 'axios';
import InstAdminComponent from './InstAdminComponent';
import { Link } from 'react-router-dom';
class InstAdminContainer extends React.Component {

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
        });
    }

    
    onClickDeleteHandler = (event, institutionTitle) => {
        // event.preventDefault;
        // alert(this.state.institutions);
        let deleteUri = "http://localhost:8081/library/api/institutions/delete/" + institutionTitle;
        axios.delete(deleteUri)
        .then(response => {     
            alert("Removed " + institutionTitle + " from database");
            // alert(this.state.institutions)
            // let institutions = this.state.institutions.filter(institution => {
            //     return institutionTitle !== this.institutionTitle ? institution : null});
            // this.setState({
            //     institutions: institutions
            // })
            // this.componentDidMount();

            
        })
        .catch(err => {
            alert(err);
        })
    }
    // componentDidUpdate() {
    //     this.componentDidMount();
    // }
    
   
    render() {
        let  institutionsDetails = this.state.institutions.map((institution, index) => {
            return <tbody key={index}><InstAdminComponent
                        key={index}
                        title={institution.title}
                        type={institution.type}
                        category={institution.category}
                        image={institution.image}
                        onClickDelete={(event) =>this.onClickDeleteHandler(event, institution.title)}
                    />
                    </tbody>
    
        }); 
        return <div className="container">
            <table className="table">
                <tbody><tr>
                    <td>Actions</td>
                    <td>Title</td>
                    <td>Type</td>
                    <td>Category</td>
                    <td>Image</td>
                </tr>
                </tbody>
            {institutionsDetails}
            </table>
            <Link className="text-center btn btn-success mx-2" to='/admin/institutions/new'>Create new</Link>
            <Link className="text-center btn btn-secondary" to='/admin/'>Back</Link>

        </div>
    }
}

export default InstAdminContainer;

