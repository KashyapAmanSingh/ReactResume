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

    <div className="professionalExperience mt-5 py-2 border border-5 border-info rounded-top rounded-bottom">

 
        {ExperienceFields &&

          ExperienceFields?.map((field, index) => {
            
            return (
              
              <div key={field.id} className=" ">
                      <h1 className="fw-bold mb-4 text-center">Professional Experience {index+1}</h1> 
                <div className='row'>
                  <div className="col-sm-6">
                    <label className="fw-bold form-label" htmlFor="positionTitle">Position Title:</label>
                    <input
                      type="text"
                      className="form-control  border border-1 border-dark"
                      id="positionTitle"
                      name="positionTitle"
                      {...register(`moreExperienceFields[${index}].positionTitle`, {
                        required: {
                          value: true,
                          message: "Please enter Position Title",
                        },
                      })}
                      placeholder="Enter your  Position Title"
                    />

          <p className="text-danger">{errors.moreExperienceFields?.[index]?.positionTitle?.message}</p>

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
                          message: "Please enter Company Name",
                        },
                      })}
                      placeholder="Enter your  Company Name"
                    />
                  <p className="text-danger">{errors.moreExperienceFields?.[index]?.companyName?.message}</p>

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
                 <p className="text-danger">{errors.moreExperienceFields?.[index]?.startDate?.message}</p>

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
                    <label className="small form-label mx-1 px-1" htmlFor="currently">Currently Ongoing</label>
                    <input
                      type="checkbox"
                      id="currently"
               
                      {...register(`moreExperienceFields[${index}].currently`)}
                    />
                   <p className="text-danger">{errors.moreExperienceFields?.[index]?.endDate?.message}</p> 
 
                  </div>
                  
                  <div className="col-sm-6 mt-1">
                    <label className="fw-bold form-label" htmlFor="workSummary">Work Summary</label>
                    <textarea
                      type="date"
                      className="form-control  border border-1 border-dark"
                      id="workSummary"
                      {...register(`moreExperienceFields[${index}].workSummary`, {
                 
                        required: {
                          value: true,
                          message: "Please enter workSummary",
                        },
                      })}
                      placeholder="Enter your workSummary "
                    />
                 <p className="text-danger">{errors.moreExperienceFields?.[index]?.workSummary?.message}</p>

                  </div>

                  <div className="col-sm-6 mt-1">
                    <label className="fw-bold form-label" htmlFor="Experienc">Your Experience</label>
                    <textarea
                      type="text"
                      id='Experienc'
                      {...register(
                        `moreExperienceFields[${index}].experience`
                      )}
                      className="form-control  border border-1 border-dark"
                    />
                    
                  <button
                    className="btn btn-info mt-2 mx-3 mb-3 "
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
                  {index > 0 && (
                    <button
                      type="button"
                      className="btn my-2 mx-3 mb-3 btn-danger"
                      onClick={() => removemoreExperience(index)}
                    >
                      <DeleteForeverIcon />

                    </button>
                  )}
                  </div>
              

                </div>
              </div>
            );
          })}
    </div>
 )
}

export default ProfExp