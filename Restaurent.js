
import React, {useRef, useState, useEffect} from "react";
function Restaurent(props) {
    async function fetchData() {
        const response = await fetch('http://10.9.39.82:8000/api/setb');
        const dataCopy = await response.json();
        setData(dataCopy.data);
    }
    
  useEffect(()=>{
    fetchData();
})
    const [data, setData] = useState([]) 
    return(
    <>

{ data.map(function (data) {
          if (props.type == "All") {
          return <> 
   <div class="card mb-3" >
  <div class="row g-0">
    <div class="col-md-4">
      <img src={`http://10.9.39.82:8000/${data.image}`} class="img-fluid rounded-start" />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{data.name}</h5>
        <p class="card-text">{data.category}</p>
        <p class="card-text"><small class="text-muted">Price : {data.price}</small></p>
      </div>
    </div>
  </div>
</div>
          </>
        } else if (props.type == data.category) {
            return <> 
     <div class="card mb-3" >
    <div class="row g-0">
      <div class="col-md-4">
        <img src={`http://10.9.39.82:8000/${data.image}`} class="img-fluid rounded-start" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{data.name}</h5>
          <p class="card-text">{data.category}</p>
          <p class="card-text"><small class="text-muted">Price : {data.price}</small></p>
        </div>
      </div>
    </div>
  </div>
            </>
          } 

        })

      }
    </>
)}
export default Restaurent;