import React from 'react'
import { useFieldArray } from 'react-hook-form';
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


const EduField = ({ register, errors,control }) => {
  const {
    fields: QualificationDegreeFields,
    append: appendQualificationDegree,
    remove: removeQualificationDegree,
  } = useFieldArray({
    name: "QualificationDegree",
    control: control,
  });

  return (
    <div>
         {/* Fill Education Details */}
         <h1> Fill Education Details</h1>

<div className="form-group">
  {/* firstName Job title */}
  <label htmlFor="schoolName">School Name:</label>
  <input
    type="text"
    className="form-control"
    id="schoolName"
    {...register("Education.schoolName", {
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
<div className="form-group">
  <label htmlFor="schoolStartDate">School Start Date </label>
  <input
    type="date"
    className="form-control"
    id="schoolStartDate"
    {...register("schoolStartDate", {
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
<div className="form-group">
  <label htmlFor="schoolEndDate">School End Date </label>
  <input
    type="date"
    className="form-control"
    id="Education.schoolEndDate"
    {...register("schoolEndDate", {
      required: {
        value: true,
        message: "Please enter School  End Date ",
      },
    })}
    placeholder="Enter your  School  End Date  "
  />
  <p className=" "> {errors.schoolEndDate?.message}</p>
</div>

{/* tick if study is currently going */}
<div className="form-group">
  <label htmlFor="currently">Currently Ongoing</label>
  <input
    type="checkbox"
    id="currently"
    {...register("Education.currently")}
  />
</div>

{/* Degree of study  */}

<div>
  <h3> fields QualificationDegreeFields </h3>
  {QualificationDegreeFields &&
    QualificationDegreeFields?.map((field, index) => {
      return (
        <div key={field.id} className="form-group">
          <input
            type="text"
            {...register(
              `Education.QualificationDegree.${index}.degree`
            )}
            className="form-control"
          />
          {index > 0 && (
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => removeQualificationDegree(index)}
            >
               <DeleteForeverIcon/>
      
            </button>
          )}
        </div>
      );
    })}

  <button
    className="btn btn-danger"
    onClick={() => appendQualificationDegree({ degree: "" })}
  >
                 <AddIcon/>
  </button>
</div>

<div className="form-group">
  <label htmlFor="workSummaryDescription">Description</label>
  <textarea
    type="date"
    className="form-control"
    id="workSummaryDescription"
    {...register("Education.workSummaryDescription", {
      //   valueAsDate: true,
      required: {
        value: true,
        message: "Please enter work Summary Description",
      },
    })}
    placeholder="Enter your work Summary Description "
  />
  <p className=" "> {errors.workSummaryDescription?.message}</p>
</div>
    </div>
  )
}

export default EduField