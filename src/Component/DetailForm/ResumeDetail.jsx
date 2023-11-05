

import { useState } from "react";
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
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
    getValues,
    formState: { errors, isDirty }
  } = form;


  const formSubmit = (data) => {
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
              // professional experience fields 
              <ProfExp register={register} errors={errors} control={control} />
            ) : formCount === 3 ? (
              // educational detail filling fields
              <EduField register={register} errors={errors} control={control} />
            ) : formCount === 4 ? (
              //  key skills fillling fields 
              <KeySkills
                register={register}
                control={control}
                errors={errors}
              />
            ) : null}


            <div className="d-flex mt-4 mb-5  justify-content-center">
              {/* form navigation button  */}
              <button
                className="btn btn-warning mx-4 my-5"
                onClick={handleformPrevious}
                disabled={formCount === 1}
              >
                Previous
              </button>
              {formCount !== 4 ? (
                <button
                  type="submit"
                  className="btn btn-warning mx-4 my-5"
                  onClick={handleformNext}
                  disabled={formCount === 4}
                >
                  Next
                </button>) : <button type="button  " className="btn btn-danger my-5 mx-5 my-4" onClick={handlePreviewResume} disabled={!templateNumber}>
                Preview
              </button>}

            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
