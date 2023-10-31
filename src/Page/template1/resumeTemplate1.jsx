import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
 import AccountCircleIcon from "@mui/icons-material/AccountCircle";
 import { Suspense, lazy } from "react";
import HomeIcon from '@mui/icons-material/Home';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import SchoolIcon from '@mui/icons-material/School';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import DescriptionIcon from '@mui/icons-material/Description';
import LinkIcon from '@mui/icons-material/Link';
const PDFGenerator = lazy(() => import("../../Component/PdfGenerat"));
import { useSelector } from 'react-redux';

 

function ResumeTemplateFirst() {
  const data = useSelector((state) => state.user.UserData);
  console.log(data,"😜😜😜😜😜😜data from   ResumeTemplateFirst");

  return (
    <div className="container ">
      <div className="row ">
        <div className="col-sm-7 mh-200 border border-4 border-info mx-auto my-auto p-0" id="resume-content">
           <div className="row bg-dark mx-0 text-white">
            <div className="col-sm-2 my-3">
              <span
                className="bg-danger mx-5 py-1 rounded rounded-circle d-flex justify-content-center align-items-middle"
                style={{ width: "6rem", height: "6rem" }}
              >
                <AccountCircleIcon className="pb-4" style={{ fontSize: "7rem" }} />
              </span>
            </div>

            <div className="col-sm-10">
              <div className="text-center">
                <h3 className="fs-1 mt-4 fw-medium">Mr. Fresher</h3>
                <h5 className="fs-4 my-1 fw-medium">SoftWare Developer</h5>
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col-sm-12 ">
              <div className="contact_stripe d-flex bg-success text-center small justify-content-evenly">
                <span>
                  <LocalPhoneRoundedIcon /> 1234567890
                </span>
                <span>
                  <WhatsAppIcon /> 9876543210
                </span>
                <span>
                  <MailOutlineIcon /> fresher.mr@.com
                </span>
              </div>
            </div>

          </div>
          <div className="row mx-0 my-0"  >
            <div className="col-sm-3 bg-info">
              <h5 className="mt-1 ">
                <HomeIcon className="mb-1" color="dark" />
              Address</h5>
              <p className="d-flex ">Your City Your Country Your Pincode</p>
              <h5><LinkIcon />Links</h5>
              <ul>
                <li>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none text-dark"
                  >
                  <LinkedInIcon/>  LinkedIn
                  </a>
                </li>

                <li  >
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none text-dark"
                  >
                 <TwitterIcon/>Twitter
                  </a>
                </li>
                <li>Discord: Your Discord Profile</li>
              </ul>
              <div className="Education">
                <h5>Educational Details</h5>
          
                  <SchoolIcon/>School Name
                  <br />
                  <p className="d-flex small"><CalendarMonthIcon/> Start-End Date or Ongoing </p>
               

                <p className="m-0"><WorkspacePremiumIcon/>Degree Field </p>
                <p className="d-flex small"> Start-End Date or Ongoing </p>

                <p className="small text-center">
                  <DescriptionIcon/>Description: Describe your degree, achievements, or any additional
                  details about your education.
                </p>
              </div>
            </div>

            <div className="col-sm-9">
              {/* Your content for the right part of the row */}
              <div className="professionalExp">
                <h3 className="fw-bold mt-2">Professional Experience 1</h3>
                <div className="experience">
                  <div className="d-flex   text-center align-middle">
                    <h6 className="m-0">Position Title</h6>
                    <h6 className="text-info fw-bold mx-2">at</h6>
                    <h6 className="m-0 fw-medium">Company Name.</h6>
                  </div>

                  <p className="small m-0"><CalendarMonthIcon/>Start Date - End Date or Ongoing</p>
                  <h6 className="my-1">Summary</h6>
                  <p className="text-center">
                    {" "}
                    As a software developer at Tech Company Inc., I have been
                    responsible for developing and maintaining web applications
                    using cutting-edge technologies. My work includes collaborating
                    As a software developer at Tech Company Inc., I have been
                    responsible for developing and maintaining web applications
                    using cutting-edge technologies. My work includes collaborating
                    with cross-functional teams, writing clean and efficient code,
                    and ensuring the scalability and performance of our
                    applications. I also contributed to the design and architecture
                    of software solut
                  </p>
                </div>

                {/* Add more professional experience items here */}
              </div>
              <div className="professionalExp">
                <h3 className="fw-bold">Professional Experience</h3>
                <div className="experience  ">
                  <div className="d-flex   text-center align-middle">
                    <h6 className="m-0">Software Developer</h6>
                    <h6 className="text-info fw-bold mx-2">at</h6>
                    <h6 className="m-0 fw-medium">Tech Company Inc.</h6>
                  </div>
                  <p className="small m-0"> <CalendarMonthIcon/>Start Date - End Date or Ongoing</p>

                  <h6 className="my-1 fw-bold">Summary</h6>
                  <p className="text-center">
                    {" "}
                    As a software developer at Tech Company Inc., I have been
                    responsible for developing and maintaining web applications
                    using cutting-edge technologies. My work includes collaborating
                    with cross-functional teams, writing clean and efficient code,
                    and ensuring the scalability and performance of our
                    applications. also contributed to the design and architecture of
                    software solutions, making a positive impact on the company s
                    projects.
                  </p>
                </div>

                {/* Add more professional experience items here */}
              </div>

              <div className="skills m-0 d-flex flex-wrap ">
                <h3 className=" fs-4 p-0 mt-0 mb-0 skill-h">Skills</h3>
                <p className="my-1  fw-medium ">JavaScript,</p>
                <p className="my-1  fw-medium ">Bootstrap,</p>
                <p className="my-1  fw-medium ">CSS,</p>
                <p className="my-1   fw-medium ">HTML,</p>
                <p className="my-1  fw-medium ">Bootstrap,</p>

                {/* Add more skills as needed */}
              </div>

              <div className="lang m-0 ">
                <div className="d-flex my-2 flex-wrap ">
                  <h3 className="Languages-h fs-4">Language</h3>

                  <p className="my-auto   fw-medium  ">Hindi,</p>
                  <p className="my-auto   fw-medium">French,</p>
                  <p className="my-auto fw-medium">Spanish</p>
                </div>
              </div>

              <div className="hobby m-0 d-flex flex-wrap ">
                <h3 className="Hobbies-h  fs-4">Hobbies</h3>
                <p className="my-auto my-auto fw-medium ">
                  reading,running,boxing etc
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-3  ">

        <Suspense fallback={<div>Loading...</div>}>
                                <PDFGenerator />
                            </Suspense>
        </div>
      </div>
    </div>
  );
}

export default ResumeTemplateFirst;
