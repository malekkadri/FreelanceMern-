import React, { Component } from 'react'
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { signout ,userDetails  } from '../actions/userActions'
import ChatIcon from '@material-ui/icons/Chat';
import './nav.css';

import PersonIcon from '@material-ui/icons/Person';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import ExploreIcon from '@material-ui/icons/Explore';
import SearchNav from './SearchNav';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';

class Navbar extends Component {


        componentDidMount(){
                this.props.userDetails()
        }

        render() {

          
                const { userInfo , signout , user , removeSuccess , senders , notification} = this.props

                
          
          
          
          return (
                        <div>
    <div className="header" style={{minHeight:'60px'}}>
    <Link style={{color:'#f6f6f6'}}  to="/"><h1 className="header__brand logo">Khadamni</h1></Link>
      


        <SearchNav/>

       { this.props.userInfo? (
        <div className="header__right">
        


        {user && user.proAccount && <IconButton>
        <Link style={{color:'#f6f6f6',marginBottom:'10px'}}  to="/explore-jobs/title/all/tags/all" ><WorkIcon fontSize="large" className="heart__icon" /></Link>
        </IconButton>}

        {user && user.teachAccount && <IconButton>
        <Link style={{color:'#f6f6f6',marginBottom:'10px'}}  to="/explore-jobs-teacher/title/all/tags/all" ><SchoolIcon fontSize="large" className="heart__icon" /></Link>
        </IconButton>}


        
      <IconButton>
      <a style={{color:'#f6f6f6'}}  href="/chat"><ChatIcon fontSize="large" className="heart__icon" />  

                                <span className="badge">{ 
                                user && senders ? <p>{senders.length}</p>  : 
                                user && user._id === userInfo._id && user.newMessages ? 
                                <p>{user.newMessages.length}</p> : <p></p> }</span>
        </a>
        
      </IconButton>

        
      <IconButton>
      <Link style={{color:'#f6f6f6'}}  to="/notifications"><FavoriteIcon fontSize="large" className="heart__icon" />  
                                {user && userInfo && user.newMatches !== 0 && !removeSuccess && user._id === userInfo._id &&
                                <span className="badge">{
                                        <p>{ notification || user.newNotifications}</p>
                                        
                                }</span>
        }  </Link>
        
      </IconButton>


      <IconButton>




      <div className="dropdown">
        <Link style={{color:'#f6f6f6'}} to="/profile" >
                <PersonIcon fontSize="large" className="account__icon" />
        <i className="fa fa-caret-down"></i>{' '}
        </Link>
                <ul className="dropdown-content" >
                        <li> <Link  style={{color:'#f6f6f6'}} to="/dashboard"> Dashboard </Link> </li>
                        <li> <Link  style={{color:'#f6f6f6'}} to="/profile"> Edit Profile </Link> </li>
                        {user && !user.proAccount && <li> <Link  style={{color:'#f6f6f6'}} to="/joinAsProWorker"> Join as Professional Account </Link> </li>}
                        {user && !user.teachAccount && <li> <Link  style={{color:'#f6f6f6'}} to="/joinAsTeacher"> Join as Teacher Account </Link> </li>}
                        <hr/>
                        {user && <li> <Link  style={{color:'#f6f6f6'}} to="/postAJob/professional"> Post A Job </Link> </li>}
                        {user && <li> <Link  style={{color:'#f6f6f6'}} to="/postAJob/teacher"> Post A Teaching Job </Link> </li>}
                        {user && <li> <Link  style={{color:'#f6f6f6'}} to="/my-jobs"> My Jobs </Link> </li>}
                        {user && <li> <Link  style={{color:'#f6f6f6'}} to="/gig-orders"> My Orders </Link> </li>}
                        {user && <li> <Link  style={{color:'#f6f6f6'}} to="/gig-orders-placed"> Placed Orders </Link> </li>}
                        <hr/>
                        <li> <Link  style={{color:'#f6f6f6'}} to="/updates"> Updates</Link> </li>
                        <hr/>
                        <li> <Link  style={{color:'#f6f6f6'}} to="/" onClick={signout} > Sign Out </Link> </li>
                </ul>
        </div>
      </IconButton>



    </div>
       ) : (

        <div className="header__right hr">

        <Link to={'/joinAsProWorker'} style={{color:'white',marginRight:'15px'}}>Join as Professional</Link>
        <Link to={'/joinAsTeacher'} style={{color:'white',marginRight:'15px'}}>Join as Teacher</Link>
        <Link to={'/register'} style={{color:'white',marginRight:'15px'}}>Create Gigs</Link>
        <Link to={'/postAJob/professional'} style={{color:'white',marginRight:'15px'}}>Post a Job</Link>
        <Link to={'/signin'} ><Button variant="outlined" size='large' style={{backgroundColor:'white' , border:'1px solid rgb(156,189,221)' }} ><h4>Log In</h4></Button></Link>{' '}
        <Link to={'/register'} ><Button variant="contained" variant="contained" size='large' style={{backgroundColor:'rgb(156,189,221)' }}><h4>Register</h4></Button></Link>
        </div>

       ) }



      
    </div>
                       

                                
                        </div>
                )
        }
}


export default connect(
        
        (state) => ({ 
      

                userInfo : state.userSignin.userInfo ,

                user : state.getDetails.user ,
                
                senders : state.Notification.senders ,


                notification : state.newNotification.notification

        
        
        }),
        {
                
                signout , userDetails
        }
      
)(Navbar);

