import { Link } from 'react-router-dom'
import FormLogin from './FormLogin/FormLogin'
import './PageJobLoginStyle.css'

export default function PageJobLogin() {
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
                <p className=' account '>No account? </p>
                <Link to="/register" className='Create'>Create New One </Link>
            </div>
    </div>
    </>
    )
}
