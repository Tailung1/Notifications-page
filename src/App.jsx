import { useState } from 'react'
import './App.css'
import data from "./data.json"

 function App() {
   const [notifications,setNotifications]=useState(data);
   const [counter, setCounter]=useState(notifications.filter(noti =>
    !noti.isRead).length)


    const changeStatus=(id)=> {
        const updatedNotifications=notifications.map((notification)=> {
            if(notification.id === id) {
                return {...notification,isRead:true}
            }
            return notification
        })
        setNotifications(updatedNotifications)
        const clickedNotifications=notifications.find(noti =>
            noti.id === id)
            if(!clickedNotifications.isRead) {
                setCounter(counter-1)
            }
          
    }

    const markAllAsRead=()=>{
        const allRead=notifications.map((noti)=> {
            return {...noti,isRead:true}
        })
        setNotifications(allRead)
        setCounter(0)
    }

  return (
    <>
        <section>
            <h2>Notifications {counter}</h2>
            <p style={{cursor:"pointer"}} onClick={markAllAsRead}>Mark all as read</p>
        </section>
        
        <main>
        {notifications.map((notification)=> (
            <div onClick={()=>changeStatus(notification.id)}  key={notification.id} className='not-div'
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
