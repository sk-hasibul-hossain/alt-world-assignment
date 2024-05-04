"use client"
import React, { useContext, useEffect, useState } from 'react'
import "./ReviewCandidateList.css";
import axios from 'axios';
import { AppContext } from '@/context';

interface Candidate {
    // Define properties of the candidate object
    // Adjust types as per your actual data structure
    firstName: string;
    email: string;
    media: { url: string }[];
    score: {
        totalPercentage: number;
        // Add other score properties if needed
    };
    // Add other properties if needed
}

const ReviewCandidateList = () => {
    const [reviewUserList, setReviewUserList]= useState<Candidate[]>([]);
    const {setUserDetails, userDetails, userAction} = useContext(AppContext);
    const getAllUserAPI = async() => {
        try{
            const response = await axios.get("https://hasibul-backend.onrender.com/candidate/underReviewCandidate?page=1&perPage=100");
            // const reviewData = response?.data?.filter((val) => {
            //     if(!val.isShortlisted){
            //         return true;
            //     }
            // })
            const reviewData = response?.data;
            if(!userDetails && reviewData?.length > 0) {
                setUserDetails(reviewData[0]);
            }else if(userAction){
                setUserDetails(userAction);
            }
            setReviewUserList(reviewData);   
        }catch(err){

        }
    }
    useEffect(() => {
        getAllUserAPI();
    },[userAction])

    const handleCandidate = (cn: Candidate) => {
        setUserDetails(cn);
    }
  return (
    <div className='review-candidates'>
        {reviewUserList?.length > 0 ? reviewUserList?.map((element, index) => {
            return <div key={index} className='list' onClick={() => {
                handleCandidate(element)
            }}>
                <div className='review-candidate'>
                    <div className='review-candidate-img'>
                        <img src={element?.media[0]?.url} />
                    </div>
                    <div className='wrapper'>
                        <h1>{element?.firstName}</h1>
                        <h2>{element?.email}</h2>
                    </div>
                </div>
                <h3 className={+element?.score?.totalPercentage <= 100 && +element?.score?.totalPercentage >= 50 ? "list-green" : +element?.score?.totalPercentage < 50 && +element?.score?.totalPercentage >= 30 ? "list-orange" : "list-red"}>{element?.score?.totalPercentage}%</h3>
            </div>
        }) : "no data"}
    </div>
  )
}

export default ReviewCandidateList