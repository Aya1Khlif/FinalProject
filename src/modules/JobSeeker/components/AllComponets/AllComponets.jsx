
import Content from '../ContReusem/Content'
import { Col, Row } from 'react-bootstrap'
import './AllComponets.css'
import Experience from '../Experience/Experience'
import SkillsList from '../SkillsList/SkillsList'
import LanguagesList from '../LanguagesList/LanguagesList'
const AllComponets = () => {
  return (
   <>
   {/* pages for allcomponents */}

       <div className='br-As-main-component'> 
       {/* ------------------------------------ */}
      <Row>
        <Col className='mb-3' col={12} ><Content  /> </Col>
        </Row>
        
        {/* ------------------------------------ */}
        <Row>
       <Col  col={12}  className="mb-3 br-As">
        <Row>
        <Experience/>
        </Row>
          </Col>
       </Row>
       <Row>
  
   <Col lg={6} md={12} className="mb-3"> <SkillsList/>  </Col>
   <Col  lg={6} md={12} className="mb-3"> <LanguagesList/> </Col>
</Row>
<Row>
<div className="rn-div-btn">
        <button className="rn-save-data">
          Save Information
        </button>
      </div>
</Row>
       </div>
        </>   
  )
}

export default AllComponets