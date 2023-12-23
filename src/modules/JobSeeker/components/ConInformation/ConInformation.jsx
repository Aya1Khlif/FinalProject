import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import './ConInformation.css'


function ConInformation({ formData, setFormData }) {
    return (
        <div className="Ah_ConInfo_container">
            <Form>
                <Row>
                    <Col xs={12} md={6} sm={6}>
                        <div className="Ah_formPhoneNmber">
                            <label className='Ah_formLabel' htmlFor="">Phone Number<span className='Ah_formStar'> *</span> </label>
                            <input className='Ah_formAllInput' type="text" value={formData.phoneNumber} onChange={(changInfo) => setFormData({ ...formData, phoneNumber: changInfo.target.value })} placeholder='+963-' />
                        </div>
                        <div className="Ah_formFacebook">
                            <label className='Ah_formLabel' htmlFor="">Facebook Account</label>
                            <input className='Ah_formAllInput' type="text" value={formData.facebook} onChange={(changInfo) => setFormData({ ...formData, facebook: changInfo.target.value })} placeholder='Example: @taplin_33' />
                        </div>
                    </Col>

                    <Col xs={12} md={6} sm={6}>
                        <div className="Ah_formLinkedin">
                            <label className='Ah_formLabel' htmlFor="">Linked-in Account</label>
                            <input className='Ah_formAllInput' type="text" value={formData.linkedin} onChange={(changInfo) => setFormData({ ...formData, linkedin: changInfo.target.value })} placeholder='Example: @taplin_33' />
                        </div>
                        <div className="Ah_formBehance">
                            <label className='Ah_formLabel' htmlFor="">Behance Account</label>
                            <input className='Ah_formAllInput' type="text"  value={formData.behance} onChange={(changInfo) => setFormData({ ...formData, behance : changInfo.target.value })}  placeholder='Example: @taplin_33' />
                        </div>
                    </Col>
                </Row>

            </Form>
        </div>
    )
}

export default ConInformation