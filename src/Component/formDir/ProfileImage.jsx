/* eslint-disable react/prop-types */
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const ProfileImage = ({ register, errors, getValues }) => {
    const imageFiles = getValues("image"); // Assuming this is your FileList object

    return (
        <div className="form-group">

            <label
                htmlFor="image"
                className="rounded-circle border border-4 border-info text-center d-flex justify-content-center align-items-center"
                style={{ width: "8rem", height: "8rem" }}
            >
                {imageFiles.length > 0 ? (
                    <img
                        src={URL.createObjectURL(imageFiles[0])}
                        alt="Profile Pics"
                        className="round fit-content rounded-circle"
                        style={{ width: "8rem", height: "8rem" }}
                    />
                ) : (
                    <AccountCircleIcon style={{ fontSize: "9rem" }} />
                )}
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
            <p className="error-message">{errors.image?.message}</p>
        </div>
    );
};

export default ProfileImage;


