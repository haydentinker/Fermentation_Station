import React, {useState} from 'react'

export const ProjectForm = ({addProject}) => {
  const [value,setValue]=useState("")
  const handleSubmit = e=>{
    e.preventDefault();
    addProject(value);
    setValue("")
  }
  return (
    <form className="ProjectForm" onSubmit={handleSubmit}><input type="text" className="ProjectInput" placeholder='What is the project?'
    value={value} onChange={(e)=>setValue(e.target.value)}/>
    <button type="submit" className='project-btn'>Submit</button>
    </form>
  )
}

