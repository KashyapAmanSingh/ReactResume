/* eslint-disable react/prop-types */
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
 
const ProfileImage = ({ register, errors, getValues  }) => {
 
    const imageFiles = getValues("personalDetails.image"); // this is FileList object from input field of imghe type file
   
    return (
        <div className="form-group mx-5 px-5 px-md-4 py-md-3 mx-md-2">

            <label
                htmlFor="image"
                className="mx-md-4 mx-4 rounded-circle border border-4 border-info text-center d-flex justify-content-center align-items-center"
                style={{ width: "8rem", height: "8rem" }}
            >
                {imageFiles?.length > 0 ? (
                    <img
                        src={URL.createObjectURL(imageFiles[0])}
                        alt="Profile Pics"
                        className="round fit-content rounded-circle border border-none"
                        style={{ width: "8rem", height: "8rem" }}
                    />
                ) : (
                    <AccountCircleIcon style={{ fontSize: "9rem" }} />
                )}
            </label>

            <input
                type="file"
                className="form-control d-none"
                id="image"
                 {...register("personalDetails.image", {
                    required: {
                        value: true,
                        message: "Please Upload an image file",
                    },
                })}
             /> 

            {/* showing error if occur  */}
            <p className="error-message fw-bold mt-3 mx-0">{errors.personalDetails?.image?.message}</p>
        </div>
    );
};

export default ProfileImage;



