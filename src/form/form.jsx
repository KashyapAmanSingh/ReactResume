"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { addUserData } from "../redux/Slice";
import { useDispatch } from "react-redux";

export default function ResumeForm() {
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

  const {
    fields: socialMediaFields,
    append: appendSocialMedia,
    remove: removeSocialMedia,
  } = useFieldArray({
    name: "socialMediaLinks",
    control: control,
  });
  const {
    fields: ExperienceFields,
    append: appendmoreExperience,
    remove: removemoreExperience,
  } = useFieldArray({
    name: "moreExperienceFields",
    control: control,
  });
  const {
    fields: QualificationDegreeFields,
    append: appendQualificationDegree,
    remove: removeQualificationDegree,
  } = useFieldArray({
    name: "QualificationDegree",
    control: control,
  });

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

  //   console.log(
  //     useFieldArray({
  //       name: "anotherQualification",
  //       control: control,
  //     }),
  //     "fields   😲    fields  😲    fields  😲    fields 😲  "
  //   );

  const { name, ref, onChange, onBlur } = register("name");

  const formSubmit = (data) => {
    console.log("😲 😲from handleSubmit 😲", data);
    dispath(addUserData(data));
  };
  

  return (
    <div className="container">
      <h1>Resume Builder</h1>

      <form onSubmit={handleSubmit(formSubmit)} noValidate>
        <h3 key={2}>userWatch---{JSON.stringify(userWatch)}</h3>

        <div className="accordion" id="resumeAccordion">
          <div className="card">
            <div className="card-header" id="basicDetailsHeading">
              <h2 className="mb-0">
                <button
                  className="btn btn-link"
                  type="button"
                  data-toggle="collapse"
                  data-target="#basicDetailsCollapse"
                  aria-expanded="true"
                  aria-controls="basicDetailsCollapse"
                >
                  Basic Details
                </button>
              </h2>
            </div>
            <div
              id="basicDetailsCollapse"
              className="collapse show"
              aria-labelledby="basicDetailsHeading"
              data-parent="#resumeAccordion"
            >
              <div className="card-body">
                <div className="fs-2 fw-bold">Job title</div>
                <div className="Jobtitle ">
                  <section className="firstFaction">
                    {/* Resume Picture */}
                    <div className="form-group">
                      <label
                        htmlFor="image"
                        className="border border-4 border-info text-center px-2 d-flex align-items-center"
                        style={{ width: "8rem", height: "8rem" }}
                      >
                        Upload Image
                      </label>

                      <input
                        type="file"
                        className="form-control"
                        id="image"
                        {...register("image", {
                          required: {
                            value: true,
                            message: "Please enter an image file",
                          },
                        })}
                        style={{ display: "none" }}
                      />
                      <p className="">{errors.image?.message}</p>
                    </div>

                    {/* firstName  */}
                    <div className="form-group">
                      {/* firstName Job title */}
                      <label htmlFor="firstName">First Name:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        {...register("firstName", {
                          minLength: {
                            value: 3,
                            message: "Name must have more then 3 character",
                          },
                          maxLength: {
                            value: 50,
                            message: "Name must less then 50 character",
                          },
                          required: {
                            value: true,
                            message: "Please enter a valid first Name ",
                          },
                          validate: (value) => {
                            return (
                              value !== "admin" || "please enter another name"
                            );
                          },
                        })}
                        placeholder="Enter First Name"
                      />
                      <p className=" "> {errors.firstName?.message}</p>
                    </div>
                    {/* LastName Job title */}
                    <div className="form-group">
                      <label htmlFor="lastName">Last Name:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        {...register("lastName", {
                          required: {
                            value: true,
                            message: "Please enter a valid lastName name",
                          },
                          validate: (value) => {
                            return (
                              value !== "admin" ||
                              "please enter another lastname"
                            );
                          },
                        })}
                        placeholder="Enter your lastName"
                      />
                      <p className=" "> {errors.lastName?.message}</p>
                    </div>
                    {/*   JOBtitle Job title */}
                    <div className="form-group">
                      <label htmlFor="jobTitle">Job Title:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="jobTitle"
                        name="jobTitle"
                        {...register("jobTitle", {
                          required: {
                            value: true,
                            message: "Please enter a valid jobTitle",
                          },
                        })}
                        placeholder="Enter your jobTitle"
                      />
                      <p className=" "> {errors.jobTitle?.message}</p>
                    </div>
                    {/* Primary Phone */}
                    <div className="form-group">
                      <label htmlFor="phone">Primary Phone:</label>
                      <input
                        type="number"
                        className="form-control"
                        id="phone"
                        name="phone"
                        {...register("phone.0", {
                          required: {
                            value: true,
                            message: "Please enter a valid phone Number",
                          },
                          validate: {
                            lengthError: (value) => {
                              return (
                                value.length === 10 ||
                                "Enter  valid 10-digitPhone"
                              );
                            },
                          },
                        })}
                        placeholder="Enter your Phone Number"
                      />

                      <p className=" "> {errors.phone?.message}</p>
                    </div>
                    {/* secondary Phone Number */}
                    <div className="form-group">
                      <label htmlFor="Secondphone">
                        Secondary Phone Number
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="Secondphone"
                        name="Secondphone"
                        {...register("phone.1", {
                          required: {
                            value: true,
                            message: "Please enter a valid Secondphone Number",
                          },
                          validate: {
                            lengthError: (value) => {
                              return (
                                value.length === 10 ||
                                "Enter  valid 10-digitPhone"
                              );
                            },
                          },
                        })}
                        placeholder="Enter your Phone Number"
                      />

                      <p className=" "> {errors.phone?.message}</p>
                    </div>
                    {/* Personal Email  */}
                    <div className="form-group">
                      <label htmlFor="email">Email:</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        {...register("email", {
                          required: {
                            value: true,
                            message: "Please enter a valid first Name name",
                          },
                          validate: (value) => {
                            return (
                              value !== "admin@admin.com" ||
                              "admin@admin not acceptable enter other email "
                            );
                          },
                        })}
                        placeholder="Enter your email "
                      />
                      <p className=" "> {errors.email?.message}</p>
                    </div>
                    {/* Address details  */}
                    {/* Address Pincode */}
                    <div className="form-group">
                      <label htmlFor="pincode">Pincode:</label>
                      <input
                        type="number"
                        className="form-control"
                        id="pincode"
                        {...register("address.pincode", {
                          required: {
                            value: true,
                            message: "Please pincode can't empty",
                          },
                          validate: {
                            lengthError: (value) => {
                              return (
                                value.length === 6 ||
                                "Please enter a valid 6-digit pincode"
                              );
                            },
                          },
                        })}
                        placeholder="Enter your pincode "
                      />
                      <p className=" "> {errors.address?.pincode?.message}</p>
                    </div>
                    {/* Address City */}
                    <div className="form-group">
                      <label htmlFor="city">City:</label>
                      <input
                        type="city"
                        className="form-control"
                        id="city"
                        {...register("address.city", {})}
                        placeholder="Enter your city "
                      />
                      <p className=" "> {errors.city?.message}</p>
                    </div>
                    {/* Address Country */}
                    <div className="form-group">
                      <label htmlFor="country">Country:</label>
                      <input
                        type="country"
                        className="form-control"
                        id="country"
                        {...register("address.country", {})}
                        placeholder="Enter your Country"
                      />
                      <p className=" "> {errors.country?.message}</p>
                    </div>
                    {/* add social media links for connection */}
                    <div>
                      <h3> fields social media links </h3>
                      {socialMediaFields &&
                        socialMediaFields?.map((field, index) => {
                          return (
                            <div key={field.id} className="form-group">
                              <input
                                type="text"
                                {...register(
                                  ` socialMediaLinks.${index}.links`
                                )}
                                className="form-control"
                              />
                              {index > 0 && (
                                <button
                                  type="button"
                                  className="btn btn-danger"
                                  onClick={() => removeSocialMedia(index)}
                                >
                                  remove links
                                </button>
                              )}
                            </div>
                          );
                        })}

                      <button
                        className="btn btn-danger"
                        onClick={() => appendSocialMedia({ links: "" })}
                      >
                        Add More field
                      </button>
                    </div>

                    {/* Address City */}
                    <div className="form-group">
                      <label htmlFor="age">Age:</label>
                      <input
                        type="number"
                        className="form-control"
                        id="age"
                        {...register("age", {
                          valueAsNumber: true,
                          required: {
                            value: true,
                            message: "Please enter Age",
                          },
                        })}
                        placeholder="Enter your age "
                      />
                      <p className=" "> {errors.age?.message}</p>
                    </div>
                  </section>
                </div>

                {/* Professional Experience */}

                <div className="professionalExperience">
                  <section className="professionalExperiencFaction">
                    <h1 className="my-5 py-5">Professional Experience</h1>
                    {/* Position Title */}
                    <div className="form-group">
                      <label htmlFor="positionTitle">Position Title:</label>
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
                    <div className="form-group">
                      <label htmlFor="companyName">Company Name:</label>
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
                    <div className="form-group">
                      <label htmlFor="startDate"> Start Date </label>
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
                    <div className="form-group">
                      <label htmlFor="endDate"> End Date </label>
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
                      <p className=" "> {errors.endDate?.message}</p>
                    </div>

                    <div className="form-group">
                      <label htmlFor="currently">Currently Ongoing</label>
                      <input
                        type="checkbox"
                        id="currently"
                        {...register("professionalExperience.currently")}
                      />
                    </div>

                    {/* Work Summary */}

                    <div className="form-group">
                      <label htmlFor="workSummary">Work Summary</label>
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

                    {/* Add more experience */}

                    <div>
                      <h3> Add more experience </h3>
                      {ExperienceFields &&
                        ExperienceFields?.map((field, index) => {
                          return (
                            <div key={field.id} className="form-group">
                              <textarea
                                type="text"
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
                                  remove links
                                </button>
                              )}
                            </div>
                          );
                        })}

                      <button
                        className="btn btn-danger"
                        onClick={() => appendmoreExperience({ number: "" })}
                      >
                        Add More field
                      </button>
                    </div>
                  </section>
                </div>

                {/* Fill Education Details */}
                <h1> Fill Education Details</h1>

                <div className="form-group">
                  {/* firstName Job title */}
                  <label htmlFor="schoolName">School Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="schoolName"
                    {...register("Education.schoolName", {
                      minLength: {
                        value: 10,
                        message: "schoolName must have more then 3 character",
                      },
                      maxLength: {
                        value: 500,
                        message: "schoolName must less then 50 character",
                      },
                      required: {
                        value: true,
                        message: "Please enter a valid School Name ",
                      },
                    })}
                    placeholder="Enter School Name"
                  />
                  <p className=" "> {errors.schoolName?.message}</p>
                </div>

                {/* School Start Date  */}
                <div className="form-group">
                  <label htmlFor="schoolStartDate">School Start Date </label>
                  <input
                    type="date"
                    className="form-control"
                    id="schoolStartDate"
                    {...register("schoolStartDate", {
                      required: {
                        value: true,
                        message: "Please enter School Start Date",
                      },
                    })}
                    placeholder="Enter your School Start Date "
                  />
                  <p className=" "> {errors.schoolStartDate?.message}</p>
                </div>

                {/*School  End Date  */}
                <div className="form-group">
                  <label htmlFor="schoolEndDate">School End Date </label>
                  <input
                    type="date"
                    className="form-control"
                    id="Education.schoolEndDate"
                    {...register("schoolEndDate", {
                      required: {
                        value: true,
                        message: "Please enter School  End Date ",
                      },
                    })}
                    placeholder="Enter your  School  End Date  "
                  />
                  <p className=" "> {errors.schoolEndDate?.message}</p>
                </div>

                {/* tick if study is currently going */}
                <div className="form-group">
                  <label htmlFor="currently">Currently Ongoing</label>
                  <input
                    type="checkbox"
                    id="currently"
                    {...register("Education.currently")}
                  />
                </div>

                {/* Degree of study  */}

                <div>
                  <h3> fields QualificationDegreeFields </h3>
                  {QualificationDegreeFields &&
                    QualificationDegreeFields?.map((field, index) => {
                      return (
                        <div key={field.id} className="form-group">
                          <input
                            type="text"
                            {...register(
                              `Education.QualificationDegree.${index}.degree`
                            )}
                            className="form-control"
                          />
                          {index > 0 && (
                            <button
                              type="button"
                              className="btn btn-danger"
                              onClick={() => removeQualificationDegree(index)}
                            >
                              remove links
                            </button>
                          )}
                        </div>
                      );
                    })}

                  <button
                    className="btn btn-danger"
                    onClick={() => appendQualificationDegree({ degree: "" })}
                  >
                    Add More field
                  </button>
                </div>

                <div className="form-group">
                  <label htmlFor="workSummaryDescription">Description</label>
                  <textarea
                    type="date"
                    className="form-control"
                    id="workSummaryDescription"
                    {...register("Education.workSummaryDescription", {
                      //   valueAsDate: true,
                      required: {
                        value: true,
                        message: "Please enter work Summary Description",
                      },
                    })}
                    placeholder="Enter your work Summary Description "
                  />
                  <p className=" "> {errors.workSummaryDescription?.message}</p>
                </div>

                {/* Key Skills */}

                {/* Experience level */}
<h1>___________________________ _____Key Skills_________________ ________________________________</h1>
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
                              remove field
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
                  Add More Skills
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
                              remove language
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
                  Add More language
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
                              remove Accomplishment
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
                  Add More Accomplishment
                </button>

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
              </div>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Create Resume
        </button>
      </form>
      <DevTool control={control} />
    </div>
  );
}
