import React from 'react'
import {Link, Route,  withRouter} from 'react-router-dom'
import Register from './Register'
import Login from './Login'
import Home from './Home'
import Account from './Account'
import Profile from './Profile'
import Setting from './Setting'
import UserLogin from './UserLogin'
import ArchieveFile from './ArchieveFile'
import {Menu} from 'antd'
 

function NavBar(props){
   const token = localStorage.getItem('token')

   return(
        <div>
            <Menu theme="light" mode="horizontal">

            { token ? (<div> 
                      <Menu.Item>
                        <Link to="/account"> Account </Link>
                      </Menu.Item>
                      <Menu.Item>
                           <Link to="/userlogin">User login</Link>
                           </Menu.Item>
                           <Menu.Item>
                           <Link to="/profile"> Profile</Link> 
                           </Menu.Item>
                           <Menu.Item> 
                            <Link to="/setting"> Setting </Link>
                            </Menu.Item>
                            <Menu.Item>
                            <Link to="/logout" onClick={() => {
                                localStorage.removeItem('token')
                                alert('succefully loggedout')
                                props.history.push("/register")
                            }}> Logout</Link>
                            </Menu.Item>
                            <Menu.Item>
                                 <Link to="/archieve"> Archieve </Link>
                            </Menu.Item>
                        </div>) : 
                        (<div>
                            <Menu.Item>
                             <Link to="/"> Home </Link>
                             </Menu.Item>
                             <Menu.Item>
                            <Link to="/register">Register</Link>
                            </Menu.Item>
                            <Menu.Item>
                            <Link to="/login">Login</Link>
                            </Menu.Item>
                        </div>)
            }
                    
            <Route path="/register" component={Register} exact={true} />
            <Route path="/login" render={(props) => { 
                                     return <Login {...props}   />
                            }} />

            <Route path="/" component={Home} exact={true} />
            <Route path="/account" component={Account} exact={true} />
            <Route path="/profile" component={Profile} exact={true} />
            <Route path="/setting" component={Setting} exact={true} />
            <Route path="/userlogin" component={UserLogin} exact={true} />
            <Route path="/archieve" component={ArchieveFile} exact={true} />
          </Menu>  
        </div>      
   )  
}

export default withRouter(NavBar)
