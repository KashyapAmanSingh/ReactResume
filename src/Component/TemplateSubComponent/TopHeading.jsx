<<<<<<< HEAD
/* eslint-disable react/prop-types */
 

const TopHeading = ( {firstName,jobTitle,lastName}) => {
  return (
    <div>
         <div className="text-center">
                <h3 className="fs-1 pt-4 fw-medium text-uppercase">{`${firstName}  ${lastName}`}</h3>
                <h5 className="fs-4 my-0 fw-medium pb-2">{jobTitle}</h5>
              </div>
    </div>
  )
} 

=======
/* eslint-disable react/prop-types */
 

const TopHeading = ( {firstName,jobTitle,lastName}) => {
  return (
    <div>
         <div className="text-center">
                <h3 className="fs-1 pt-4 fw-medium text-uppercase">{`${firstName}  ${lastName}`}</h3>
                <h5 className="fs-4 my-0 fw-medium pb-2">{jobTitle}</h5>
              </div>
    </div>
  )
} 

>>>>>>> 439afe43bfeef0a26b450ba7a0d315a866f1101c
export default TopHeading