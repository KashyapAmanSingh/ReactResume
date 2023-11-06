/* eslint-disable react/prop-types */
 import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
 
const ProfessionalExperience = ({moreExperienceFields}) => {
  return (
    <div>
              <div className="professionalExp">
                {moreExperienceFields.map((experience, index) => {
                            // Destructure the fields from the experience object

                  const {
                    companyName,
                    currently,
                    endDate,
                    experience: PersonalExperience,
                    positionTitle,
                    startDate,
                    workSummary,
                  } = experience;

                  return (
                    <div key={index}>
                      <h3 className="fw-bold mt-2">Professional Experience {index + 1}</h3>
                      <div className="experience">
                        <div className="d-flex text-center align-middle">
                          <h6 className="m-0">{positionTitle}</h6>
                          <h6 className="text-info fw-bold mx-2">at</h6>
                          <h6 className="m-0 fw-medium">{companyName}.</h6>
                        </div>

                        <p className="small m-0">
                          <CalendarMonthIcon />
                          {`${startDate} - ${currently ? "Ongoing" : endDate}`}

                        </p>
                        <h6 className="my-1">Summary </h6>
                        <p className="text-center">{workSummary.slice(0, 60)}  </p>
                        <p className="text-center">{PersonalExperience.slice(0, 20)}  </p>
                      </div>
                    </div>
                  );
                })}
              </div>
    </div>
  )
}

export default ProfessionalExperience