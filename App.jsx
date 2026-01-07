import react,{usestate} from 'react'
import { useState } from 'react'
function App(){
  const[name,setName]=useState("")
  const[email,setEmail]=useState("")
  const[Password,setPassword]=useState("")
  const[submittedData,setSubmittedData]=useState(null)
  const handleSubmit=()=>{
    e.preventDefault()
    const formdata={name,email,Password}
    setSubmittedData(formData);
    setName("")
    setEmail("")
    setPassword("")

  }
  return(
    <div>
    <h1>Form</h1>
    <form onsubmit={handleSubmit}>
    <label>name</label>
    <input type="text"
     placeholder='Enter your name' 
     value={name}
     onChange={(e)=>setName(e.target.value)} 
     />
     <label>Email</label>
     <input type="Email"
     placeholder='Enter your email' 
     value={email}
     onChange={(e)=>setEmail(e.target.value)} 
     />
     <label>Password</label>
     <input type="Password"
     placeholder='Enter your Password' 
     value={Password}
     onChange={(e)=>setPassword(e.target.value)} 
     />
     <button type="Submit">SUBMIT</button>
    </form>
    {submittedData &&(
      <div>
        <h2>SUBMITTED DATAS</h2>
        <p><strong>Name:</strong>{submittedData.name}</p>
        <p><strong>Email:</strong>{submittedData.Email}</p>
        <p><strong>Pasword:</strong>{submittedData.Pasword}</p>
      </div>
    )}
    </div>
  )
}
  export default App
