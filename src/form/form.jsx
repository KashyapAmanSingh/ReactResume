"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import  useForm  from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { addUserData } from "../redux/Slice";
import { useDispatch } from "react-redux";
 import PersonalDetails from "../../../Component/formDir/personalDetails";
import ProfExp from "../../../Component/formDir/profExp";
import EduField from "../../../Component/formDir/eduField";
import KeySkills from "../../../Component/formDir/keySkills";




export default function SimpleAccordion() {
  //   const [formData, setFormData] = useState({});
  const [error, setErrors] = useState();
  const router = useRouter();

  const dispath = useDispatch();

  const form = useForm({
    defaultValues: {
    //   anotherQualification: [
    //     {
    //       number: "",
    //     },
    //   ],
      socialMediaLinks: [
        {
          links: "",
        },
      ],
      moreExperienceFields: [
        {
          experience: "",
        },
      ],

      QualificationDegree: [
        {
          degree: "",
        },
      ],
      KeySkills: [
        {
          skill: "",
        },
      ],
      Keylanguage: [
        {
          language: "",
        },
      ],
      Accomplishment: [
        {
          Accomplish: "",
        },
      ],
      age: 0,
      dateOfBirth: new Date(),
      image: "",
    },
  });

  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = form;
  const userWatch = watch();

//   const {
//     fields: qualificationFields,
//     append: appendQualification,
//     remove: removeQualification,
//   } = useFieldArray({
//     name: "anotherQualification",
//     control: control,
//   });





  //   console.log(
  //     useFieldArray({
  //       name: "anotherQualification",
  //       control: control,
  //     }),
  //     "fields   😲    fields  😲    fields  😲    fields 😲  "
  //   );

  const { name, ref, onChange, onBlur } = register("name");

  const formSubmit = (data) => {
    alert("😲😲Submit request works😲😲");

    console.log("😲 😲from handleSubmit ", data);
    dispath(addUserData(data));
  };
  

  return (
    <div className="mainFormComponent ">
      <h1>Resume Builder</h1>

      <form onSubmit={handleSubmit(formSubmit)} noValidate>
        {/* <h3 key={2}>userWatch---{JSON.stringify(userWatch)}</h3> */}
 
        <PersonalDetails register={register} errors={errors} control={ control} />

            
                {/* Professional Experience */}

               <ProfExp register={register} errors={errors} control={ control}/>
   {/* Fill Education Details */}
             <EduField  register={register} errors={errors} control={ control}/>

                {/* Key Skills */}

                {/* Experience level */}
<KeySkills  register={register} errors={errors} control={ control}         />

                {/* <div className="form-group">
                  <h2>
                    _____________________________dateOfBirth_________________________
                  </h2>

                  <label htmlFor="dateOfBirth">dateOfBirth </label>

                  <input
                    type="date"
                    className="form-control"
                    id="dateOfBirth"
                    {...register("dateOfBirth", {
                      //   valueAsDate: true,
                      required: {
                        value: true,
                        message: "Please enter dateOfBirth",
                      },
                    })}
                    placeholder="Enter your   dateOfBirth "
                  />
                  <p className=" "> {errors.age?.message}</p>
                </div>

                <div>
                  <h4>Add more anotherQualifications</h4>

                  {qualificationFields &&
                    qualificationFields?.map((field, index) => {
                      return (
                        <div key={field.id} className="form-group">
                          <input
                            type="text"
                            {...register(
                              `anotherQualification.${index}.number`
                            )}
                            className="form-control"
                          />
                          {index > 0 && (
                            <button
                              type="button"
                              className="btn btn-danger"
                              onClick={() => removeQualification(index)}
                            >
                              remove field
                            </button>
                          )}
                        </div>
                      );
                    })}
                </div>
                <button
                  className="btn btn-danger"
                  onClick={() => appendQualification({ number: "" })}
                >
                  Add More field
                </button> */}
             
  
        <button type="submit" className="btn btn-danger">
          Create Resume
        </button>
      </form>
      <DevTool control={control} />
    </div>
  );
}
