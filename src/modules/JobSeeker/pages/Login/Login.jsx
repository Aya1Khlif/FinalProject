import React from 'react'
import { Form } from '../../components/Form/Form';

import AllNav from '../../../../components/NavBarAll/AllNav';


function Login() {
    return (
        <>
        <AllNav />
        <div className="Ah_formBody">
            <Form />
        </div>
        </>
    )
}

export default Login;