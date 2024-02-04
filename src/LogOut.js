
// ===The way 1=====:

import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react';

class LogOut extends Component {
  componentWillUnmount() {
    alert('Goodbye!!!')
  }
  
  render() {
    return (
      <div className="container d-flex align-items-center text-center">
        <div className="form-signin">
            <h1 className="h3 mb-3 fw-normal">Welcome</h1>
            <button className="w-100 btn btn-lg btn-primary" type="button" onClick={this.props.onLogOut}>Log out</button>
        </div>
      </div>
    )
  }
}

export default LogOut;


// ==== The way 2: =====

// import 'bootstrap/dist/css/bootstrap.min.css';
// import React, { Component } from 'react';
// class LogOut extends Component {
//   componentWillUnmount() {
//     alert('Goodbye!!!')
//   }
  
//   render() {
//     return (
//       <div>
//       <h1>WelCom</h1>
//       <button onClick={this.props.logout}>Log Out</button>
//       </div>
//     )
//   }
// }

// export default LogOut;
