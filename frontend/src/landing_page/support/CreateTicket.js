import React from 'react';

function CreateTicket() {
    return ( 
        <nav className="navbar bg-body-tertiary">
        <div className="container-fluid" style={{padding:'10px 150px 10px 150px'}}>
            <h1 className="navbar-brand fs-1">Support Portal</h1>
            <form className="d-flex mb-5" role="search">
            <button className="btn btn-primary" type="submit" style={{backgroundColor:'blue'}}>My Ticket</button>
            </form>   
        </div>
         <nav className="navbar bg-body-tertiary">
            <form className="container-fluid">
                <div className="input-group" style={{padding:'0px 150px 10px 150px'}}>
                <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-magnifying-glass"></i></span>
                <input className="form-control " type="search" placeholder="Eg. How do I open my account, How do I activate my F&O" aria-label="Search" style={{height:'60px',width:'70rem'}}/>
                </div>
            </form>
            </nav>
        </nav>
     );
}

export default CreateTicket;