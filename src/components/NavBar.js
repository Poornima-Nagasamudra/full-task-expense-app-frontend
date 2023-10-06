import React, {useState} from 'react'
import {Link, Route,  withRouter} from 'react-router-dom'
import Register from './Register'
import Login from './Login'
import Home from './Home'
import Account from './Account'
import Profile from './Profile'
import Setting from './Setting'
import UserLogin from './UserLogin'
import ArchieveFile from './ArchieveFile'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  ToolOutlined,
  HolderOutlined,
  LoginOutlined,
  LogoutOutlined,
  RestOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme} from 'antd'
const { Header, Content, Sider } = Layout;


function NavBar(props){
   const token = localStorage.getItem('token')
   const [collapsed, setCollapsed] = useState(false);

   
   return(
        <div>
            {/* <Menu theme="light" mode="horizontal"> */}
            <Layout className="navbar">
               <Sider trigger={null} collapsible collapsed={collapsed}>
                   <div className="logo" />
            { token ? (
                    <Menu 
                      theme="dark"
                      mode="inline"
                      items={[
                        {
                          key: "/account",
                          icon: <UserOutlined />,
                          label: <Link to="/account">Account</Link>,
                        },
                        {
                          key: "/userlogin",
                          icon: <UserOutlined />,
                          label: <Link to="/userlogin">User Login</Link>,
                        },
                        {
                          key: "/profile",
                          icon: <UserOutlined />,
                          label: <Link to="/profile">Profile</Link>,
                        },
                        {
                          key: "/setting",
                          icon: <ToolOutlined />,
                          label: <Link to="/setting">Setting</Link>,
                        },
                        {
                          key: "logout",
                          icon: <LogoutOutlined />,
                          label: (<Link to="/logout" onClick={() => {
                            localStorage.removeItem('token')
                            alert('succefully loggedout')
                            props.history.push("/register")
                        }}> Logout</Link>)
                      },
                        {
                          key: "archieve",
                          icon: <RestOutlined />,
                          label: <Link to="/archieve">Archieve</Link>,
                        },
                      ]}
                    />
                      // <Menu.Item>
                      //   <Link to="/account"> Account </Link>
                      // </Menu.Item>
                      // <Menu.Item>
                      //      <Link to="/userlogin">User login</Link>
                      //      </Menu.Item>
                      //      <Menu.Item>
                      //      <Link to="/profile"> Profile</Link> 
                      //      </Menu.Item>
                      //      <Menu.Item> 
                      //       <Link to="/setting"> Setting </Link>
                      //       </Menu.Item>
                            // <Menu.Item>
                            // <Link to="/logout" onClick={() => {
                            //     localStorage.removeItem('token')
                            //     alert('succefully loggedout')
                            //     props.history.push("/register")
                            // }}> Logout</Link>
                            // </Menu.Item>
                            // <Menu.Item>
                            //      <Link to="/archieve"> Archieve </Link>
                            // </Menu.Item>
                       ) : 
                        (
                        <Menu
                        theme="dark"
                        mode="inline"
                        items={[
                          {
                            key: "/register",
                            icon: <UserOutlined />,
                            label: <Link to="/register">Register</Link>,
                          },
                          {
                            key: "/login",
                            icon: <LoginOutlined />,
                            label: <Link to="/login">LogIn</Link>,
                          },
                          {
                            key: "/home",
                            icon: <HolderOutlined  />,
                            label: <Link to="/home">Home</Link>
                          }
                        ]}
                      />)
            }
      </Sider>

      <Layout className="site-layout ">
          <Header
            style={{
              paddingLeft: 0,
              background: "#1d39c4",
              color: "#ffffff",
              fontSize: 70,
              minHeight: 150,
            }}
          >
            <div className="header">
              {React.createElement(
                collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger header1",
                  onClick: () => setCollapsed(!collapsed),
                }
              )}
              <div className="header2"> Expense App</div>
            </div>
          </Header>

          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 550,
              // background: colorBgContainer,
            }}
          >      
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
        
          </Content>
      </Layout>
    </Layout>  
        </div>      
   )  
}

export default withRouter(NavBar)
