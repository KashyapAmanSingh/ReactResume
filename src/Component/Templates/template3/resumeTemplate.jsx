import { Suspense, lazy } from 'react'
 import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useSelector } from 'react-redux';
import TopHeading from '../../TemplateSubComponent/TopHeading';

import ProfessionalExperience from '../../TemplateSubComponent/ProfessionalExperience';
import Template34Qualification from './template34Qualification';
 
const PDFGenerator = lazy(() => import("../../Pdf File/PdfGenerat"));
const ResumeTemplateThird = () => {
    const data = useSelector((state) => state.user.UserData);
     const {
        KeySkill: { KeySkills  },
        QualificationDegree,
        personalDetails: {
            address: { city, country },
            email,
            firstName,
            jobTitle,
            lastName,
            phone,
            socialMediaLinks,
        },
        moreExperienceFields,
    } = data;

 
    return (
        <div className='d-flex justify-content-start'>
            <div className="container">
                <div className="row ">
                    <div className="col-sm-9 mb-5">
                        <div className="TemplateThird mx-5 mb-5  border border-3  border-success" id='resume-content'>

                            {/* <!-- Header with blue background and name/title --> */}
                            <div className="row mx-0 bg-success mb-2 ">
                                <div className="col-12 my-2 text-center text-white">
                                    <TopHeading firstName={firstName}
                                        jobTitle={jobTitle}
                                        lastName={lastName} />
                                </div>
                            </div>

                            {/* <!-- Contact Information --> */}
                            <div className="row  mx-1">
                                <div className="col-sm-3 ">
                                    <div className="SideBarContact mt-2">
                                        <ul className="list-unstyled text-end">
                                            <li>  {phone[0]}<LocalPhoneIcon color="success" /></li>
                                            <li> {phone[1]}<WhatsAppIcon color="success" /></li>

                                            <li> {email.slice(0, 18)}<EmailIcon color="success" /></li>
                                            <li >  <a className='text-decoration-none text-dark' href={socialMediaLinks[0]}>Linkdin<LinkedInIcon color="success" /></a></li>

                                            <li> {`${city} ${country} `}<LocationOnIcon color="success" /> </li>
                                        </ul>
                                    </div>

                                    <div className="SideBarEducation text-end">
                                        <h5 className='fs-4 text-success fw-medium'>Education</h5>
                                        <Template34Qualification QualificationDegree={QualificationDegree}/>

 


                                        {/* <!-- Expertise --> */}

                                        <div className="SideBarExpertise mt-4">
                                            <h5 className='fs-4 fw-medium text-success'>Expertise</h5>

                                            {KeySkills.map((skill, index) => (
                                                <ul className="list-unstyled multi-column-list" key={index}>
                                                    <li >{skill.skill}</li>
                                                </ul>
                                            ))}


                                        </div>


                                    </div>
                                </div>


                                {/* <!-- Professional Profile --> */}

                                <div className="col-sm-9  ">
                                    <h5 className='fs-3 fw-medium  text-success'>Professional Profile</h5>
                                    <p className='text-break'>
                                        {moreExperienceFields[0].workSummary}
                                    </p>
                                    <div className="row mt-1">
                                        < ProfessionalExperience moreExperienceFields={moreExperienceFields} />


                                        <ul className='mx-5 px-2  text-muted'>
                                            <li>Responsibility 1</li>
                                            <li>Responsibility 2</li>
                                            <li>Responsibility 3</li>
                                        </ul>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="col-sm-3 mt-5 ">
                        <div className="  text-center mx-auto">
                            <Suspense fallback={<div>Loading...</div>}>
                                <PDFGenerator />
                            </Suspense>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default ResumeTemplateThird 