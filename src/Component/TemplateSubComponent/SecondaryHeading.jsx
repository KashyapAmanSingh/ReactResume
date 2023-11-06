<<<<<<< HEAD
/* eslint-disable react/prop-types */
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
 
// heading comes beneath top heading in template 1 and 2 
const SecondaryHeading = ({ email, phone }) => {
    return (
        <div>
            <div className="contact_stripe py-1 d-flex bg-success text-center small justify-content-evenly ">
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

=======
/* eslint-disable react/prop-types */
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const SecondaryHeading = ({ email, phone }) => {
    return (
        <div>
            <div className="contact_stripe py-1 d-flex bg-success text-center small justify-content-evenly ">
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

>>>>>>> 439afe43bfeef0a26b450ba7a0d315a866f1101c
export default SecondaryHeading