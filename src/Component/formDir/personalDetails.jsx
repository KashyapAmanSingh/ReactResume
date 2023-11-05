/* eslint-disable react/prop-types */

import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useFieldArray } from 'react-hook-form';
import ProfileImage from './ProfileImage';

const PersonalDetails = ({ register, errors, control, getValues, templateNumber }) => {

          //  storing multiple fields  of links 
  const {
    fields: socialMediaFields,
    append: appendSocialMedia,
    remove: removeSocialMedia,
  } = useFieldArray({
    name: "socialMediaLinks",
    control: control,
  });
  return (

    <div className="rounded-4 Jobtitle mt-5 border border-5 border-info rounded-top rounded-bottom">

          {/* show ProfileImage field if template has option of showing ProfileImage  */}
      {templateNumber !== "template3" && templateNumber !== "template4" && (
        <ProfileImage register={register} errors={errors} getValues={getValues} />
      )}


      <div className="row">
        <div className="col-sm-4">
                {/* firstName field of inout */}
          <label className="fw-bold form-label" htmlFor="firstName">First Name</label>
          <input
            type="text"
            className="form-control  border border-1 border-dark"
            id="firstName"
            {...register("personalDetails.firstName", {
        
              // validating
              required: {                     
                value: true,
                message: "Please enter firstName",
              },
            })}
            placeholder="Enter First Name"
          />  
            {/* show error  if First Name not filled*/}
          <p className="error-message text-danger">{errors.personalDetails?.firstName?.message}</p>
        </div>
      {/* Last Name field of inout */}
        <div className="col-sm-4">
          <label className="fw-bold form-label" htmlFor="lastName">Last Name</label>
          <input
            type="text"
            className="form-control  border border-1 border-dark"
            id="lastName"
            {...register("personalDetails.lastName", {
              // validating
              required: {
                value: true,
                message: "Please enter lastName",
              },
            })}
            placeholder="Enter your last name"
          />
           {/* show error  */}
          <p className="error-message text-danger">{errors.personalDetails?.lastName?.message}</p>
        </div>
      {/* Job Title field of input */}

        <div className="col-sm-4">
          <label className="fw-bold form-label" htmlFor="jobTitle">Job Title</label>
          <input
            type="text"
            className="form-control  border border-1 border-dark"
            id="jobTitle"
            name="jobTitle"
            {...register("personalDetails.jobTitle", {
              // validating
              required: {
                value: true,
                message: "Please enter jobTitle",
              },
            })}
            placeholder="Enter your jobTitle"
          />
           {/* show error for Job Title */}
          <p className="  text-danger">{errors.personalDetails?.jobTitle?.message}</p>
        </div>


      {/* Primary Phone field of input */}

        <div className="col-sm-4">
          <label className="fw-bold form-label" htmlFor="phone">Primary Phone</label>
          <input
            type="number"
            className="form-control  border border-1 border-dark"
            id="phone"
            name="phone"
            {...register("personalDetails.phone.0", {
              // validating
              required: {
                value: true,
                message: "Please enter Phone Number",
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
           {/* show error  Primary Phone*/}
          <p className="small text-danger">{errors.personalDetails?.phone?.[0]?.message}</p>

        </div>

 
        {/* secondary Phone Number field of input */}
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
              // validating
              required: {
                value: true,
                message: "Please enter WhatsApp Number",
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

 {/* show error WhatsApp number */}
          <p className=" text-danger">{errors.personalDetails?.phone?.[1]?.message}</p>

        </div>

          {/* Personal Email  field of input */}

        <div className="col-md-4">
          <label className="fw-bold form-label" htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control  border border-1 border-dark"
            id="email"
            {...register("personalDetails.email", {
              // validating
              required: {
                value: true,
                message: "Please enter Email",
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
          <p className="text-danger"> {errors.personalDetails?.email?.message}</p>
        </div>


                  {/*  Address Pincode field of input */}

     
        <div className="col-md-4">
          <label className="fw-bold form-label" htmlFor="pincode">Pincode</label>
          <input
            type="number"
            className="form-control  border border-1 border-dark"
            id="pincode"
            {...register("personalDetails.address.pincode", {
              // validating Address Pincode
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
            placeholder="Enter your pincode"
          />
           {/*Address Pincode show error  */}
          <p className=" text-danger">{errors.personalDetails?.address?.pincode?.message}</p>
        </div>


                  {/*   Address City field of input */}

        <div className="col-md-4">
          <label className="fw-bold form-label" htmlFor="city">City</label>
          <input
            type="city"
            className="form-control  border border-1 border-dark"
            id="city"
            {...register("personalDetails.address.city", {
              // validating  Address City
              required: {
                value: true,
                message: "Please City can't empty",
              },
            })}
            placeholder="Enter your city "
          />
           {/* show error   Address City*/}
          <p className=" text-danger">{errors.personalDetails?.address?.city?.message}</p>

        </div>
          {/*    Address Country field of input */}
        <div className="col-md-4">
          <label className="fw-bold form-label" htmlFor="country">Country</label>
          <input
            type="country"
            className="form-control  border border-1 border-dark"
            id="country"
            {...register("personalDetails.address.country", {
              // validating  Address Country
              required: {
                value: true,
                message: "Please Country can't empty",
              },
            })}
            placeholder="Enter your Country"
          />
           {/* show error  Address Country */}
          <p className=" text-danger">{errors.personalDetails?.address?.country?.message}</p>

        </div>

        {/* add social media links for connection */}

        <div className='row py-3'>

          {socialMediaFields &&
            socialMediaFields?.map((field, index) => {
              return (
                <>
                  <div key={field.id} className="col-md-8">
                    <label className="fw-bold form-label" htmlFor="country">Social Connection media links  {index + 1}</label>

                    <input
                      type="text"
                      {...register(
                        `personalDetails.socialMediaLinks.${index}.links`
                      )}
                      className="form-control  border border-1 border-dark my-2"
                    />

                  </div>
                  <div className='col-sm-2 d-flex justify-content-between align-items-center '>

                    <button
                      type='submit'
                      className="btn btn-info btn btn-info  mx-4 mt-4"
                      onClick={() => appendSocialMedia({ links: "" })}
                    >
                      <AddIcon />
                    </button>
                    {index > 0 && (
                      <button
                        type="button"
                        className="btn btn-danger btn btn-info mx-4 mt-4"
                        onClick={() => removeSocialMedia(index)}
                      >
                        <DeleteForeverIcon />
                      </button>
                    )}
                  </div>
                </>
              );
            })}
 
        </div>

      </div>
 

    </div>

  )
}
export default PersonalDetails     //export the  personal details component