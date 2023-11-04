/* eslint-disable react/prop-types */
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const SecondaryHeading = ({ email, phone }) => {
    return (
        <div>
            <div className="contact_stripe d-flex bg-success text-center small justify-content-evenly">
                <span>
                    <LocalPhoneRoundedIcon />{phone[0]}
                </span>
                <span>
                    <WhatsAppIcon /> {phone[1]}
                </span>
                <span>
                    <MailOutlineIcon /> {email}
                </span>
            </div>
        </div>
    )
}

export default SecondaryHeading