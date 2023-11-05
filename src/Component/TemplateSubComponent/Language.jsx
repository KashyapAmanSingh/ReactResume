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

export default Language