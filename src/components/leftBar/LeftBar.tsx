import React from 'react'
import "./LeftBar.css";

const LeftBar = () => {
  return (
    <div className='left-bar-container'>
        <div className='left-bar-heading'>
            <div className='left-bar-logo'>
                <div className='left-bar-logo-section-one'>
                    <div>
                        <svg style={{border:"none"}} height="800px" width="800px" className='svg-arrow' version="1.1" id="Layer_1" viewBox="0 0 330 330" xmlSpace="preserve">
                            <path id="XMLID_224_" d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394  l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393  C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z" stroke="none"/>
                        </svg>
                    </div>
                    <div>
                        <svg style={{border:"none"}} height="800px" width="800px" className='svg-arrow' version="1.1" id="Layer_1" viewBox="0 0 330 330" xmlSpace="preserve">
                            <path id="XMLID_224_" d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394  l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393  C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z" stroke="none"/>
                        </svg>
                    </div>
                </div>
                <div className='left-bar-logo-section-two'>
                    <svg style={{border:"none", height: "8px", width: "8px"}} className='svg-arrow' version="1.1" id="Layer_1" viewBox="0 0 330 330" xmlSpace="preserve">
                        <path id="XMLID_224_" d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394  l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393  C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z" stroke="none"/>
                    </svg>
                </div>
            </div>
            <h1>Hi, AltWorld</h1>
        </div>
        <div className='left-bar-body'>
            <div className="left-bar-body-header">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px" className='svg-home'>    <path d="M 25 1.0507812 C 24.7825 1.0507812 24.565859 1.1197656 24.380859 1.2597656 L 1.3808594 19.210938 C 0.95085938 19.550938 0.8709375 20.179141 1.2109375 20.619141 C 1.5509375 21.049141 2.1791406 21.129062 2.6191406 20.789062 L 4 19.710938 L 4 46 C 4 46.55 4.45 47 5 47 L 19 47 L 19 29 L 31 29 L 31 47 L 45 47 C 45.55 47 46 46.55 46 46 L 46 19.710938 L 47.380859 20.789062 C 47.570859 20.929063 47.78 21 48 21 C 48.3 21 48.589063 20.869141 48.789062 20.619141 C 49.129063 20.179141 49.049141 19.550938 48.619141 19.210938 L 25.619141 1.2597656 C 25.434141 1.1197656 25.2175 1.0507812 25 1.0507812 z M 35 5 L 35 6.0507812 L 41 10.730469 L 41 5 L 35 5 z"/></svg>
                <h1>Dashboard</h1>
            </div>
            <div className='left-body-assignment-card'>
                <div className='left-body-assignment-card-wrapper'>
                    <div className='left-body-assignemnt-add-btn'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px" className='svg-plus'><path d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"/></svg>
                    </div>
                </div>
                <div className='left-body-assignment-card-content'>
                    <h1>New Assignment?</h1>
                    <p>Select from pre-defined questions to have a quick turnaround.</p>
                </div>
                <button>Create New Assignment</button>
            </div>
        </div>
    </div>
  )
}

export default LeftBar