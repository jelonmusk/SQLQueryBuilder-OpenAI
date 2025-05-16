import styles from './index.module.css'
import sqlLogo from './assets/sql-logo.png'
import { useState } from 'react'

function App() {
//Declares a state variable called queryDescription and a function to update it called setQueryDescription
//useState is a hook that allows you to add state to a functional component
//The initial value of queryDescription is an empty string
//The useState function returns an array with two elements: the current state value and a function to update it
// syntax : const [state, setState] = useState(initialState)

const {queryDescription,setQueryDescription} = useState("") 

const onSubmit = (e) =>{
  e.preventDefault() //this prevents the default behavior of the form submission
  console.log('Form submitted:', queryDescription )


}
  return (
          // below is the main component of the app
          // it is the main entry point of the app
          //we are importing the main component from the index.module.css file
           <main className={styles.main}>
            
              <img src = {sqlLogo} alt=""className = {styles.icon}     /> 
              <h3>Generate SQL with AI</h3>

              <form onSubmit={onSubmit}>
                <input 
                  type="text"
                  name = "query-description"
                  placeholder="Describe your query"
                  //onchange is an event handler that is called when the value of the input changes
                  //it takes a function as an argument
                  //the function takes an event object as an argument
                  //the event object has a target property that is the input element
                  //the value of the input is set to the queryDescription state variable
                  //syntax : <input onChange={handleChangeFunction} >
                  onChange = {(e) => setQueryDescription(e.target.value)}
                />

                <input type="submit" value="Generate SQL Query" />
              </form>
            </main>
  )
}

export default App
