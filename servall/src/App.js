//INITIAL IMPORTS
import React from 'react';
import Title from "./components/Title";
import Form from "./components/Form";
import Member from "./components/Member";
import './App.css';


//This API enables cross-origin requests to anywhere.
const cors ="https://cors-anywhere.herokuapp.com/"
class App extends React.Component {
    state={
        name:undefined,
        party_name:undefined,
        photo_url:undefined,
        personal_url:undefined,
        email:undefined,
        error:undefined
        
    }
    
    getMember= async (e) => {
        //prevent browerser from refreshing
        e.preventDefault();
        //uppercase postal code and remove white space.
        const postal = e.target.elements.postal.value.toUpperCase().replace(/\s/g, "");
        //fetching api
        const api_call= await fetch(`${cors}https://represent.opennorth.ca/postcodes/${postal}/?format=apibrowser/api`);
        const data = await api_call.json();
        
        if(postal){
            this.setState({
                name:data.representatives_centroid[3].name,
                party_name:data.representatives_centroid[3].party_name,
                photo_url:data.representatives_centroid[3].photo_url,
                personal_url:data.representatives_centroid[3].personal_url,
                error:""
        })
            
        }else{
            
            this.setState({
                name:undefined,
                party_name:undefined,
                photo_url:undefined,
                personal_url:undefined,
                error:"Please Enter a valid postal code"
            
        })
     
    }
    }
  render() {
    return (
        <div>
            <div className="Wrapper">
                <div className="main">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-5 title-container">
                            <Title/>
                            </div>
                            <div className="col-sm-7 form-container">
                                <Form getMember={this.getMember}/>
                                <Member
                                    name={this.state.name}
                                    party_name={this.state.party_name}
                                    photo_url={this.state.photo_url}
                                    personal_url={this.state.personal_url}
                                    email={this.state.email}
                                    error={this.state.error}
                                    />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    );
  }
}

export default App;
