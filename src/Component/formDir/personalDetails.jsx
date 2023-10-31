/* eslint-disable react/prop-types */

import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useFieldArray } from 'react-hook-form';
import ProfileImage from './ProfileImage';

const PersonalDetails = ({ register, errors, control, getValues }) => {



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
      <div className="Jobtitle border border-5 border-info rounded-top rounded-bottom">
        <ProfileImage register={register} errors={errors} getValues={getValues} />

        {/* firstName  */}
        <div className="row">
          <div className="col-sm-4">
            <label className="fw-bold form-label" htmlFor="firstName">First Name:</label>
            <input
              type="text"
              className="form-control  border border-1 border-dark"
              id="firstName"
              {...register("personalDetails.firstName", {
                // ... validation rules
              })}
              placeholder="Enter First Name"
            />
            <p className="error-message">{errors.firstName?.message}</p>
          </div>

          <div className="col-sm-4">
            <label className="fw-bold form-label" htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              className="form-control  border border-1 border-dark"
              id="lastName"
              {...register("personalDetails.lastName", {
                // ... validation rules
              })}
              placeholder="Enter your last name"
            />
            <p className="error-message">{errors.lastName?.message}</p>
          </div>

          <div className="col-sm-4">
            <label className="fw-bold form-label" htmlFor="jobTitle">Job Title:</label>
            <input
              type="text"
              className="form-control  border border-1 border-dark"
              id="jobTitle"
              name="jobTitle"
              {...register("personalDetails.jobTitle", {
                // ... validation rules
              })}
              placeholder="Enter your jobTitle"
            />
            <p className="">{errors.jobTitle?.message}</p>
          </div>

          <div className="col-sm-4">
            <label className="fw-bold form-label" htmlFor="phone">Primary Phone:</label>
            <input
              type="number"
              className="form-control  border border-1 border-dark"
              id="phone"
              name="phone"
              {...register("personalDetails.phone.0", {
                // ... validation rules
              })}
              placeholder="Enter your Phone Number"
            />
            <p className="">{errors.phone?.message}</p>
          </div>


          {/* secondary Phone Number */}
          <div className="col-md-4">
            <label className="fw-bold form-label" htmlFor="phone">
              WhatsApp Number
            </label>
            <input
              type="number"
              className="form-control  border border-1 border-dark"
              id="phone"
              name="phone"
              {...register("personalDetails.phone.1", {
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
          <div className="col-md-4">
            <label className="fw-bold form-label" htmlFor="email">Email:</label>
            <input
              type="email"
              className="form-control  border border-1 border-dark"
              id="email"
              {...register("personalDetails.email", {
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
          <div className="col-md-4">
            <label className="fw-bold form-label" htmlFor="pincode">Pincode:</label>
            <input
              type="number"
              className="form-control  border border-1 border-dark"
              id="pincode"
              {...register("personalDetails.address.pincode", {
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
          <div className="col-md-4">
            <label className="fw-bold form-label" htmlFor="city">City:</label>
            <input
              type="city"
              className="form-control  border border-1 border-dark"
              id="city"
              {...register("personalDetails.address.city", {})}
              placeholder="Enter your city "
            />
            <p className=" "> {errors.city?.message}</p>
          </div>
          {/* Address Country */}
          <div className="col-md-4">
            <label className="fw-bold form-label" htmlFor="country">Country:</label>
            <input
              type="country"
              className="form-control  border border-1 border-dark"
              id="country"
              {...register("personalDetails.address.country", {})}
              placeholder="Enter your Country"
            />
            <p className=" "> {errors.country?.message}</p>
          </div>
          {/* add social media links for connection */}
          <h3> fields social media links </h3>
          <div className=' '>
            {socialMediaFields &&
              socialMediaFields?.map((field, index) => {
                return (
                  <div key={field.id} className="col-md-8 ">
                    <input
                      type="text"
                      {...register(
                        `personalDetails.socialMediaLinks.${index}.links`
                      )}
                      className="form-control  border border-1 border-dark my-2"
                    />
                    {index > 0 && (
                      <button
                        type="button"
                        className="btn btn-danger mx-4"
                        onClick={() => removeSocialMedia(index)}
                      >
                        <DeleteForeverIcon />
                      </button>
                    )}
                  </div>
                );
              })}

            <button
              className="btn btn-danger mx-4"
              onClick={() => appendSocialMedia({ links: "" })}
            >

              <AddIcon />
            </button>
          </div>
        </div>
        {/* Address City */}


      </div>
    </div>
  )
}
export default PersonalDetails