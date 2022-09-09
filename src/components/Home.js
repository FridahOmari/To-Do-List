import React from 'react';
import "./Home.css"

function Home() {
  return (
    <div className="Container">
        <div className='section1'>
            <div className='sectiona'>
                <h1>CATEGORIZED TO-DO LIST</h1>
                <h2>An all in one to-do List to help you track your goals and get all your affairs in order.</h2>
                <h3>This App will guide you into properly Classifying your Tasks and Goals So as to increase Your Productivity and Efficiency and help you live a well Balanced & Happy Life.</h3>
                <h3>Use the Navigation Bar Above to see a brief Description of what each category entails.<br></br> Once you are familiar with each one of them, head over to the <em>Add New Task</em> tab to add Your own personalized Tasks, reminders and Goals. </h3>
            </div>
            <div className='sectionb'>
                <img src='https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=600' alt=' ' />
            </div>
        </div>
        <h1>What tasks do you do in a day?</h1>
        <div className='section2'>
            <div className='section2a'>
                <img src='https://images.pexels.com/photos/8837499/pexels-photo-8837499.jpeg?auto=compress&cs=tinysrgb&w=600' alt=' '/>
            </div>
            <div className='section2b'>
                <ul>
                    <li>“Perfection has to do with the end product, but excellence has to do with the process.” – Jerry Moran</li>
                    <li>“Excellence is a continuous process and not an accident.” A. P. J. Abdul Kalam</li>
                    <li>“We are what we repeatedly do. Excellence then is not an act, but a habit." Will Durant</li>
                    <li>“The road to excellence is always under construction.” Anonymous</li>
                </ul>
            </div>
        </div>
        
    </div>
  )
}

export default Home;