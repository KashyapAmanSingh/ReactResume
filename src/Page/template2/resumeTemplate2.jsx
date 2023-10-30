import { Suspense, lazy } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Link } from 'react-router-dom';

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
 
const PDFGenerator = lazy(() => import("../../Component/PdfGenerat"));
 

function ResumeTemplateSecond() {
  return (
    <>
      <div className="container  ">
        <div id="resume-content">
          <div className="row bg-dark text-white">
            <div className="col-sm-2">
              <span
                className="bg-dark mx-5 py-1 rounded rounded-circle d-flex justify-content-center align-items-middle"
                style={{ width: "6rem", height: "6rem" }}
              >
                <AccountCircleIcon
                  className="pb-4"
                  style={{ fontSize: "7rem" }}
                />
              </span>
            </div>

            <div className="col-sm-10">
              <div className="text-center">
                <h3 className="fs-1 my-1 fw-medium">Mr. Fresher</h3>
                <h5 className="fs-4 my-1 fw-medium">SoftWare Developer</h5>
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col-sm-12">
              <div className="col-sm-12">
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
          </div>
          <div className="row" style={{ height: "80vh" }}>
            <div className="col-sm-2 bg-info">
              <h5>Address</h5>
              <p className="d-flex">Your City Your Country Your Pincode</p>
              <h5>Links</h5>
              <ul>
                <li>
                  <Link
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </Link>
                </li>

                <li>
                  <Link
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </Link>
                </li>
                <li>Discord: Your Discord Profile</li>
              </ul>
              <div className="Education">
                <h5>Educational Details</h5>
                <p>
                  School Name
                  <br />
                  <p className="d-flex small"> Start-End Date or Ongoing </p>
                </p>

                <p className="m-0">Degree Field </p>
                <p className="d-flex small"> Start-End Date or Ongoing </p>

                <p className="small text-center">
                  Description: Describe your degree, achievements, or any
                  additional details about your education.
                </p>
              </div>
            </div>

            <div className="col-sm-9">
              {/* Your content for the right part of the row */}
              <div className="professionalExp">
                <h3 className="fw-bold">Professional Experience 1</h3>
                <div className="experience">
                  <div className="d-flex   text-center align-middle">
                    <h6 className="m-0">Position Title</h6>
                    <h6 className="text-info fw-bold mx-2">at</h6>
                    <h6 className="m-0 fw-medium">Company Name.</h6>
                  </div>

                  <p className="small m-0">Start Date - End Date or Ongoing</p>
                  <h6 className="my-1">Summary</h6>
                  <p className="text-center">
                    {" "}
                    As a software developer at Tech Company Inc., I have been
                    responsible for developing and maintaining web applications
                    using cutting-edge technologies. My work includes
                    collaborating with cross-functional teams, writing clean and
                    efficient code, and ensuring the scalability and performance
                    of our applications. I also contributed to the design and
                    architecture of software solutions, making a positive impact
                    on the company projects.
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
                  <p className="small m-0"> Start Date - End Date or Ongoing</p>

                  <h6 className="my-1 fw-bold">Summary</h6>
                  <p className="text-center">
                    {" "}
                    As a software developer at Tech Company Inc., I have been
                    responsible for developing and maintaining web applications
                    using cutting-edge technologies. My work includes
                    collaborating with cross-functional teams, writing clean and
                    efficient code, and ensuring the scalability and performance
                    of our applications. also contributed to the design and
                    architecture of software solutions, making a positive impact
                    on the company s projects.
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
      </div>

      <div className="row">
        <div className="col-sm-12 text-center">
          <Suspense fallback={<div>Loading...</div>}>
            <PDFGenerator />
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default ResumeTemplateSecond;
