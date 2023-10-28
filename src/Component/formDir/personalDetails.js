import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useFieldArray } from 'react-hook-form';


 const PersonalDetails = ({ register, errors,control }) => {
    const {
        fields: socialMediaFields,
        append: appendSocialMedia,
        remove: removeSocialMedia,
      } = useFieldArray({
        name: "socialMediaLinks",
        control: control,
      });
  return (
    <div>
           <div className="fs-2 fw-bold">Job title</div>
                <div className="Jobtitle ">
                  <section className="firstFaction">
                    {/* Resume Picture */}
                    <div className="form-group">
                      <label
                        htmlFor="image"
                        className="  rounded-circle border border-4 border-info text-center  d-flex justify-content-center align-items-center"
                        style={{ width: "8rem", height: "8rem" }}
                      >
                         <AccountCircleIcon  style={{ fontSize: "9rem" }}  />  

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
                                  <DeleteForeverIcon/>
                                 </button>
                              )}
                            </div>
                          );
                        })}

                      <button
                        className="btn btn-danger"
                        onClick={() => appendSocialMedia({ links: "" })}
                      >
                   
                                <AddIcon/>
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
    </div>
  )
}
export default PersonalDetails