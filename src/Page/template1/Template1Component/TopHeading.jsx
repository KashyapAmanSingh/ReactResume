/* eslint-disable react/prop-types */
 

const TopHeading = ( {firstName,jobTitle,lastName}) => {
  return (
    <div>
         <div className="text-center">
                <h3 className="fs-1 mt-4 fw-medium text-uppercase">{`${firstName}  ${lastName}`}</h3>
                <h5 className="fs-4 my-1 fw-medium">{jobTitle}</h5>
              </div>
    </div>
  )
} 

export default TopHeading