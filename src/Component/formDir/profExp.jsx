/* eslint-disable react/prop-types */

import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useFieldArray } from 'react-hook-form';

const ProfExp = ({ register, errors, control }) => {
  const {
    fields: ExperienceFields,
    append: appendmoreExperience,
    remove: removemoreExperience,
  } = useFieldArray({
    name: "moreExperienceFields",
    control: control,
  });



  return (

    <div className="professionalExperience">
      <div className="row">


        <h1 className="my-5 py-5">Professional Experience</h1>
        {/* Position Title */}
        <div className="col-sm-6">
          <label className="form-label" htmlFor="positionTitle">Position Title:</label>
          <input
            type="text"
            className="form-control"
            id="positionTitle"
            name="positionTitle"
            {...register("professionalExperience.positionTitle", {
              required: {
                value: true,
                message: "Please enter a valid Position Title",
              },
            })}
            placeholder="Enter your  Position Title"
          />
          <p className=" "> {errors.positionTitle?.message}</p>
        </div>
        {/*Company name  */}
        <div className="col-sm-6">
          <label className="form-label" htmlFor="companyName">Company Name:</label>
          <input
            type="text"
            className="form-control"
            id="companyName"
            name="companyName"
            {...register("professionalExperience.companyName", {
              required: {
                value: true,
                message: "Please enter a valid Company Name",
              },
            })}
            placeholder="Enter your  Company Name"
          />
          <p className=" "> {errors.companyName?.message}</p>
        </div>

        {/* Start Date  */}
        <div className="col-sm-6">
          <label className="form-label" htmlFor="startDate"> Start Date </label>
          <input
            type="date"
            className="form-control"
            id="startDate"
            {...register("professionalExperience.startDate", {
              //   valueAsDate: true,
              required: {
                value: true,
                message: "Please enter start Date",
              },
            })}
            placeholder="Enter your   start Date "
          />
          <p className=" "> {errors.startDate?.message}</p>
        </div>

        {/* End Date  */}
        <div className="col-sm-6">
          <label className="form-label" htmlFor="endDate"> End Date </label>
          <input
            type="date"
            className="form-control"
            id="endDate"
            {...register("professionalExperience.endDate", {
              //   valueAsDate: true,
              required: {
                value: true,
                message: "Please enter End Date ",
              },
            })}
            placeholder="Enter your  End Date "
          />
          <label className="form-label" htmlFor="currently">Currently Ongoing</label>
          <input
            type="checkbox"
            id="currently"
            {...register("professionalExperience.currently")}
          />
          <p className=" "> {errors.endDate?.message}</p>
        </div>

        {/* <div className="col-sm-6">
            <label  className="form-label" htmlFor="currently">Currently Ongoing</label>
            <input
              type="checkbox"
              id="currently"
              {...register("professionalExperience.currently")}
            />
          </div> */}
<div className='row'>
     {/* Add more experience */}
  
 
    {/* Work Summary */}
 
        <div className="col-sm-6">
          <label className="form-label" htmlFor="workSummary">Work Summary</label>
          <textarea
            type="date"
            className="form-control"
            id="workSummary"
            {...register("professionalExperience.workSummary", {
              //   valueAsDate: true,
              required: {
                value: true,
                message: "Please enter workSummary",
              },
            })}
            placeholder="Enter your workSummary "
          />
          <p className=" "> {errors.workSummary?.message}</p>
        </div>
        {ExperienceFields &&
          ExperienceFields?.map((field, index) => {
            return (
              <div key={field.id} className="col-sm-5">
                <label className="form-label" htmlFor="Experienc"> Add More Experience</label>

                <textarea
                  type="text"
                  id='Experienc'
                  {...register(
                    `professionalExperience.moreExperienceFields.${index}.experience`
                  )}
                  className="form-control"
                />
                {index > 0 && (
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => removemoreExperience(index)}
                  >
                    <DeleteForeverIcon />

                  </button>
                )}
                   <button
          className="btn btn-danger mx-2"
          onClick={() => appendmoreExperience({ number: "" })}
        >

          <AddIcon />
        </button>
              </div>
            );
          })}
 
      </div>
      </div>

    </div>


  )
}

export default ProfExp