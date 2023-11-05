/* eslint-disable react/prop-types */
 
const Template34Qualification = ({QualificationDegree}) => {
  return (
    <div>
        
        {QualificationDegree.map((qualification, index) => {
                                            const {
                                                currently,
                                                degree,
                                                degreeDescription,
                                                schoolEndDate,
                                                schoolName,
                                                schoolStartDate
                                            } = qualification;

                                            return (
                                                <div className='mt-2' key={index}>
                                                    <p className='m-0 p-0'>{degree}</p>
                                                    <p className='m-0 p-0'>{schoolName}</p>
                                                    <p className='m-0 p-0'>{degreeDescription.slice(0, 10)}</p>
                                                    <p className='m-0 p-0'>{`${schoolStartDate} - ${currently ? "Ongoing" : schoolEndDate}`}</p>
                                                </div>
                                            );
                                        })}

    </div>
  )
}

export default Template34Qualification