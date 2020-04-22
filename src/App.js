import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import DatePicker from 'react-date-picker';





class  App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      mail: '',
      date: ''
    }

    this.fnameValidator = this.fnameValidator.bind(this);
    this.lnameValidator = this.lnameValidator.bind(this);
    this.mailValidator = this.mailValidator.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange = date => {
    this.setState({ date });




      

  //set date based on birthday at 01:00:00 hours GMT+0100 (CET)
      var myBirthday = new Date(date);

  // set current day on 01:00:00 hours GMT+0100 (CET)
      var currentDate = new Date().toJSON().slice(0,10)+' 01:00:00';
      
  // calculate age comparing current date and borthday
      var myAge = ~~((Date.now(currentDate) - myBirthday) / (31557600000));

      if(myAge < 18) {
        alert("User should be 18 years Old")
        this.setState({date: ''});
      }
  }
  


  handleSubmit(event) {
    if(this.state.fname == ''){
      alert("Please Input First Name");
      event.preventDefault();
    }
    if(this.state.lname == ''){
      alert("Last Name is mandatory");
      event.preventDefault();
    }
    if(this.state.mail == ''){
      alert("Enter Email Address")
        event.preventDefault();
    }else if(!(this.state.mail.includes("@"))){

      alert("Enter Valid Email");
      this.setState({mail: ''});
      event.preventDefault();
    }else if(!(this.state.mail.includes(".co") || this.state.mail.includes(".org"))){

       alert("Enter Valid Email");
      this.setState({mail: ''});
      event.preventDefault();
        
      }
      if(this.state.date == ''){
        alert("Please enter Date of Birth");
        event.preventDefault();
      }
      

  }
  

  




  fnameValidator(event) {
    this.setState({fname: event.target.value});
  }

  lnameValidator(event) {
    this.setState({lname: event.target.value});
  }

  mailValidator(event) {
    this.setState({mail: event.target.value});
  }

render(){
  return (
    <div className="App">
      <header className="App-header">
      <form onSubmit={this.handleSubmit}>
      <div id="sc-edprofile">
       <div className="sc-container">
          <input type="text" placeholder="First Name" value={this.state.fname} onChange={this.fnameValidator}/>
          <input type="text" placeholder="Last Name" value={this.state.lname} onChange={this.lnameValidator}/>
          <input type="text" placeholder="Email"  value={this.state.mail} onChange={this.mailValidator}/>

          

          <input type="digit" placeholder="Contact Number"/>
          <label>
           Choose Date of Birth:
          <DatePicker className="date"
          onChange={this.onChange}
          value={this.state.date}
          />
          </label>
            <select>
              <option value="">Male</option>
              <option value="">Female</option>
            </select>
          <input type="submit" value="Register"/>
        </div>
        </div>
        </form>
      </header>
    </div>
  );

}
  
}

export default App;
