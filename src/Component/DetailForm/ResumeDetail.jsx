

import { useState } from "react";
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
// import { DevTool } from "@hookform/devtools";
import { addUserData } from "../../redux/Slice";
import SideBar from "../formDir/sideBar";
import PersonalDetails from "../formDir/personalDetails";
import ProfExp from "../formDir/profExp";
import EduField from "../formDir/eduField";
import KeySkills from "../formDir/keySkills";
import { useNavigate, useSearchParams } from "react-router-dom";
 import { FormDefaultConfig } from "../formDir/FormDefaultConfig";

export default function ResumeDetailFillForm() {
  const [formCount, setFormCount] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams()


  const templateNumber = searchParams.get('template');
  const navigate = useNavigate();

 
  const dispath = useDispatch();

  const handleformNext = () => {
    setFormCount(formCount < 4 ? formCount + 1 : formCount);
    console.log("handleFormNext", formCount);
  };


  const handleformPrevious = () => {
    setFormCount(formCount > 1 ? formCount - 1 : formCount);
    console.log("handleformPrevious", formCount);
  };


  const handlePreviewResume = () => {
    navigate(`Preview?template=${templateNumber}`);
  }



  const form = useForm(FormDefaultConfig);


  const {
    register,
    control,
    handleSubmit,
    // watch,
    getValues,
    formState: { errors, isDirty }
  } = form;
  // const userWatch = watch();


  const { name, ref, onChange, onBlur } = register("name");
  const formSubmit = (data) => {
    // alert("😲😲Submit request works😲😲");
    console.log("😲 😲from handleSubmit ", data);
    dispath(addUserData(data));
  };

  return (
    <div className="container ">
      <div className="row">
        {/* form side bar */}
        <div className="col-sm-3 mt-5 pt-3 ">
          <SideBar formCount={formCount} />
        </div>

        <div className="col-sm-8 ">
          {/* Resume Picture */}
          <form onSubmit={handleSubmit(formSubmit)} noValidate className="row g-3   ">
            {/* <h3 key={2}>userWatch---{JSON.stringify(userWatch)}</h3> */}
            {formCount === 1 ? (
              <PersonalDetails
                register={register}
                errors={errors}
                control={control}
                isDirty={isDirty}
                getValues={getValues}
                templateNumber={templateNumber}
              />
            ) : formCount === 2 ? (
              <ProfExp register={register} errors={errors} control={control} />
            ) : formCount === 3 ? (
              <EduField register={register} errors={errors} control={control} />
            ) : formCount === 4 ? (

              <KeySkills
                register={register}
                control={control}
                errors={errors}
              />
                   ) : null}
          </form>

          <div className="d-flex mt-4 mb-5  justify-content-center">
            <button
              className="btn btn-warning mx-4 my-5"
              onClick={handleformPrevious}
              disabled={formCount === 1}
            >
              Previous
            </button>
            {formCount !== 4 ? (
              <button
                className="btn btn-warning mx-4 my-5"
                onClick={handleformNext}
                disabled={formCount === 4}
              >
                Next
              </button>) : <button type="button  " className="btn btn-danger my-5 mx-5 my-4" onClick={handlePreviewResume} disabled={!templateNumber}>
              Preview
            </button>}

          </div>

        </div>
      </div>
      {/* <DevTool control={control} /> */}
    </div>
  );
}
// {/* <DevTool control={control} />   */ }
