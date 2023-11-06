/* eslint-disable react/prop-types */

import SchoolIcon from '@mui/icons-material/School';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import DescriptionIcon from '@mui/icons-material/Description';


const Education = ({ QualificationDegree }) => {
    return (
        <div>
            <div className="Education">
                <h5>Educational Details</h5>

                {QualificationDegree.map((qualification, index) => {
                    // destructuring the QualificationDegree 
                    const {
                        currently,
                        degree,
                        degreeDescription,
                        schoolEndDate,
                        schoolName,
                        schoolStartDate,
                    } = qualification;

                    return (
                        <div key={index}>
                            <SchoolIcon /> {schoolName}
                            <br />
                            <p className="d-flex small">
                                <CalendarMonthIcon />
                                {`${schoolStartDate} - ${currently ? "Ongoing" : schoolEndDate}`}
                            </p>
                            <p className="m-0">
                                <WorkspacePremiumIcon /> {degree}
                            </p>
                            <p className="d-flex small">
                                {`${schoolStartDate} - ${currently ? "Ongoing" : schoolEndDate}`}
                            </p>
                            <p className="small text-center">
                                <DescriptionIcon /> {degreeDescription}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Education;

