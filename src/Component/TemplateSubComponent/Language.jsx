<<<<<<< HEAD
/* eslint-disable react/prop-types */


const Language = ({ Keylanguages }) => {
  return (
    <div>
      <div className="lang m-0 ">
        <div className="d-flex my-2 flex-wrap ">
          <h3 className="Languages-h fs-4">Language</h3>
{/* display the language  */}
          {Keylanguages.map((language, index) => (
            <div className="d-flex my-2 flex-wrap" key={index}>
              <p className="my-auto mx-1 fw-medium">{language.language},</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

=======
/* eslint-disable react/prop-types */
 

const Language = ({Keylanguages}) => {
  return (
    <div>
           <div className="lang m-0 ">
                <div className="d-flex my-2 flex-wrap ">
                  <h3 className="Languages-h fs-4">Language</h3>

                  {Keylanguages.map((language, index) => (
                    <div className="d-flex my-2 flex-wrap" key={index}>
                      <p className="my-auto mx-1 fw-medium">{language.language},</p>
                    </div>
                  ))}
                </div>
              </div>
    </div>
  )
}

>>>>>>> 439afe43bfeef0a26b450ba7a0d315a866f1101c
export default Language