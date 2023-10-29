/* eslint-disable react/prop-types */
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DownloadDoneIcon from '@mui/icons-material/DownloadDone';
import avtar from "../../assets/image/avtar1.avif"
const ProfileImage = ({ register, errors, control, isDirty }) => {

    return (
        <div className="form-group">
            <label
                htmlFor="image"
                className="rounded-circle border border-4 border-info text-center d-flex justify-content-center align-items-center"
                style={{ width: "8rem", height: "8rem" }}
            >
                {isDirty ? (
                    <img src={avtar} alt="Profile Pics " className=" round fit-content rounded-circle" style={{ width: "8rem", height: "8rem" }} />
                    // <DownloadDoneIcon style={{ fontSize: "5rem" }}  color="success"/>
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
            <p className="">{errors.image?.message}</p>
        </div>
    );
};

export default ProfileImage;
