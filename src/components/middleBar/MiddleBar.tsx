"use client"
import React, { useState } from 'react'
import "./MiddleBar.css";
import ReviewCandidateList from '../reviewCandidateList/ReviewCandidateList';
import ShortListCandidate from '../shortlistCandidate/ShortListCandidate';

const MiddleBar = () => {
    const [showCandidateBtn, setShowCandidateBtn] = useState("review");
    const handleReviewCandidateList = () => {
        setShowCandidateBtn("review")
    }

    const handleshortListedCandidateList = () => {
        setShowCandidateBtn("shortlist")
    }
  return (
    <div className='middle-bar-container'>
        <div className='middle-bar-header'>
            <div className='middle-bar-header-wrapper'>
                <h1>Page</h1>
                <h1> / Assignment</h1>
            </div>
            <h2>Sales BDE</h2>
        </div>
        <div className='middle-bar-body'>
            <div className='middle-bar-candidate-task-details'>
                <div className='middle-bar-candidate-task-header'>
                    <h1>Sales BDE</h1>
                    <div className='wrapper'>
                        <h2>Active</h2>
                        <span>
                            <svg height="800px" width="800px" className='svg-pen' version="1.1" id="Capa_1" viewBox="0 0 259.858 259.858" xmlSpace="preserve">
                                <path d="M259.857,18.309c0-4.891-1.904-9.488-5.363-12.946C251.036,1.904,246.438,0,241.548,0c-4.636,0-8.997,1.729-12.385,4.853  c-3.869-1.231-7.945-1.878-12.122-1.878c-10.642,0-20.646,4.145-28.172,11.669L177.343,26.17c-0.113,0.101-0.228,0.197-0.336,0.305  L24.256,179.226c-2.834,2.834-5.995,8.283-7.049,12.147L0.28,253.437c-0.521,1.912-0.308,3.621,0.603,4.813  c0.792,1.038,2.06,1.609,3.572,1.609c0.619,0,1.28-0.095,1.964-0.281l62.065-16.927c3.866-1.056,9.315-4.218,12.146-7.05  L233.382,82.85c0.108-0.108,0.204-0.224,0.305-0.336l11.526-11.526c10.877-10.877,14.126-26.529,9.77-40.27  C258.121,27.325,259.857,22.955,259.857,18.309z"/>
                            </svg>
                        </span>
                    </div>
                </div>
                <div className='middle-bar-candidate-task-item'>
                    <h3>Assignment Link</h3>
                    <h3>https://tiny.url/asknakdna</h3>
                </div>
                <div className='middle-bar-candidate-task-item'>
                    <h3>Assignment Hour</h3>
                    <h3>3 Hours</h3>
                </div>
                <div className='middle-bar-candidate-task-item'>
                    <h3>Assignment End at</h3>
                    <h3>11 March 2024</h3>
                </div>
            </div>
            <div className='middle-bar-candidate-list'>
                <div className='middle-bar-candidate-toggle-btn-container'>
                    <div className={`candidate-toggle-bar-btn ${showCandidateBtn==="review" ? "active" : ""}`} onClick={handleReviewCandidateList}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" className='svg-cube' viewBox="0 0 512 512" id="cube"><path d="M467.301 168.084c-1.805 0-3.516.329-5.07.962l-2.281 1.15-171.475 88.938-3.888 1.996s-.052.023-.052.047c-7.56 4.668-12.535 12.506-12.535 21.425v185.854c0 6.382 5.649 11.544 12.69 11.544a13.77 13.77 0 006.065-1.404c.155-.095.363-.188.519-.282l174.731-92.694.259-.141c8.241-4.504 13.735-12.742 13.735-22.105V179.582c.001-6.359-5.7-11.498-12.698-11.498zM454.273 118.521l-181.7-81.731S261.914 32 255.996 32s-16.526 4.79-16.526 4.79L57.614 118.521s-7.989 3.292-7.989 9.479c0 6.562 8.3 11.5 8.3 11.5l182.582 96.371 2.902 1.479c3.784 1.687 8.077 2.649 12.587 2.649 4.561 0 8.915-.963 12.742-2.696l2.539-1.315 182.893-96.536s7.508-4.036 7.508-11.453c0-6.499-7.405-9.478-7.405-9.478zM227.466 261.178l-3.992-2.043-171.432-88.938-2.28-1.15c-1.495-.634-3.258-.962-5.071-.962-6.997 0-12.69 5.138-12.69 11.497v183.792c0 9.388 5.485 17.602 13.727 22.105l.208.141 174.739 92.694c1.918 1.08 4.199 1.687 6.636 1.687 6.989 0 12.69-5.162 12.69-11.544V282.603c-.001-8.919-4.977-16.757-12.535-21.425z"/></svg>
                        <h1>TO REVIEW</h1>
                    </div>
                    <div className={`candidate-toggle-bar-btn ${showCandidateBtn==="shortlist" ? "active" : ""}`} onClick={handleshortListedCandidateList}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px" className='svg-file'><path d="M 30.398438 2 L 7 2 L 7 48 L 43 48 L 43 14.601563 Z M 30 15 L 30 4.398438 L 40.601563 15 Z"/></svg>
                        <h1>SHORTLISTED</h1>
                    </div>
                </div>
            </div>
            <div className='middle-bar-candidate-title'>
                <h4>CABDIDATE</h4>
                <h4>SCORE</h4>
            </div>
            <div className='middle-bar-show-candidate-list'>
                {showCandidateBtn==="review" ? <ReviewCandidateList /> : <ShortListCandidate />}
            </div>
        </div>
    </div>
  )
}

export default MiddleBar