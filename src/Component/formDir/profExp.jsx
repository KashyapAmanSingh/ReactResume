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

    <div className="professionalExperience border border-5 border-info rounded-top rounded-bottom">
      <h1 className="fw-bold mb-4 text-center">Professional Experience</h1>
 
        {ExperienceFields &&
          ExperienceFields?.map((field, index) => {
            return (
              <div key={field.id} className=" ">
                <div className='row'>
                  <div className="col-sm-6">
                    <label className="fw-bold form-label" htmlFor="positionTitle">Position Title:</label>
                    <input
                      type="text"
                      className="form-control  border border-1 border-dark
"
                      id="positionTitle"
                      name="positionTitle"
                      {...register(`moreExperienceFields[${index}].positionTitle`, {
                        required: {
                          value: true,
                          message: "Please enter a valid Position Title",
                        },
                      })}
                      placeholder="Enter your  Position Title"
                    />
                    <p className=" "> {errors.positionTitle?.message}</p>
                  </div>

                  <div className="col-sm-6">
                    <label className="fw-bold form-label" htmlFor="companyName">Company Name:</label>
                    <input
                      type="text"
                      className="form-control  border border-1 border-dark"
                      id="companyName"
                      name="companyName"
                      {...register(`moreExperienceFields[${index}].companyName`, {
                        required: {
                          value: true,
                          message: "Please enter a valid Company Name",
                        },
                      })}
                      placeholder="Enter your  Company Name"
                    />
                    <p className=" "> {errors.companyName?.message}</p>
                  </div>

                  <div className="col-sm-6">
                    <label className="fw-bold form-label" htmlFor="startDate"> Start Date </label>
                    <input
                      type="date"
                      className="form-control  border border-1 border-dark"
                      id="startDate"
                      {...register(`moreExperienceFields[${index}].startDate`, {
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

                  <div className="col-sm-6">
                    <label className="fw-bold form-label" htmlFor="endDate"> End Date </label>
                    <input
                      type="date"
                      className="form-control  border border-1 border-dark"
                      id="endDate"
                      {...register(`moreExperienceFields[${index}].endDate`, {
                        //   valueAsDate: true,
                        required: {
                          value: true,
                          message: "Please enter End Date ",
                        },
                      })}
                      placeholder="Enter your  End Date "
                    />
                    <label className="fw-bold form-label" htmlFor="currently">Currently Ongoing</label>
                    <input
                      type="checkbox"
                      id="currently"
                      {...register(`moreExperienceFields[${index}].currently`)}
                    />
                    <p className=" "> {errors.endDate?.message}</p>
                  </div>
                  
                  <div className="col-sm-6">
                    <label className="fw-bold form-label" htmlFor="workSummary">Work Summary</label>
                    <textarea
                      type="date"
                      className="form-control  border border-1 border-dark"
                      id="workSummary"
                      {...register(`moreExperienceFields[${index}].workSummary`, {
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

                  <div className="col-sm-6">
                    <label className="fw-bold form-label" htmlFor="Experienc"> Add More Experience</label>
                    <textarea
                      type="text"
                      id='Experienc'
                      {...register(
                        `moreExperienceFields[${index}].experience`
                      )}
                      className="form-control  border border-1 border-dark"
                    />
                  </div>
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
                    className="btn btn-danger mx-2 my-2"
                    onClick={() => appendmoreExperience(  {
                      experience: '',
                      companyName: '',
                      currently: false,
                      endDate: '',
                      positionTitle: '',
                      startDate: '',
                      workSummary: '',
                    },)}
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

export default ProfExp