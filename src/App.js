import React, { Component } from 'react';
//import {Grid, Jumbotron} from 'react-bootstrap';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  state = {
    persons: [
      { id:"01",  name:'Max', age:28},
      { id:"02", name:'Max1', age:21},
      { id:"03", name:'Max2', age:23}
    ],
    otherState: 'some other value',
    showPerson: false  
  }
  deletePersonHandler = (personIndex) =>{
  const persons = [...this.state.persons];
  persons.splice(personIndex, 1);
  this.setState({persons, persons});
  }
    nameChangedHandler = (event, id) => {
     //console.log("was clicked");
     const personIndex = this.state.persons.findIndex(p => {
       return p.id ===id;
     });

     const person = {
       ...this.state.persons[personIndex]
     };
      person.name= event.target.value;

      const persons = [...this.state.persons];
      persons[personIndex]= person;

     this.setState({persons:persons});
   }
    togglePersonhandler = () =>{
     const doesShow = this.state.showPerson;
     this.setState({showPerson: !doesShow})
    }
  render () {
    const style = {
      backgroundColor:'green',
      font:'inherit',
      cursor:'pointer',
      padding:'8px',
      color:'white',
    };

    let persons = null;
    if( this.state.showPerson ){
      persons = (
        <div> 
          {this.state.persons.map((person,index) => {
            return <Person 
            click={() =>this.deletePersonHandler(index)}
            name={person.name} 
            age={person.age} 
            key={person.id}
            changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
         
        </div>
      );
      style.backgroundColor='red';
    }
    const classes = [];
    if (this.state.persons.length <= 2){
      classes.push('red');
    }
   
    if(this.state.persons.length <= 1){
      classes.push('bold');
    }
    return (
      
      <div  className="heading">
      <h1>Now I'm in actuall syntax</h1>
      <p className={classes.join(' ')}> It's working now.</p>
      <button 
      style={style}
      onClick={this.togglePersonhandler}>Toggle Persons</button>
      {persons}
      </div>
    
    ); 
    //return React.createElement('div', null, React.createElement('h1',null,"now i m under the h1 element"));
  }
      }

export default App;
