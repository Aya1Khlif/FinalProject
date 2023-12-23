import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
    return (
        <div> 
            <div className='HD_footer'>
                <div className='HD_footer section_padding'>
                    <div className='HD_footer-divs'>

                    <div className='HD_footer-div'>
                        <h4>Job</h4>
                        <Link>Search Employee</Link>
                        <Link className='endp'>Search Job</Link>
                    </div>

                    <div className='HD_footer-div'>
                        <h4>Freelance</h4>
                        <Link>Search Freelance</Link>
                        <Link className='endp'>Search Services</Link>
                    </div>

                    <div className='HD_footer-div'>
                        <h4>Blog</h4>
                        <Link>Search Blogs</Link>
                        <Link className='endp'>Add Blog</Link>
                    </div>

                    <div className='HD_footer-div'>
                        <h4>Internship</h4>
                        
                        <Link>Registeration</Link>
                        <Link className='endp'>Search</Link>
                       
                    </div>

                    
                    <div className='HD_footer-div'>
                        <h4 >Keep in Touch</h4>
                        <p>focal-x@focalapp.com</p>
                        <p className='endp'> +963 994 975 318</p>
                    
                    </div>


                    </div>
                </div>
            <div className='HD_footer-below'>
                <div className='HD_footer-text'>
                    <p>
                    © 2021 - 2022 focal X agency All Right Reserved
                    </p>
                </div>
                <hr className='line'></hr>
            </div>

            </div>
        </div>
    )
}
