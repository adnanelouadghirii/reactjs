import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createRoot } from 'react-dom/client';


/* Image Slider
const urlList = ['https://images.unsplash.com/photo-1682685797661-9e0c87f59c60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80']
let ImageSlider = () => {
  let [url, setUrl] = useState(urlList[0])
  let [count, setCount] = useState(0)
  let [deactivate_1, setDeactivate_1] = useState(false)
  let [deactivate_2, setDeactivate_2] = useState(true)

  let handleNext = () => {
    if (count<urlList.length - 1){
      setCount(count + 1)
      setUrl(urlList[count+1])
      setDeactivate_2(false)
    }
    if (count === urlList.length - 2){
      setDeactivate_1(true)
    }

    }
    let handlePrev = () => {
      if (count>0){
        setCount(count -1)
        setUrl(urlList[count-1])
        setDeactivate_1(false)
      }
      if (count ===1){
        setDeactivate_2(true)
      }
  
      }

  

  return <div>
    <img src={url} height={300} width={400} />
    <button className='prev-button' onClick={handleNext} disabled={deactivate_1}>Next</button>
    <button className='prev-button' onClick={handlePrev} disabled={deactivate_2}>Prev</button>
  </div>
}
*/


/* Contct Manager
let Form = () => {

  const [contact, setContact] = useState('')
  const [contactList, setContactList] = useState([])

  let handleChange = (event) => {
    setContact(event.target.value)
  }

  let handleSubmit = (event) => {
    event.preventDefault()
    setContactList([...contactList, contact])
    setContact('')
   
  } 

  return <div className='container'>
      <h1>Contact Manager</h1>
    <form onSubmit={handleSubmit}>
    <input type='text'  placeholder='Enter Contact Name' onChange={handleChange} value={contact}/>
    <input type='submit' value='Add Contact'/>
    <List list={contactList}/>
  </form>
  </div>
  
}


let List = (props) => {
  let list = props.list
  let elements = list.map((val, index)=>
    <li key={index}>{val}</li>
  )
  return <ul className="custom-list">
    {elements}
  </ul>
}
*/


/* One Way Data Binding
const ParentComponent = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1); // Updating the state in the parent component
  };

  return (
    <div>
      <ChildComponent count={count} onIncrement={handleIncrement} />
    </div>
  );
};

const ChildComponent = ({ count, onIncrement }) => {
  return (
    <div>
            <h2>Count: {count}</h2>
      <button onClick={onIncrement}>Increment Count</button>
    </div>
  );
};
*/


const root = createRoot(document.getElementById('root'));

root.render(<ImageSlider/>);  