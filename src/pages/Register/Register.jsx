
import FormLogin from './FormLogin/FormLogin'
import './RegisterStyle.css'

export default function Register () {
    return (
        <>
        <div className='HD_section-JobLogin'>
        <div className='HD_boxTitlle'>
            <h1 className='HD_titlle'>Create New Account as</h1>
            <div className='HD_box'>
                <p className='BusinessOwner'>Business Owner</p>
                <p className='jobSeeker'>Job Seeker</p>
            </div> 
            <p className='p'>Create an account to hire a new employee.</p>
        </div>
        <FormLogin/>

        <div className='HD_boxTwo'>
                <p className=' p'>By Signing up you agree to the <span>terms</span> of use and <span>privacy policy</span></p>
        </div>
    </div>
    </>
    )
}
