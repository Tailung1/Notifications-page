import { useState } from 'react'
import './App.css'
import data from "./data.json"
import NotiBody from './components/notiBody'
import Starter from './components/starter'

 function App() {
    const [notifications,setNotifications]=useState(data);
  return (
    <>
    <Starter notifications={notifications}
        setNotifications={setNotifications} />

    <main>
    {notifications.map((notification)=> (
    <NotiBody key={notification.id}
        notification={notification}
        notifications={notifications} 
        setNotifications={setNotifications}/>
    ))}
    </main>
    </>
  )
}

export default App
