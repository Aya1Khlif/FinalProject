// import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import "./BusInformation.css";
import { useEffect, useState } from "react";
import axios from "axios";

function BusInformation({ formData, setFormData }) {
  // edait aya========================================================================
  const [city, setCity] = useState();

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/city", {
        headers: {
          Accept: "application/json",
          Authorization:
            "Bearer 3|XwWuItJBFP2r53PJxF8VPMjmLfZf04TSYlQbUutD9df44d01",
        },

      })
      .then((response) => {
        setCity(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log("error ", error);
      });
  }, []);

  //end aya=============================================================================
  return (
    <div className="Ah_busInfo_container">
      <Form>
        <Row>
          <Col xs={12} md={6} sm={6}>
            <div className="Ah_formFullName">
              <label className="Ah_formLabel" htmlFor="">
                Full Name<span className="Ah_formStar"> *</span>{" "}
              </label>
              <input
                className="Ah_formAllInput"
                type="text"
                placeholder="Example: focal X Agency"
                value={formData.fullName}
                onChange={(changInfo) =>
                  formData({ ...formData, fullName: changInfo.target.value })
                }
              />
            </div>

            <div className="Ah_formCity">
              <label className="Ah_formLabel" htmlFor="">
                City <span className="Ah_formStar"> *</span>
              </label>
              <select
                className="Ah_formAllInput"
                type="text"
                value={setCity.city}
                onChange={(changeInfo) =>
                  setCity({ ...setCity, city: changeInfo.target.value })
                }
              >
                {/*aya======================================================================*/}  
                {city?.map((e) => (
                  <option value={e.id}>{e.city_name}</option>                
                ))}
              </select>
              {/*aya--------------------------------------------------------*/}
            </div>

            <div className="Ah_formDateOfBirth">
              <label className="Ah_formLabel" htmlFor="">
                Date of Birthday
              </label>
              <input
                className="Ah_formAllInput"
                type="date"
                value={formData.dateOfBirt}
                onChange={(changInfo) =>
                  setFormData({
                    ...formData,
                    dateOfBirt: changInfo.target.value,
                  })
                }
              />
            </div>
          </Col>

          <Col xs={12} md={6} sm={6}>
            <div className="Ah_formJopTitle">
              <label className="Ah_formLabel" htmlFor="">
                Job Title <span className="Ah_formStar"> *</span>
              </label>
              <input
                className="Ah_formAllInput"
                type="text"
                placeholder="Example: Backend Developer"
                value={formData.jobTitle}
                onChange={(changInfo) =>
                  setFormData({ ...formData, jobTitle: changInfo.target.value })
                }
              />
            </div>

            <div className="Ah_formAddress">
              <label className="Ah_formLabel" htmlFor="">
                Address
              </label>
              <input
                className="Ah_formAllInput"
                type="text"
                placeholder="Example: Umayyad Square"
                value={formData.adrdress}
                onChange={(changInfo) =>
                  setFormData({ ...formData, adrdress: changInfo.target.value })
                }
              />
            </div>

            <div className="Ah_formGender">
              <label className="Ah_formLabel" htmlFor="">
                Gender
              </label>
              <div className="Ah_radioCurrentJobStatus">
                <div className="Ah_radioForm">
                  <input
                    type="radio"
                    name="gender"
                    value="mail"
                    checked={formData.gender === "mail"}
                    onChange={(changInfo) =>
                      setFormData({
                        ...formData,
                        gender: changInfo.target.value,
                      })
                    }
                  />
                  <label className="Ah_GenderTybe">Mali</label>
                </div>
                <div className="Ah_radioForm">
                  <input
                    type="radio"
                    name="gender"
                    value="famil"
                    checked={formData.gender === "famil"}
                    onChange={(e) =>
                      setFormData({ ...formData, gender: e.target.value })
                    }
                  />
                  <label className="Ah_GenderTybe">Famil</label>
                </div>
                <div className="Ah_radioForm">
                  <input
                    type="radio"
                    name="gender"
                    value="noProfrence"
                    checked={formData.gender === "noProfrence"}
                    onChange={(e) =>
                      setFormData({ ...formData, gender: e.target.value })
                    }
                  />
                  <label className="Ah_GenderTybe">No Profrence</label>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default BusInformation;
