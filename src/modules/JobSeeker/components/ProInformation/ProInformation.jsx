import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import "./ProInformation.css";
import { useState } from "react";

function ProInformation({ formData, setFormData }) {
  const [conter, setConter] = useState(3);
  return (
    <div className="Ah_proInfo_container">
      <Form>
        <Row>
          <Col xs={12} md={6} sm={6}>
            <div className="Ah_formFieldOfWork">
              <label className="Ah_formLabel" htmlFor="">
                Field of work
                <span className="Ah_formStar"> *</span>
                <span className="Ah_formSmallWrods">
                  (You can select more than one)
                </span>
              </label>
              <select
                className="Ah_formAllInput"
                type="text"
                value={formData.FiledOfWork}
                onChange={(changInfo) =>
                  setFormData({
                    ...formData,
                    FiledOfWork: changInfo.target.value,
                  })
                }
                placeholder="Example: focal X Agency"
              >
                <option value="">Select</option>
              </select>
            </div>
            {/* ------------------------------------------------------------- */}
            <div className="Ah_formExperience">
              <label className="Ah_formLabel" htmlFor="">
                Experience<span className="Ah_formStar"> *</span>{" "}
              </label>
              <input
                className="Ah_formAllInput Ah_formExper"
                type="text"
                value={conter}
                onChange={(conter) =>
                  setFormData({ ...formData, Experience: conter.target.value })
                }
              />
              <p
                className="Ah_buttExp1"
                onClick={() => {
                  setConter((conter) => conter + 1);
                }}
              >
                +
              </p>
              <p
                className="Ah_buttExp2"
                onClick={() => {
                  setConter((conter) => conter - 1);
                }}
              >
                -
              </p>
              <p className="Ah_year">year</p>
            </div>
            {/* ------------------------------------------------------------- */}
            <div className="Ah_formSalaryRange">
              <label className="Ah_formLabel" htmlFor="">
                Salary Range<span className="Ah_formStar"> *</span>{" "}
              </label>
              <select
                className="Ah_formAllInput"
                value={formData.SalaryRange}
                onChange={(changInfo) =>
                  setFormData({
                    ...formData,
                    SalaryRange: changInfo.target.value,
                  })
                }
              >
                <option value="">Example: 200,000 SP - 500,000 SP</option>
              </select>
            </div>
            {/* ------------------------------------------------------------- */}
            <div className="Ah_formCitiesOfWork ">
              <label className="Ah_formLabel" htmlFor="">
                City Of Work
                <span className="Ah_formStar"> *</span>
                <span className="Ah_formSmallWrods">
                  (You can select more than one)
                </span>
              </label>
              <select
                className="Ah_formAllInput"
                type="text"
                value={formData.CityOfWork}
                onChange={(changInfo) =>
                  setFormData({
                    ...formData,
                    CityOfWork: changInfo.target.value,
                  })
                }
              >
                <option>Select</option>
                {/* <option value="Damascus">Damascus</option>
                                <option value="Latakia">Latakia</option>
                                <option value="Aleppo">Aleppo</option>
                                <option value="Raqqa">Raqqa</option>
                                <option value="Al-Hasakah">Al-Hasakah</option>
                                <option value="Tartus">Tartus</option>
                                <option value="Hama">Hama</option>
                                <option value="Homs">Homs</option>
                                <option value="Deir ez-Zor">Deir ez-Zor</option>
                                <option value="Rif Dimashq">Rif Dimashq</option>
                                <option value="Quneitra">Quneitra</option>
                                <option value="Daraa">Daraa</option>
                                <option value="Al-Suwayda">Al-Suwayda</option>
                                <option value="A country outside Syria">A country outside Syria</option>  */}

              </select>
            </div>
            {/* ------------------------------------------------------------- */}
          </Col>

          <Col xs={12} md={6} sm={6}>
            <div className="Ah_formJobLevel">
              <label className="Ah_formLabel" htmlFor="">
                Job Level<span className="Ah_formStar"> *</span>{" "}
              </label>
              <select
                className="Ah_formAllInput"
                type="text"
                value={formData.JobLevel}
                onChange={(changInfo) =>
                  setFormData({ ...formData, JobLevel: changInfo.target.value })
                }
              >
                <option value="">Select</option>
                <option value="Beginner">Beginner</option>
                <option value="Junior">Junior</option>
                <option value="Mid">Mid</option>
                <option value="Senior">Senior</option>
                <option value="Expert">Expert</option>
              </select>
            </div>
            {/* ------------------------------------------------------------- */}
            <div className="Ah_formEducationallevel">
              <label className="Ah_formLabel" htmlFor="">
                Educational level<span className="Ah_formStar"> *</span>{" "}
              </label>
              <select
                className="Ah_formAllInput"
                type="text"
                value={formData.Educationallevel}
                onChange={(changInfo) =>
                  setFormData({
                    ...formData,
                    Educationallevel: changInfo.target.value,
                  })
                }
              >
                <option value="">Select</option>
                <option value="Beginner">High school diploma</option>
                <option value="Junior">College degree</option>
                <option value="Mid">Master degree</option>
                <option value="Senior">A Ph.DSenior</option>
              </select>
            </div>
            {/* ------------------------------------------------------------- */}
            <div className="Ah_formWorkType">
              <label className="Ah_formLabel" htmlFor="">
                Work Type <span className="Ah_formStar"> *</span>{" "}
              </label>
              <select
                className="Ah_formAllInput"
                type="text"
                value={formData.WorkType}
                onChange={(changInfo) =>
                  setFormData({ ...formData, WorkType: changInfo.target.value })
                }
              >
                <option value="">Example: full-time</option>
                <option value="Beginner">full Time</option>
                <option value="Junior">Part Time</option>
                <option value="Mid">Remotely</option>
                <option value="Senior">trainee</option>
              </select>
            </div>
            {/* ------------------------------------------------------------- */}
            <div className="Ah_formCurrentJobStatus">
              <label className="Ah_formLabel" htmlFor="">
                Current Job Status
              </label>
              <div className="Ah_radioCurrentJobStatus">
                <div className="Ah_radioForm">
                  <input
                    type="radio"
                    name="work"
                    value="openToWork"
                    checked={formData.jobStatus === "openToWork"}
                    onChange={(e) =>
                      setFormData({ ...formData, jobStatus: e.target.value })
                    }
                  />
                  <label className="Ah_GenderTybe">Open to work</label>
                </div>
                <div className="Ah_radioForm">
                  <input
                    type="radio"
                    name="gender"
                    value="employee"
                    checked={formData.jobStatus === "employee"}
                    onChange={(e) =>
                      setFormData({ ...formData, jobStatus: e.target.value })
                    }
                  />
                  <label className="Ah_GenderTybe">Employee</label>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default ProInformation;
