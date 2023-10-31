/* eslint-disable react/prop-types */
import { useFieldArray } from 'react-hook-form';
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


const EduField = ({ register, errors, control }) => {
  const {
    fields: QualificationDegreeFields,
    append: appendQualificationDegree,
    remove: removeQualificationDegree,
  } = useFieldArray({
    name: "QualificationDegree",
    control: control,
  });

  return (
    <div className=" EducationDetails border border-5 border-info">
      
      <h1 className='text-center text-center fw-bold py-2 px-1 '> Fill Education Details</h1>
 
      {QualificationDegreeFields &&
        QualificationDegreeFields?.map((field, index) => {

          return (

            <div key={field.id} className=" ">
              <div className='row'>
                {/* Qualification Degree */}
                <div className="col-sm-6">
                  <label className="form-label" htmlFor="education_field">Qualification Degree</label>
                  <input
                    type="text"
                    id="degree"
                    {...register(
                      `QualificationDegree.[${index}].degree`
                    )}
                    className="form-control  border border-1 border-dark"
                  />
                </div>
                {/* School Name */}
                <div className="col-sm-6">
                  <label className="form-label" htmlFor="schoolName">School/College Name:</label>
                  <input
                    type="text"
                    className="form-control border border-1 border-dark"
                    id="schoolName"
                    {...register(`QualificationDegree[${index}].schoolName`, {
                      minLength: {
                        value: 10,
                        message: "schoolName must have more then 3 character",
                      },
                      maxLength: {
                        value: 500,
                        message: "schoolName must less then 50 character",
                      },
                      required: {
                        value: true,
                        message: "Please enter a valid School Name ",
                      },
                    })}
                    placeholder="Enter School Name"
                  />
                  <p className=" "> {errors.schoolName?.message}</p>
                </div>

                {/* School Start Date  */}
                <div className="col-sm-6">
                  <label className="form-label" htmlFor="schoolStartDate">School Start Date </label>
                  <input
                    type="date"
                    className="form-control border border-1 border-dark"
                    id="schoolStartDate"
                    {...register(`QualificationDegree[${index}].schoolStartDate`, {
                      required: {
                        value: true,
                        message: "Please enter School Start Date",
                      },
                    })}
                    placeholder="Enter your School Start Date "
                  />
                  <p className=" "> {errors.schoolStartDate?.message}</p>
                </div>

                {/*School  End Date  */}
                <div className="col-sm-6">
                  <label className="form-label" htmlFor="schoolEndDate">School End Date </label>
                  <input
                    type="date"
                    className="form-control border border-1 border-dark"
                    id="Education.schoolEndDate"
                    {...register(`QualificationDegree[${index}].schoolEndDate`, {
                      required: {
                        value: true,
                        message: "Please enter School  End Date ",
                      },
                    })}
                    placeholder="Enter your  School  End Date  "
                  />

                  <div className=" ">
                    <label className="form-label" htmlFor="currently">Currently Ongoing</label>
                    <input
                      type="checkbox"
                      id="currently"
                      {...register(`QualificationDegree[${index}].currently`)}
                    />
                  </div>

                  <p className=""> {errors.schoolEndDate?.message}</p>
                </div>
                {/* Description */}
                <div className="col-sm-12">
                  <label className="form-label" htmlFor="degreeDescription">Description</label>
                  <textarea
                    type="date"
                    className="form-control border border-1 border-dark"
                    id="degreeDescription"
                    {...register(`QualificationDegree[${index}].degreeDescription`, {
                      //   valueAsDate: true,
                      required: {
                        value: true,
                        message: "Please enter degreeDescription",
                      },
                    })}
                    placeholder="Enter your degreeDescription "
                  />
                  <p className=" "> {errors.degreeDescription?.message}</p>
                </div>

                {index > 0 && (
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => removeQualificationDegree(index)}
                  >
                    <DeleteForeverIcon />

                  </button>
                )}
                 <button
                className="btn btn-danger mt-1 mx-3"
                onClick={() => appendQualificationDegree(
                  { degree: "", schoolName: ' ', schoolStartDate: ' ', schoolEndDate: ' ', currently: false, degreeDescription: ' ' }
                  )}
              >
                <AddIcon />
              </button>
              </div>
            </div>
          );
        })}

    </div>
  )
}

export default EduField