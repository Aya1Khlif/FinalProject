import { useState } from 'react';
import './FormLoginStyle.css'
import { RiEyeLine } from "react-icons/ri";
import google from './../../../assets/google.png' ;


export default function FormLogin() {


        const [inputFields, setInputFields] = useState([
            { email: '', password: '' }
        ])
    
        const handleFormChange = (index, event) => {
            let data = [...inputFields];
            data[index][event.target.name] = event.target.value;
            setInputFields(data);
            }
    

        const submit = (e) => {
            e.preventDefault();
            console.log(inputFields)
        }
        const[pass , setPass] = useState(false)
        const[password , setPasword] = useState("password")
        const passw = () => {
           
            if(pass === true){
                setPasword("text")
                
                setPass(false)
            }
            if(pass === false){ 
             setPasword("password")  
             setPass(true)
             }

        }

    return (
        <div className='HD_ContainerLogin'>
            <div className='form-box login'>
            <form onSubmit={submit}>

                    <div className='inputBox'>

                    {inputFields.map((input, index) => {
                return (

                <div key={index}>

                    <input 
                    type='email'
                    name='email' 
                    required placeholder='Enter your Business Email'
                    value={input.email}
                onChange={event => handleFormChange(index, event)}>
                    </input>

                        <label></label>
                    
                    <div className='inputBox'>
                        <input
                        type={password} 
                        name='password'
                        required placeholder='Enter your password'
                        value={input.password}
                        onChange={event => handleFormChange(index, event)}
                        >
                        </input>

                        </div>

                        </div>

                
)

})}   
                        <span className='icon' onClick={passw}><RiEyeLine/></span>
                        <label></label>
                    </div>
                    <div className='HD_forget'> 
                        <label><a href=''>forget password?</a></label>
                    </div>
                    <div className='btns'>
                    <button onClick={submit} className='btnlogin'>Create New Account</button>
                    <button className='btnGoogle'>
                        <img src={google} className='imgGoogle'/>
                        <p>Continue with Google</p>
                    </button>

                    </div>
                </form>

            </div>

        </div>
    )
    
}




    