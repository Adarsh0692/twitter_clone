import React, { useEffect, useState } from 'react';
import style from './Home.module.css'
// import Footer from '../footer/Footer';
import { useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Input from '@mui/material/Input';
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import GifBoxIcon from '@mui/icons-material/GifBox';
import BallotIcon from '@mui/icons-material/Ballot';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import Button from '@mui/material/Button';
import Profiles from '../../component/profiles/Profiles';
import Posts from '../../component/profiles/Posts';
import Avatar from '@mui/material/Avatar';

export default function Home() {
  const [isTweet, setIsTweet] = useState(true)
  const navigate = useNavigate()
  // const isLogin = localStorage.getItem('login')
  const userDetails = JSON.parse(localStorage.getItem('userData')) || []
  const userName = userDetails.find((name) => name.active.isActive === true)
  // console.log(userName.name);
  useEffect(() => {
    if (!userName) {
      navigate('/login')
    }
  }, [])
  return (

    <div className={style.main_div}>
      <div className={style.div1}>
        {/* <h1>div1</h1> */}
      </div>




      <div className={style.div2}>
      <div className={style.scroll}>
        <div className={style.transparent}>
          <div className={style.home}>
            <span>Home </span>
            {/* <p>{userName? userName.name : ''}</p> */}
          </div>
          <div className={style.insideHome}>
            <div className={style.foryou} onClick={()=>setIsTweet(true)}>
              <p >For you</p>
              { isTweet? <hr className={style.hrline} /> : ''}
              
            </div>
            <div className={style.following} onClick={()=>setIsTweet(false)}>
              <p>Follwoing</p>
              { isTweet?  '' : <hr className={style.hrline} />}
            </div>
          </div>
        </div>
        
          <div className={style.textHeader}>
            <div className={style.profileSec}>
              {/* <AccountCircleIcon sx={{ fontSize: '50px' }} /> */}
           
              {userName? 
              <Avatar sx={{ width: 50, height: 50 }} alt="Remy Sharp" 
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" /> :
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> }
            </div>
            <div className={style.commentText}>
              <Input sx={{
                width: '100%'
              }} placeholder="What's happening?" />
              <div className={style.texticons}>
                <div className={style.icons}>
                  <PhotoSizeSelectActualIcon color="primary" sx={{ cursor: 'pointer', margin: '0 15px', fontSize: '20px' }} />
                  <GifBoxIcon color="primary" sx={{ cursor: 'pointer', margin: '0 15px', fontSize: '20px' }} />
                  <BallotIcon color="primary" sx={{ cursor: 'pointer', margin: '0 15px', fontSize: '20px' }} />
                  <SentimentSatisfiedAltIcon color="primary" sx={{ cursor: 'pointer', margin: '0 15px', fontSize: '20px' }} />
                  <WorkHistoryIcon color="primary" sx={{ cursor: 'pointer', margin: '0 15px', fontSize: '20px' }} />
                </div>
                <div className={style.Twittebtn}>
                  <Button variant="contained" sx={{ borderRadius: '35px', marginTop: '5px' }}>Tweet</Button>
                </div>

              </div>

            </div>

          </div>
          <div className={style.profile_div}>
            <Profiles />
            {/* <Posts /> */}
          </div>
        </div>


      </div>





      <div className={style.div3}>
        {/* <h1>div3</h1> */}
      </div>

    </div>
  )
}
