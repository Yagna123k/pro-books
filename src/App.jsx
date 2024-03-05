import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [data, setData] = useState([]);

  useEffect(()=>{
    axios.get("https://reactnd-books-api.udacity.com/books",{ headers: { 'Authorization': 'whatever-you-want' }})
    .then(res=>{
      setData(res.data.books)
      console.log(data.books)
    })
    .catch(err=>{
      console.log(err)  
    })
  },[data.books])

  return (
    <div id='website'>
      {data.map((item) => {
        return(
          <div key={item.id} style={{padding:"10px 0px"}}>
            <h3 style={{textAlign:"left"}}>{item.title}</h3>
            {console.log(data)}
            <div style={{display:"flex"}}>
              <img src={item.imageLinks.smallThumbnail} alt="thumbnailImage"></img>
              <p style={{marginLeft:"10px"}}>{item.description}</p>
            </div>
            <div style={{textAlign:"left",fontStyle:"italic"}}>
              {item.authors.map((author,index)=>
                <span key={index}>{author} </span>
              )}
            </div>
            
            <hr />
          </div>
        )
      })}
    </div>
  );
}

export default App;