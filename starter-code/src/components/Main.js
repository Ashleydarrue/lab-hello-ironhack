import React, { Component } from 'react';
import '../App.css';

class Main extends Component {

  showLinks = () => {
    let arrayOfLinks = ['Home', 'About', 'Contact'];

    return (arrayOfLinks.map((eachLink, i)=>{
        if(eachLink.length > 3){
            return(
                <li key={i}>  {eachLink} </li>
                )
            }// end if
            })// end map
            )// end return
}

  render(){
  return (
       <main>
    <nav className="nav-bar">
     <h4>Ashley</h4>
        <ul>
           {this.showLinks()}
       </ul>
    </nav>
    
    <header className="theHeader">
      <h2>Time Tells All</h2>
    </header>

    </main>
  );
  }
}

export default Main;