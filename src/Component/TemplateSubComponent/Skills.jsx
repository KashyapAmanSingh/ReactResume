<<<<<<< HEAD
/* eslint-disable react/prop-types */
 

const Skills = ({KeySkills}) => {
  return (
    <div>
            <div className="skills m-0 d-flex flex-wrap">
                <h3 className="fs-4 p-0 mt-0 mb-0 skill-h">Skills</h3>
                {
                  KeySkills.map((skill, index) => (
                    <p className="my-1 mx-1 fw-medium" key={index}>{skill.skill},</p>
                  ))
                }
              </div>
    </div>
  )
}

=======
/* eslint-disable react/prop-types */
 

const Skills = ({KeySkills}) => {
  return (
    <div>
            <div className="skills m-0 d-flex flex-wrap">
                <h3 className="fs-4 p-0 mt-0 mb-0 skill-h">Skills</h3>
                {
                  KeySkills.map((skill, index) => (
                    <p className="my-1 mx-1 fw-medium" key={index}>{skill.skill},</p>
                  ))
                }
              </div>
    </div>
  )
}

>>>>>>> 439afe43bfeef0a26b450ba7a0d315a866f1101c
export default Skills