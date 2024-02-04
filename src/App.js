// ==== The way 1: ======
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

import React, { Component } from 'react';

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LogOut from './LogOut';

//import { faBootstrap } from '@fortawesome/free-brands-svg-icons';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: { 
        email: "", 
        password: "", 
        isRemember: false 
      },
      isValid: false,
      isLoggedIn: false

    }
  }

  handleChange = (event) => {
    this.setState((state) => {
      const { form } = state
      form[event.target.name] = event.target.value
      return { form }
    }, () => this.checkValidForm())
  }
  
  handleChangeCheckbox = () => {
    this.setState((state) => {
      const { form } = state
      form.isRemember = !form.isRemember
      return { form }
    }, () => this.checkValidForm())
  }
 
  checkValidForm = () => {
    const { email, password } = this.state.form
    const value = email && password
    this.setState({ isValid: value })
  }
 
  handleSubmit = () => {
    if (this.state.isValid){
      this.setState({ isLoggedIn: true })
    }
  }
 
  handleLogOut = () => {
    this.setState({ isLoggedIn: false })
  }

  render () {
    const { isLoggedIn, form } = this.state
    if (isLoggedIn) return (<LogOut onLogOut={this.handleLogOut} />)
    return (
      <div className="container d-flex align-items-center text-center">
        <div className="form-signin">
          <form>
            <img className="mb-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png" alt="" width="72" height="57" />
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
            <div className="form-floating">
              <input className="form-control email" type="email" name="email" placeholder="name@example.com" value={form.email} onChange={this.handleChange} />
              <label>Email address</label>
            </div>
            <div className="form-floating">
              <input className="form-control password" type="password" name="password" placeholder="Password" value={form.password} onChange={this.handleChange} />
              <label>Password</label>
            </div>
            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value={form.isRemember} onChange={this.handleChangeCheckbox} /> Remember me
              </label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="button" onClick={this.handleSubmit} >Sign in</button>
            <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
          </form>
        </div>
      </div>
    )
  }
}

export default App;


// =====The way 2======: 



// import 'bootstrap/dist/css/bootstrap.min.css';
// import "./App.css"

// import React, { Component } from 'react';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import LogOut from './LogOut';
// import { faBootstrap } from '@fortawesome/free-brands-svg-icons';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email:"",
//       password:"",
//       rememberMe: false,
//       isLogged: false,
//       errors: {
//         email:"",
//         password:""
//       }

//     }
//   }

//   handleInputChange =(event)=> {
//     const target = event.target;
//     const value = target.type === "checkbox"? target.checked : target.value;
//     const name = target.name;
//     this.setState({[name]: value})
//   }

//   handleLogin=(event)=> {
//     event.preventDefault();
//     //const{email, password} = this.state;
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const{errors} = {...this.state};
//     if(this.state.email ==="") {
//       errors.email = "Email can be not blank"
//     } else if(!emailRegex.test(this.state.email)) {
//       errors.email = "Email is unvalid"
//     } else {
//       errors.email =""
//     }

//     if(this.state.password ==="") {
//       errors.password = "Password can be not blank"
//     } else if(this.state.password.length < 8) {
//       errors.password = "Password has at least is 8 characters"
//     } else {
//       errors.password =""
//     }
//     if(errors.email ==="" && errors.password ==="") {
//       this.setState({
//         isLogged: true
//       })
//     }

//     if(this.state.rememberMe) {
//       this.setState({
//         email: this.state.email,
//         password: this.state.password
//       })
//     } else {
//       this.setState({
//         email:"",
//         password: ""
//       })
//     }
//     this.setState({errors})
//   }

//   handleLogOut=() => {
//     this.setState({isLogged: false})
//   }

//   render() {
//     const{errors, isLogged} = this.state
//     if(isLogged) {
//       return <LogOut logout={this.handleLogOut}/>
//     }
//     return (
//       <div className='container'>
//         <form id='loginForm'>
//           <div className='mb-3'>
//           <FontAwesomeIcon className ='mt-4 mb-2 bootstrapIcon' icon={faBootstrap}/>
//           <h4>Please Sign In</h4>
//           </div>
//           <div id='email'>
//             <input className='inputEmail shadow-lg'
//               type="email"
//               name='email'
//               value={this.state.email}
//               required
//               onChange={this.handleInputChange}
//               placeholder='Address Email'  
//             />
//             {errors.email&& <div style={{textAlign:"left", color:"red"}}>{errors.email}</div>}
//           </div>
//           <div id='password'>
//             <input className='inputPassword shadow-sm'
//               type="password"
//               name='password'
//               value={this.state.password}
//               required
//               onChange={this.handleInputChange}
//               placeholder='Enter Password' 
//             />
//             {errors.password&& <div style={{textAlign:"left", color:"red"}}>{errors.password}</div>}
//           </div>
//           <div id='checkbox'>
//             <input className='mt-3 checkbox'
//               type="checkbox"
//               name='rememberMe'
//               checked={this.state.rememberMe}
//               onChange={this.handleInputChange} 
//             />
//             <label>Remember Me</label>
//           </div>
//           <button className='mt-2 btn-login' onClick={this.handleLogin}>Sign In</button>

//         </form>

//       </div>
//     )
//   }
// }

// export default App;