/* eslint-disable react/prop-types */
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const ResumePicture = ({ image }) => {

    return (
        <div>

            <span
                className=" "

            >
                {image ? (
                    <img className=" rounded-5 mx-4 rounded rounded-circle" src={URL.createObjectURL(image[0])} alt="" style={{ width: "7rem", height: "7rem" }} />
                ) : (
                    <AccountCircleIcon className="bg-danger mx-5 pb-4 rounded-5  rounded rounded-circle py-1  d-flex justify-content-center align-items-middle " style={{ fontSize: "7rem" }} />
                )}


            </span>

        </div>
    )
}

export default ResumePicture