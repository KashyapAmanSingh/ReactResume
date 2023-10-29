 

import { useState } from "react";
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Navigate } from "react-router-dom";
 
import { addUserData } from "../../redux/Slice";
import SideBar from "../formDir/sideBar";
import PersonalDetails from "../formDir/personalDetails";
import ProfExp from "../formDir/profExp";
import EduField from "../formDir/eduField";
import KeySkills from "../formDir/keySkills";
import { useNavigate, useSearchParams } from "react-router-dom";
 
 export default function ResumeDetailFillForm() {
  const [formCount, setFormCount] = useState(1);
  const [searchParams,setSearchParams] =useSearchParams()
  const navigate =useNavigate()

  const templateNumber = searchParams.get('template')
 
  const handlePreviewResume = () => {
  const currentPath = window.location.pathname;
  const newPath = currentPath.replace('/DetailFill', '');
  navigate(`${newPath}/${templateNumber}`, { replace: true });
  }
  console.log("+ ++ searchParams from preview detail fill page++++++++++++++++++++++++++++",templateNumber )

  const dispath = useDispatch();

  const handleformNext = () => {
    setFormCount(formCount < 4 ? formCount + 1 : formCount);
    console.log("handleFormNext", formCount);
  };

 
  const handleformPrevious = () => {
    setFormCount(formCount > 1 ? formCount - 1 : formCount);
    console.log("handleformPrevious", formCount);
  };

  const form = useForm({
    defaultValues: {
    
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
    // watch,
    formState: { errors },
  } = form;
  // const userWatch = watch();

 
  // const { name, ref, onChange, onBlur } = register("name");

  const formSubmit = (data) => {
    alert("😲😲Submit request works😲😲");
    console.log("😲 😲from handleSubmit ", data);
    dispath(addUserData(data));
  };

  return (
    <div className="mainFormComponent ">
      <h1>Resume Builder</h1>
      <div className="row">
        {/* form side bar */}
        <div className="col-sm-3 ">
           <SideBar  formCount={formCount}/>
        </div>
        <div className="col-sm-9 ">
          <form onSubmit={handleSubmit(formSubmit)} noValidate>
            {/* <h3 key={2}>userWatch---{JSON.stringify(userWatch)}</h3> */}
            {formCount === 1 ? (
              <PersonalDetails
                register={register}
                errors={errors}
                control={control}
              />
            ) : formCount === 2 ? (
              <ProfExp register={register} errors={errors} control={control} />
            ) : formCount === 3 ? (
              <EduField register={register} errors={errors} control={control} />
            ) : formCount === 4 ? (
              <KeySkills
                register={register}
                errors={errors}
                control={control}
              />
            ) : null}
            {/* <PersonalDetails register={register} errors={errors} control={ control} /> */}
            {formCount === 4 ? (
            <button type="submit" className="btn btn-danger  my-4" onClick={handlePreviewResume}  disabled={!templateNumber}>
             Preview
            </button>
                   ) : null}
          </form>
     
          <div className="d-flex justify-content-between">
            <button
              className="btn btn-warning"
              onClick={handleformPrevious}
              disabled={formCount === 1}
            >
              Previous
            </button>
            <button
              className="btn btn-warning"
              onClick={handleformNext}
              disabled={formCount === 4}
            >
              Next
            </button>
          </div>
        </div>
      </div>
     </div>
  );
}
