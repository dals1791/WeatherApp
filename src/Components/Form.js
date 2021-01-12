import React, {useState} from "react"

const Form = (props) => {
    const [formData, setFormData] = useState({
        searchZip: ""
    })
    const handleChange =(event) => {
        // console.log("search is changing", event)
        setFormData({...formData, [event.target.name]: event.target.value})
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        props.Weather(formData.searchZip)
    }


    return (
        <div>
            
        <form onSubmit={handleSubmit}>
            <input 
                onChange={handleChange} 
                type="text" 
                name="searchZip"
                value={formData.searchZip}
                > 

            </input>
            
            <input 
                type="Submit"
                value="Submit">

            </input>
        </form>
        </div>
    )
}
export default Form