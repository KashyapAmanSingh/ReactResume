import { Suspense, lazy } from 'react';


import { useSelector } from 'react-redux';
import Skills from '../template1/Template1Component/Skills';
import ProfessionalExperience from '../template1/Template1Component/ProfessionalExperience';
import SecondaryHeading from '../template1/Template1Component/SecondaryHeading';
import TopHeading from '../template1/Template1Component/TopHeading';
import Education from '../template1/Template1Component/Education';
import Links from '../template1/Template1Component/Links';
import Address from '../template1/Template1Component/Address';
import ResumePicture from '../template1/Template1Component/ResumePicture';
import Hobby from "../template1/Template1Component/Hobby";
import Language from '../template1/Template1Component/Language';


const PDFGenerator = lazy(() => import("../../Component/PdfGenerat"));

function ResumeTemplateSecond() {

  const data = useSelector((state) => state.user.UserData);
  console.log(data, "😜😜😜😜😜😜data from   ResumeTemplateFirst");
  const {
    KeySkill: { KeySkills, Accomplishment, Keyhobby, Keylanguages },
    personalDetails: {
      address,
      email,
      firstName,
      jobTitle,
      lastName,
      image,

      phone,
      socialMediaLinks,
    },
    moreExperienceFields,
    QualificationDegree
  } = data;
  Accomplishment.map((accomplish, index) => {
    console.log(`Accomplishment ${index + 1}:`, accomplish.Accomplish);
  });

  return (
    <>
      <div className="container TemplateSecond2 ">
        <div id="resume-content" className=' border border-5 border-success '>
          <div className="row m-0">
            <div className="col-sm-3 bg-warning ">
              <div
                className="mt-4 mb-2 mx-2 rounded-5 img-fluid "

              >
                {/* ResumePicture */}
                <ResumePicture image={image} customStyle={"rounded-3  border border-2 border-danger mx-auto d-block"} />

              </div>

              {/* Address section  */}
              <Address address={address} />

              {/* Connections Links  */}
              <Links socialMediaLinks={socialMediaLinks} />


              <Education QualificationDegree={QualificationDegree} />


            </div>
            <div className="col-sm-9 m-0 p-0 ">
              <div className="professionalExp">

                <div className="text-center text-white bg-dark">
                  <TopHeading firstName={firstName}
                    jobTitle={jobTitle}
                    lastName={lastName} />
                </div>
                <div className=" ">
                  <SecondaryHeading email={email}
                    phone={phone} />
                </div>

                <div className="experience mx-3">
                  < ProfessionalExperience moreExperienceFields={moreExperienceFields} />

                </div>

                {/* Add more professional experience items here */}
              </div>
 
              {/* skills  */}
              <Skills KeySkills={KeySkills} />

              <Language Keylanguages={Keylanguages} />
    
             {/* Keyhobby */}
              <Hobby Keyhobby={Keyhobby} />
            </div>
          </div>
          <div>
          </div>

        </div>
        <div className='pdfBtn mx-5'>
          <Suspense fallback={<div>Loading...</div>}>
            <PDFGenerator />
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default ResumeTemplateSecond;



