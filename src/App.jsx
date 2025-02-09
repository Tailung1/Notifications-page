import { useState } from 'react'
import './App.css'
import data from "./data.json"

 function App() {
   const [notifications,setNotifications]=useState(data);
  return (
    <>
        <section>
            <h2>Notifications 3</h2>
            <p>Mark all as read</p>
        </section>
        
        <main>
        {data.map((notification)=> (
            <div key={notification.id} className='not-div'
            style={!notification.isRead?{backgroundColor:"green"}:null}>
                <img src={notification.profilePic} alt="" />
                <span style={{color:"pink"}}>{notification.username}</span>
                <span>{notification.action}</span>
                <span>{notification.isRead}</span>
                {notification.groupName?
                <p style={{color:'blue'}}>{notification.groupName}</p>: null}
                {!notification.isRead? <div className='circle'> </div>:null}
          </div>
        ))}
        </main>
    </>
  )
}

export default App
