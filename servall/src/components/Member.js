import React from "react";

const Member =props=>(
     <div>
            {props.name && <h1>Name: { props.name}</h1>}
            {props.photo_url &&  <img src={props.photo_url} />}
            {props.party_name &&  <p>Party Name: {props.party_name}</p>}
            {props.personal_url &&  <p>Website: {props.personal_url}</p>}
            {props.email &&  <p>Email: {props.email}</p>}
            {props.error && <p>{props.error}</p>} 
     </div>

    );

export default Member