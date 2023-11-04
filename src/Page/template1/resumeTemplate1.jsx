import { Suspense, lazy } from "react";
const PDFGenerator = lazy(() => import("../../Component/PdfGenerat"));
import { useSelector } from 'react-redux';
import Education from "./Template1Component/Education";
import ProfessionalExperience from "./Template1Component/ProfessionalExperience";
import Skills from "./Template1Component/Skills";
import Language from "./Template1Component/Language";
import Hobby from "./Template1Component/Hobby";
import Links from "./Template1Component/Links";
import Address from "./Template1Component/Address";
import TopHeading from "./Template1Component/TopHeading";
import SecondaryHeading from "./Template1Component/SecondaryHeading";
import ResumePicture from "./Template1Component/ResumePicture";



function ResumeTemplateFirst() {
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
    <div className="container ">
      <div className="row ">
        <div className="col-sm-7 mh-200 border border-4 border-info mx-auto my-auto p-0" id="resume-content">
          <div className="row bg-dark mx-0 text-white">
            {/* ResumePicture */}
            {/* rounded-5  rounded rounded-circle */}
            <div className="col-sm-2 my-auto py-2" >
              <ResumePicture image={image} customStyle={" rounded-5  rounded rounded-circle border border-2 border-info"} />
            </div>

            {/* TopHeading */}
            <div className="col-sm-10">
              <TopHeading firstName={firstName}
                jobTitle={jobTitle}
                lastName={lastName} />
            </div>
          </div>
          {/* SecondaryHeading */}
          <div className="row ">
            <div className="col-sm-12 ">
              <SecondaryHeading email={email}
                phone={phone} />
            </div>

          </div>
          <div className="row mx-0 my-0"  >
            <div className="col-sm-3 bg-info">
              <Address address={address} />

              {/* Connections Links  */}
              <Links socialMediaLinks={socialMediaLinks} />

              {/* education field  */}
              <Education QualificationDegree={QualificationDegree} />

            </div>

            {/* ProfessionalExperience fields */}
            <div className="col-sm-9">
              < ProfessionalExperience moreExperienceFields={moreExperienceFields} />

              {/* KeySkills */}
              <Skills KeySkills={KeySkills} />

              {/* Keylanguages */}
              <Language Keylanguages={Keylanguages} />

              {/* Keyhobby */}
              <Hobby Keyhobby={Keyhobby} />

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