import { useState } from "react"
import './Form.css';
import BusInformation from "../BusIformation/BusInformation";
import ConInformation from "../ConInformation/ConInformation";
import ProInformation from "../ProInformation/ProInformation";
import TermsConditions from "../TermsConditions/TermsConditions";
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from "react-bootstrap";
import { MdOutlineKeyboardDoubleArrowLeft } from 'react-icons/md'
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'
import { Link } from "react-router-dom";

export const Form = () => {

    const [page, setPage] = useState(0);
    //Form Data
    const [formData, setFormData] = useState({
        //page1
        fullName: "",
        // city: "",
        dateOfBirt: "",
        jobTitle: "",
        adrdress: "",
        //page2
        phoneNumber: "",
        facebook: "",
        linkedin: "",
        behance: "",
        //page3
        FieldOfWork: "",
        Experience: "",
        SalaryRange: "",
        CityOfWork: "",
        JobLevel: "",
        Educationallevel: "",
        WorkType: "",
        gender:"",
        jobStatus:""
    });
    //Title of pages
    const Ah_formTitle = ["Business Information", "Contact Information", "Professional Information", "Terms & Conditions"];
    const showPages = () => {
        if (page === 0) {
            return <BusInformation formData={formData} setFormData={setFormData} />
        }
        else if (page === 1) {
            return <ConInformation formData={formData} setFormData={setFormData} />
        }
        else if (page === 2) {
            return <ProInformation formData={formData} setFormData={setFormData} />
        }
        else {
            return <TermsConditions formData={formData} setFormData={setFormData} />
        }
    }

    const formSupmet = () => {
        setPage((numPage) => numPage + 1);
        console.log(formData.gender);
    }

    return (
        <Container>
            <Row className="roww-ah">
                <div className="Ah_Form">
                    {/* ---------------------------------------- */}
                    <div className="Ah_progresBar1" >
                        <div className="Ah_firstProg">
                            <span style={{ backgroundColor: "orange" }} className="Ah_circelPorg"></span>

                            <span style={{ backgroundColor: page === 1 || page === 2 || page === 3 ? "orange" : "" }} className="Line11" ></span>
                            <span style={{ backgroundColor: page === 1 || page === 2 || page === 3 ? "orange" : "" }} className="Ah_circelPorg"></span>

                            <span style={{ backgroundColor: page === 2 || page === 3 ? "orange" : "" }} className="Line11"></span>
                            <span style={{ backgroundColor: page === 2 || page === 3 ? "orange" : "" }} className="Ah_circelPorg"></span>

                            <span style={{ backgroundColor: page === 3 ? "orange" : "" }} className="Line11"></span>
                            <span style={{ backgroundColor: page === 3 ? "orange" : "" }} className="Ah_circelPorg"></span>
                        </div>
                    </div>
                    {/* ----------------------------------- */}
                    <div className="Ah_boxFormContainer">
                        <div className="Ah_formContainer">
                            <div className="Ah_formStart">
                                <p className="Ah_titleOfInfo">{Ah_formTitle[page]}</p>
                            </div>
                            <div className="Ah_formBody">
                                {showPages()}
                            </div>
                            <div className="Ah_formEnd ">
                                <button className="Ah_formEndBack" style={{ display: page === 0 ? "none" : "" }} disabled={page === 0}
                                    onClick={() => { setPage((numPage) => numPage - 1) }}><MdOutlineKeyboardDoubleArrowLeft /> Back</button>

                                <button className="Ah_formEndNext" style={{ display: page === 3 ? "none" : "" }} disabled={page === Ah_formTitle.length - 1}
                                    onClick={() => { setPage((numPage) => numPage + 1)  }} >Next <MdOutlineKeyboardDoubleArrowRight /> </button>

                                <button className="Ah_formEndNext" style={{ display: page === 0 ? "none" : page === 1 ? "none" : page === 2 ? "none" : "" }} 
                                    onClick={formSupmet}><Link className="Ah_formEndNext" to="/jopseekerprofile">Accept</Link> <MdOutlineKeyboardDoubleArrowRight /> </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Row>
        </Container>
    )
}
