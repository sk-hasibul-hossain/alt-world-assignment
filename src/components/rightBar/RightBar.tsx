"use client"
import React, { useContext, useEffect, useState } from 'react'
import "./RightBar.css";
import { AppContext } from '@/context';
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import axios from 'axios';

const RightBar = () => {
  const {setUserDetails, userDetails, userAction, setUserAction} = useContext(AppContext);
  // const [details, setDetails] = useState();
  useEffect(() => {
    setUserDetails(userAction);
  }, [userAction])
  const barStyleBhv = {
    width: `${parseInt(userDetails?.score?.behavioral) * 10}%`,
    height: "100%",
    backgroundColor: parseInt(userDetails?.score?.behavioral) <= 10 && parseInt(userDetails?.score?.behavioral) > 7 ? "rgb(7, 168, 7)" : parseInt(userDetails?.score?.behavioral) <= 7 && parseInt(userDetails?.score?.behavioral) >= 5 ? "rgb(247, 190, 86)" : "rgb(247, 44, 44)",
    borderRadius: "20px 20px 20px 20px",
  }

  const barStyleCmm = {
    width: `${parseInt(userDetails?.score?.communication) * 10}%`,
    height: "100%",
    backgroundColor:parseInt(userDetails?.score?.behavioral) <= 10 && parseInt(userDetails?.score?.behavioral) >= 7 ? "rgb(7, 168, 7)" : parseInt(userDetails?.score?.behavioral) <= 7 && parseInt(userDetails?.score?.behavioral) >= 5 ? "rgb(247, 190, 86)" : "rgb(247, 44, 44)",
    borderRadius: "20px 20px 20px 20px",
  }

  const barStyleSh = {
    width: `${parseInt(userDetails?.score?.situationHandling) * 10}%`,
    height: "100%",
    backgroundColor: parseInt(userDetails?.score?.behavioral) <= 10 && parseInt(userDetails?.score?.behavioral) >= 7 ? "rgb(7, 168, 7)" : parseInt(userDetails?.score?.behavioral) <= 7 && parseInt(userDetails?.score?.behavioral) >= 5 ? "rgb(247, 190, 86)" : "rgb(247, 44, 44)",
    borderRadius: "20px 20px 20px 20px",
  }

  const [mainIndex, setMainIndex] = useState(0);

  const items = [
    <div className="item" key={1}>
      <video width="100%" controls className="media">
        <source src={userDetails?.media[1]?.url} />
      </video>
    </div>,
    <div className="item" key={2}>
      <img src={userDetails?.media[0]?.url} alt="media" className="media" />
    </div>,
  ];

  const slideNext = () => {
    if (mainIndex < items.length - 1) {
      setMainIndex(mainIndex + 1);
    }
  };

  const slidePrev = () => {
    if (mainIndex > 0) {
      setMainIndex(mainIndex - 1);
    }
  };

  const shortlistAPI = async() =>{
    try{
      const response = await axios.post(
        'https://hasibul-backend.onrender.com/candidate/updateShortlistStatus/',
        {
          email: userDetails?.email,
          status: true
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      console.log('update Response:', response.data);
    }catch(err){

    }
  }

  // useEffect(() => {
  //   setDetails
  // },[userAction])

  const handleSortList = () => {
    shortlistAPI();
    setUserAction(userDetails);
  }
  return (
    <div className='right-bar-container'>
      <div className='right-bar-cadidate-details'>
        <div className='right-bar-candidate-details-header'>
          <div className='right-bar-candidate-image-and-info'>
            <div className='right-bar-candidate-img'>
              <img src={userDetails?.media[0]?.url} />
            </div>
            <div className='wrapper'>
              <h1>{userDetails?.firstName}</h1>
              <h2>{userDetails?.email}</h2>
            </div>
          </div>
          <h3>{userDetails?.score?.totalPercentage}%</h3>
        </div>
        <div className='middle-bar-candidate-statistic'>
          <div className='middle-bar-statistic-item'>
            <div className='title'>
              <h1>Behavioural</h1>
            </div>
            <div className='outer-bar'>
              <div style={barStyleBhv}></div>
            </div>
            <div className='stat-number'>{userDetails?.score?.behavioral}</div>
          </div>
          <div className='middle-bar-statistic-item'>
            <div className='title'><h1>Communication</h1></div>
            <div className='outer-bar'>
              <div style={barStyleCmm}></div>
            </div>
            <div className='stat-number'>{userDetails?.score?.communication}</div>
          </div>
          <div className='middle-bar-statistic-item'>
            <div className='title'><h1>Situation handiling</h1></div>
            <div className='outer-bar'>
              <div style={barStyleSh}></div>
            </div>
            <div className='stat-number'>{userDetails?.score?.situationHandling}</div>
          </div>
        </div>
        <div className='middle-bar-user-info'>
          <div className='middle-bar-user-about'>
            <h1>About</h1>
            <p>lorem ipsum khsad sk kdanksd adkabdak dakdnakd a asndakd kansda kad adkadnakdadad</p>
          </div>
          <div className='middle-bar-user-about'>
            <h1>Exprience</h1>
            <p>lorem ipsum khsad sk kdanksd adkabdak dakdnakd a asndakd kansda kad adkadnakdadad</p>
          </div>
          <div className='middle-bar-user-about'>
            <h1>Hobbies</h1>
            <p>lorem ipsum khsad sk kdanksd adkabdak dakdnakd a asndakd kansda kad adkadnakdadad</p>
          </div>
          <div className='middle-bar-user-about'>
            <h1>Introduction</h1>
            <p>lorem ipsum khsad sk kdanksd adkabdak dakdnakd a asndakd kansda kad adkadnakdadad</p>
          </div>
        </div>
        {!userDetails?.isShortlisted && <div className='middle-bar-btn-container'>
          <button onClick={handleSortList}>SHORTLIST</button>
        </div>}
      </div>
      <div className='right-bar-section-two'>
      <div className="carousel">
          <AliceCarousel
            activeIndex={mainIndex}
            disableDotsControls
            disableButtonsControls
            items={items}
          />
          <p className="index">{`${mainIndex + 1}/${items.length}`}</p>
          <div className="btn-prev" onClick={slidePrev}>
            &lang;
          </div>
          <div className="btn-next" onClick={slideNext}>
            &rang;
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightBar