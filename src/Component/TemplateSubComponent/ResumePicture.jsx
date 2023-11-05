/* eslint-disable react/prop-types */
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const ResumePicture = ({ image ,customStyle}) => {

    return (
        <div>

            <span
                className=" "
            >
                {image ? (
                    <img className={`${customStyle}`} src={URL.createObjectURL(image[0])} alt="" // rounded-5 mx-4 rounded rounded-circle
                        style={{ maxWidth: "100%", maxHeight: "30%" }}

                    />
                ) : (
                    <AccountCircleIcon className="bg-danger mx-5 pb-4 rounded-5  rounded rounded-circle py-1  d-flex justify-content-center align-items-middle " style={{ fontSize: "7rem" }} />
                )}
            </span>
        </div>
    )
}

export default ResumePicture