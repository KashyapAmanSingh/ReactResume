import React from 'react'
import { useFieldArray } from 'react-hook-form';
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';





const KeySkills = ({ register, errors,control }) => {
  
  const {
    fields: KeySkillFields,
    append: appendKeySkill,
    remove: removeKeySkill,
  } = useFieldArray({
    name: "KeySkills",
    control: control,
  });

  const {
    fields: KeylanguagesField,
    append: appendKeylanguage,
    remove: removeKeylanguage,
  } = useFieldArray({
    name: "Keylanguage",
    control: control,
  });
  const {
    fields: AccomplishmentFields,
    append: appendAccomplishment,
    remove: removeAccomplishment,
  } = useFieldArray({
    name: "Accomplishment",
    control: control,
  });
  return (
    <div>
      <h1>____________  _____Key Skills_____________ __</h1>
                <div className="form-group">
                  <label htmlFor="experienceLevel">Experience level</label>
                  <input
                    type="date"
                    className="form-control"
                    id="KeySkill.experienceLevel"
                    {...register("KeySkill.experienceLevel", {
                      required: {
                        value: true,
                        message: "Please enter School Experience level",
                      },
                    })}
                    placeholder="Enter your School Experience level"
                  />
                  <p className=" "> {errors.experienceLevel?.message}</p>
                </div>

                <div>
                  <h4>Add more Skills </h4>

                  {KeySkillFields &&
                    KeySkillFields?.map((field, index) => {
                      return (
                        <div key={field.id} className="form-group">
                          <input
                            type="text"
                            {...register(`KeySkill.KeySkills.${index}.skill`)}
                            className="form-control"
                          />
                          {index > 0 && (
                            <button
                              type="button"
                              className="btn btn-danger"
                              onClick={() => removeKeySkill(index)}
                            >
                                      <DeleteForeverIcon/>
                            </button>
                          )}
                        </div>
                      );
                    })}
                </div>
                <button
                  className="btn btn-danger"
                  onClick={() => appendKeySkill({ skill: "" })}
                >
          
                                <AddIcon/>
                </button>

                <div>
                  <h4>Add languages </h4>

                  {KeylanguagesField &&
                    KeylanguagesField?.map((field, index) => {
                      return (
                        <div key={field.id} className="form-group">
                          <input
                            type="text"
                            {...register(
                              `KeySkill.Keylanguages.${index}.language`
                            )}
                            className="form-control"
                          />
                          {index > 0 && (
                            <button
                              type="button"
                              className="btn btn-danger"
                              onClick={() => removeKeylanguage(index)}
                            >
                             <DeleteForeverIcon/>
                            
                            </button>
                          )}
                        </div>
                      );
                    })}
                </div>
                <button
                  className="btn btn-danger"
                  onClick={() => appendKeylanguage({ skill: "" })}
                >
       
                                <AddIcon/>
                </button>

                {/* hobby */}
                <div className="form-group">
                  <label htmlFor="workSummary">Your Hobby</label>
                  <input
                    type="date"
                    className="form-control"
                    id="hobby"
                    {...register("hobby", {})}
                    placeholder="Enter your hobby "
                  />
                  <p className=" "> {errors.hobby?.message}</p>
                </div>

                {/* accomplishment */}
                <div>
                  <h4>Add Extra Accomplishments </h4>
                  {AccomplishmentFields &&
                    AccomplishmentFields?.map((field, index) => {
                      return (
                        <div key={field.id} className="form-group">
                          <input
                            type="text"
                            {...register(
                              `KeySkill.Accomplishment.${index}.Accomplish`
                            )}
                            className="form-control"
                          />
                          {index > 0 && (
                            <button
                              type="button"
                              className="btn btn-danger"
                              onClick={() => removeAccomplishment(index)}
                            >
                                <DeleteForeverIcon/>
                             </button>
                          )}
                        </div>
                      );
                    })}
                </div>
                <button
                  className="btn btn-danger"
                  onClick={() => appendAccomplishment({ skill: "" })}
                >
 <AddIcon/>
                 </button>
    </div>
  )
}

export default KeySkills