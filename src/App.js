import { Stack, TextField } from "@mui/material";
import "./App.css";
import { Button } from "@mui/base";
import { useState } from "react";


function App() {

  const[principle,setPrinciple]=useState("")
  const[rate,setRate]=useState("")
  const[year,setYear]=useState("")

  //for the dummy value in interest section--initial value zero

  const[interest,setInterest]=useState(0)


  const calculateInterest =(e)=>{
    //when the submit button is clicked the page gets reloaded ...inorder to stop that we use the function e.preventDefault

    e.preventDefault()

    if(!principle || !rate || !year){
      alert("PLEASE FILL THE FORM COMPLETELY")

    }

    else{
      setInterest(principle*rate*year/100)
    }

  }

  const resetForm= ()=>{
    setPrinciple("")
    setRate("")
    setYear("")
    setInterest(0)
  }


  //to publish the react project use the code-- npm run build--it will create a build folder...use netify site






  return (
    <>
      <div  className="app">
        <div className="container">
          {/* Heading portion */}
          <div className="heading-text">
            <h3 style={{textAlign:'center'}} className="title">SIMPLE CALCULATOR</h3>
            <p style={{textAlign:'center'}} className="title-para">Calculate your simple interest</p>
          </div>

          <div className="amount-card">
            <div className="card-text">
              <h3 className="total-amount">₹{interest}</h3>
              <p className="total-para">Total Simple Interest</p>
            </div>
          </div>

          <form onSubmit={calculateInterest}>
            {/* there is a function for form ---onsubmit...give condition ie when the button is clicked ....for that give the type of the button as "submit" */}
            {/* to hold text feild */}

            <div className="text-fields">
              {/* principle amount */}

              <div className="input">
                {/* material ui should be impoted */}

                {/* value should be either value or reset */}
                <TextField value={principle || ""}
                  onChange={e=>setPrinciple(e.target.value)}
                  className="outlined-basic"
                  id="outlined-basic"
                  label="PRINCIPLE AMOUNT"
                  variant="outlined"
                />
              </div>

              {/* for interest */}

              <div className="input">
                <TextField   value={rate || ""}
                  onChange={e=>setRate(e.target.value)}
                  className="outlined-basic"
                  id="outlined-basic"
                  label="Rate of Interest (p.a)%"
                  variant="outlined"
                />
              </div>

              {/* year */}

              <div className="input">
                <TextField   value={year || ""}
                  onChange={e=>setYear(e.target.value)}
                  className="outlined-basic"
                  id="outlined-basic"
                  label="Time period"
                  variant="outlined"
                />
              </div>
            </div>

            <div className="btn-group">
              <Stack direction="row" spacing={2}>
                <Button type="submit" className="btn" style={{backgroundColor:"black",color:"white"}} variant="contained">CALCULATE</Button>
                <Button onClick={resetForm} className="btn" variant="outlined">RESET</Button>
              </Stack>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
