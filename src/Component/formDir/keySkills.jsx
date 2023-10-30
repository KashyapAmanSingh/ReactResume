/* eslint-disable react/prop-types */

import { useFieldArray } from 'react-hook-form';
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';





const KeySkills = ({ register, control }) => {

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
  const {
    fields: HobbyFields,
    append: appendHobbyFields,
    remove: removeHobbyFields,
  } = useFieldArray({
    name: "Keyhobby",
    control: control,
  });
  return (
    <div className="row KeySkil border border-5 border-info rounded-top rounded-bottom">
      <h1 className='text-center text-center fw-bold py-2 px-1  '> Fill Key Skills Details</h1>
 
      <div className="col-md-6">
        <h4>Add more Skills</h4>
        {KeySkillFields &&
          KeySkillFields?.map((field, index) => (
            <div key={field.id} className=" ">
              <input
                type="text"
                {...register(`KeySkill.KeySkills.${index}.skill`)}
                className="form-control my-2  border border-1 border-dark" 
              />
              {index > 0 && (
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => removeKeySkill(index)}
                >
                  <DeleteForeverIcon />
                </button>
              )}
            </div>
          ))}
        <button
          className="btn btn-danger my-1"
          onClick={() => appendKeySkill({ skill: "" })}
        >
          <AddIcon />
        </button>
      </div>

      <div className="col-md-6">
        <h4>Add languages</h4>
        {KeylanguagesField &&
          KeylanguagesField?.map((field, index) => (
            <div key={field.id} className=" ">
              <input
                type="text"
                {...register(`KeySkill.Keylanguages.${index}.language`)}
                className="form-control my-2  border border-1 border-dark"
              />
              {index > 0 && (
                <button
                  type="button"
                  className="btn btn-danger my-1"
                  onClick={() => removeKeylanguage(index)}
                >
                  <DeleteForeverIcon />
                </button>
              )}
            </div>
          ))}
        <button
          className="btn btn-danger my-1"
          onClick={() => appendKeylanguage({ skill: "" })}
        >
          <AddIcon />
        </button>
      </div>
   
    {/* HOBBY FIELD  */}
 
    <div className=" col-md-6">
        <h4>Add Your Hobby</h4>
        {HobbyFields &&
          HobbyFields?.map((field, index) => (
            <div key={field.id} className="">
              <input
                type="text"
                {...register(`Keyhobby.${index}.Hobby`)}
                className="form-control my-2  border border-1 border-dark"
              />
              {index > 0 && (
                <button
                  type="button"
                  className="btn btn-danger my-1"
                  onClick={() => removeHobbyFields(index)}
                >
                  <DeleteForeverIcon />
                </button>
              )}
            </div>
          ))}
        <button
          className="btn btn-danger   my-1"
          onClick={() => appendHobbyFields({ skill: "" })}
        >
          <AddIcon />
        </button>
      </div>
 
      <div className=" col-md-6">
        <h4>Add Extra Accomplishments</h4>
        {AccomplishmentFields &&
          AccomplishmentFields?.map((field, index) => (
            <div key={field.id} className="">
              <input
                type="text"
                {...register(`KeySkill.Accomplishment.${index}.Accomplish`)}
                className="form-control my-2  border border-1 border-dark"
              />
              {index > 0 && (
                <button
                  type="button"
                  className="btn btn-danger my-1"
                  onClick={() => removeAccomplishment(index)}
                >
                  <DeleteForeverIcon />
                </button>
              )}
            </div>
          ))}
        <button
          className="btn btn-danger my-1"
          onClick={() => appendAccomplishment({ skill: "" })}
        >
          <AddIcon />
        </button>
      </div>
      <div className=" ">
      <button className="btn btn-danger float-end" type="submit"  >
        Submit
      </button>
      </div>  
        </div>

  )
}

export default KeySkills