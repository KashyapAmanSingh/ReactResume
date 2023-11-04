/* eslint-disable react/prop-types */
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const ResumePicture = ({image}) => {
    console.log("ResumePicture from the separate Component", image);
    return (
        <div>
            <span
                className="bg-danger mx-5 py-1 rounded rounded-circle d-flex justify-content-center align-items-middle"
                style={{ width: "6rem", height: "6rem" }}
            >
                <AccountCircleIcon className="pb-4" style={{ fontSize: "7rem" }} />
            </span>

        </div>
    )
}

export default ResumePicture