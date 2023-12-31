/* eslint-disable react/prop-types */

import { useFieldArray } from 'react-hook-form';
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
 
const KeySkills = ({ register, control, errors }) => {

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
    name: "Keylanguages",
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
    <div className="row mt-5 py-2 KeySkil border border-5 border-info rounded-4 ">
      <h1 className='text-center text-center fw-bold py-2 px-1  '> Fill Key Skills Details</h1>

      <div className="col-md-6">
              {/* Section for Adding Key Skills */}

        
        <h4>Add more Skills</h4>
        {KeySkillFields &&
          KeySkillFields?.map((field, index) => (
            <div key={field.id} className=" ">
              <input
                type="text"
                {...register(`KeySkill.KeySkills.${index}.skill`, {
                 
                  required: {
                    value: true,
                    message: "Please enter Your skill",
                  },
                })}
                className="form-control my-2  border border-1 border-dark"
              />
              {/* error showing for respective field  */}
                 <p className="text-danger">
                {errors.KeySkill?.KeySkills?.[index]?.skill?.message}
              </p>
              {index > 0 && (
                <button
                  type="button"
                  className="btn btn-danger mt-0 my-1 mx-2"
                  onClick={() => removeKeySkill(index)}
                >
                  <DeleteForeverIcon />
                </button>

              )}
           
            </div>
          ))}
        <button
          className="btn btn-info  mt-0 my-1 mx-2"
          onClick={() => appendKeySkill({ skill: "" })}
        >
          <AddIcon />
        </button>

      </div>

      <div className="col-md-6">
              {/* Section for Adding languages */}

        <h4>Add languages</h4>
        {KeylanguagesField &&
          KeylanguagesField?.map((field, index) => (
            <div key={field.id} className=" ">
              <input
                type="text"
                {...register(`KeySkill.Keylanguages.${index}.language`, {
                 
                  required: {
                    value: true,
                    message: "Please enter Your languages",
                  },
                })}
                className="form-control my-2  border border-1 border-dark"
              />
              {/* error showing for respective field  */}
                  <p className="text-danger">
                {errors.KeySkill?.Keylanguages?.[index]?.language?.message}
              </p>
              {index > 0 && (
                <button
                  type="button"
                  className="btn btn-danger  mt-0 my-1 mx-2"
                  onClick={() => removeKeylanguage(index)}
                >
                  <DeleteForeverIcon />
                </button>
              )}
          
            </div>
          ))}
        <button
          className="btn btn-info  mt-0 my-1 mx-2"
          onClick={() => appendKeylanguage({ skill: "" })}
        >
          <AddIcon />
        </button>

      </div>

               {/* Section for  HOBBY FIELD */}
      <div className=" col-md-6">

        <h4>Add Your Hobby</h4>
        {HobbyFields &&
          HobbyFields?.map((field, index) => (
            <div key={field.id} className="">
              <input
                type="text"
                {...register(`KeySkill.Keyhobby.${index}.Hobby`, {
                 
                  required: {
                    value: true,
                    message: "Please enter Your Hobby",
                  },
                })}
                className="form-control my-2  border border-1 border-dark"
              />
              {index > 0 && (
                <button
                  type="button"
                  className="btn btn-danger  mt-0 my-1 mx-2"
                  onClick={() => removeHobbyFields(index)}
                >
                  <DeleteForeverIcon />
                </button>
              )}
              {/* error showing for respective field  */}
              <p className="text-danger">
                {errors.KeySkill?.Keyhobby?.[index]?.Hobby?.message}
              </p>
            </div>
          ))}
        <button
          className="btn btn-info  mt-0 my-1 mx-2"
          onClick={() => appendHobbyFields({ skill: "" })}
        >
          <AddIcon />
        </button>
      </div>


              {/* Section for Adding Extra Accomplishments */}

      <div className=" col-md-6">

        <h4>Add Extra Accomplishments</h4>
        {AccomplishmentFields &&
          AccomplishmentFields?.map((field, index) => (
            <div key={field.id} className="">
              <input
                type="text"
                {...register(`KeySkill.Accomplishment.${index}.Accomplish`, {
                  required: {
                    value: true,
                    message: "Please enter Your Accomplishment",
                  },
                })}
                className="form-control my-2  border border-1 border-dark"
              />
              {index > 0 && (
                <button
                  type="button"
                  className="btn btn-danger  mt-0 my-1 mx-2"
                  onClick={() => removeAccomplishment(index)}
                >
                  <DeleteForeverIcon />
                </button>
              )}
              {/* error showing for respective field  */}
                 <p className="text-danger">
                {errors.KeySkill?.Accomplishment?.[index]?.Accomplish?.message}
              </p>
            </div>
          ))}
        <button
          className="btn btn-info  mt-0 my-1 mx-2"
          onClick={() => appendAccomplishment({ skill: "" })}
        >
          <AddIcon />
        </button>
      </div>

      {/* form submit button  */}
      <div className=" ">
        <button className="btn btn-danger float-end" type="submit"  >
          Submit
        </button>
      </div>
    </div>

  )
}

export default KeySkills        //export the key skills component
