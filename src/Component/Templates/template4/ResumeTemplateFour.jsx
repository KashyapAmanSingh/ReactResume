import { Suspense, lazy } from 'react'
const PDFGenerator = lazy(() => import("../../PdfGenerat"));
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useSelector } from 'react-redux';
import ProfessionalExperience from '../../TemplateSubComponent/ProfessionalExperience';
import Template34Qualification from '../template3/template34Qualification';



const ResumeTemplateFour = () => {
     const data = useSelector((state) => state.user.UserData);
    console.log(data, "😜😜😜😜😜😜data from   ResumeTemplateFirst");
    const {
        KeySkill: { KeySkills },
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


    // Map and log social media links
    socialMediaLinks.map((link, index) => {
        console.log(`Social Media Link ${index + 1}:`, link.links);
    });
    return (
        <div className='d-flex justify-content-start'>
            <div className="container">

                <div className="row ">
                    <div className="col-sm-9 mb-5">
                        <div className="TemplateFour mh-130 Third mx-5 mb-5  border border-3  border-success" id='resume-content'>

                            {/* <!-- Header with blue background and name/title --> */}
                            <div className="row mx-0  mb-2 ">
                                <div className="col-12  text-center ">
                                    <h1 className="text-dark mb-0 display-5 text-uppercase "> {firstName}</h1>
                                    <h1 className="text-success mt-0 mb-0 display-5 text-uppercase fw-medium">{lastName}</h1>
                                </div>
                            </div>
                            <div className="row mx-0  mb-2 ">
                                <div className="col-12 my-2 text-center">

                                    <h3 className="text-dark text-center text-uppercase"> {jobTitle}</h3>
                                    <p>     {moreExperienceFields[0].workSummary} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore quaerat, architecto ab non provident repellendus autem blanditiis aut, sed aliquam eius fuga quasi. Laudantium iusto mollitia, repellendus tempore blanditiis animi ab harum, beatae sequi totam rem, ut architecto non laboriosam!</p>
                                </div>
                            </div>
                            {/* <!-- Contact Information --> */}
                            <div className="row  mx-1">
                                <div className="col-sm-3 mx-2">
                                    <div className="SideBarContact  small">
                                        <ul className="list-unstyled text-end">
                                            <li>  <LocalPhoneIcon color="success" />{phone[0]}</li>
                                            <li><WhatsAppIcon color="success" /> {phone[1]}</li>

                                            <li> <EmailIcon color="success" />{email.slice(0, 18)}</li>
                                            <li >  <a className='text-decoration-none text-dark' href={socialMediaLinks[0]}>Linkdin<LinkedInIcon color="success" /></a></li>

                                            <li><LocationOnIcon color="success" /> {`${city} ${country} `} </li>
                                        </ul>
                                    </div>

                                    <div className="SideBarEducation text-start mt-4 mb-2">
                                        <h5 className='fs-5 fw-medium text-uppercase'>Education</h5>
                                        <Template34Qualification QualificationDegree={QualificationDegree} />

                                    </div>
                                    {/* <!-- Expertise --> */}

                                    <div className="SideBarExpertise mt-4 mb-2">
                                        <h5 className='fs-5  fw-medium text-uppercase'>Skills</h5>

                                        {KeySkills.map((skill, index) => (
                                            <ul className="list-unstyled multi-column-list" key={index}>
                                                <li >{skill.skill}</li>
                                            </ul>
                                        ))}

                                    </div>



                                </div>


                                {/* <!-- Professional Profile --> */}

                                <div className="col-sm-8  ">

                                    <div className="row mt-1">
                                        <h5 className='fs-3 fw-medium  text-success text-uppercase'>Work experience</h5>
                                        < ProfessionalExperience moreExperienceFields={moreExperienceFields} />

                                        <ul className='mx-3   text-muted small'>
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

export default ResumeTemplateFour

