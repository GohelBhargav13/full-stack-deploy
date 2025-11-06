import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [data,setData] = useState([])

  useEffect(() => {

    fetch("http://13.53.201.56:5000/get-new")
    .then((res) => {
      console.log(res)
      if(!res.ok){
        throw new Error("This response is not okay")
      }

      return res.json()
    })
    .then((data) => {
      console.log(data)
      setData(data?.data)
    })
    .catch((err) => console.log("Error While fetching a data : ", err))

  },[])

  return (
    <>
      <h1 style={{ "textAlign":"center","marginTop":"60px" }}>Welcome to the profile-repo</h1>
      <div id='main'>
        { data.length > 0 && data.map((d,idx) => (
          <div key={idx} id='main-div'>
              <span>{ d?.name }</span>
              <ul>
                { d?.interest.map((skill,idx) => (
                  <li key={idx}>{ skill }</li>
                )) }
              </ul>
          </div>
        )) }
      </div>
    </>
  )
}

export default App
