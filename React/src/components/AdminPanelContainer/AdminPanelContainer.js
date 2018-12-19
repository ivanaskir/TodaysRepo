import React from 'react';
import { Link } from 'react-router-dom';
class AdminPanelContainer extends React.Component{


    render() {
        return <div className="container">

            <Link className="mx-5 btn btn-dark" to='/admin/institutions'>Institutions</Link>
            <Link className="mx-5 btn btn-dark" to='/admin/books'>Books</Link>

            
        </div>
    }
}

export default AdminPanelContainer;