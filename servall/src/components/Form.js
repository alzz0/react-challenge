import React from "react";

const Form = props=>(
    
  <form onSubmit={props.getMember}>
    <input required type="text" name="postal" placeholder="Postal Code.."/>
    <button>Submit</button>
   </form>

                    )
export default Form