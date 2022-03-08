import React, { useState } from 'react'
import Options from '../Pages/Options'
import Recipe from '../components/Recipe'
import axios from 'axios'
import{ Button} from 'react-bootstrap'

function Search() { 
  const [formState, setFormState] = useState({
      protein: '',
      peanutFree: false, 
  })
  const rootURL = "https://api.edamam.com/search?";
  const apiKey = "&app_key=c0baa345e633fba28dd95821b2cec992";
  const appId = "&app_id=9ace14ad";
  const param1 = "q=chicken";
  const param2 = "&Health=peanut-free";
  const param3 = "&mealType=Lunch";
  const [proteinSelection, setProteinSelection] = useState("");
  const [responseData, setResponseData] = useState([]);
  const handleProteinSelect = (e) => {
    setProteinSelection(e)
    console.log(e)
  }

  const onChange = (e) => {
      const checked = e.target.checked;
      const newFormInfo = {
          ...formState, [e.target.name]:e.target.value
      }
      setFormState(newFormInfo)
  } 
  
  const testAPI = rootURL + param1 + appId + apiKey + param2 + param3;
  const submitButton = (e) => {
      axios.get(testAPI).then(res => {
        //   let responseData = res.data 
        console.log(res.data.hits)
        // setResponseData(res.data.hits)
      })
    //   console.log('formState'+formState)
  }
    return (
        <div>
            <Button onClick={()=> submitButton()}>submit</Button>
            {/* <Options submitButton = {submitButton} formState = {formState} onChange = {onChange}/> */}
            {/* {responseData.map(data => <Recipe data={data}/>)}  */}
    {/* <Recipe/> */}
        </div>
    )
}

export default Search;