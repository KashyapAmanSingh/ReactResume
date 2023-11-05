

import aboutSvg from "../assets/image/about2.svg";
 

// About component
const About = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-7 mt-0 pt-4 ">
          <h1 className="mt-5 pt-4 display-6 text-center fw-bold">
            Welcome to our <span className="text-info">Resume Builder</span> for
            Job Seekers
          </h1>
          <p className="my-4  fw-medium  text-center ">
            We understand the fine art of creating a{" "}
            <span className="text-info">professional CV</span> here at our
            resume building platform. We truly think that a{" "}
            <span className="text-info">strong CV</span> may completely change
            the way you look for a job, help you stand out from the competition,
            and get you one step closer to your ideal position.We use{" "}
            <span className="text-info">ATS Applicant Tracking System</span>{" "}
            technology to evaluate and strengthen your resume with <span className="text-info">targeted keyword</span> for your target 
            company.
          </p>
          <p className="my-4 text-center fw-medium  ">
            Our <span className="text-info">resume builder</span> is your
            reliable traveling companion, not simply a tool. We are here to make
            the process of generating your CV as easy as brewing a perfect cup
            of coffee, with an intuitive design and a lovely range of{" "}
            <span className="text-info">customizable templates.</span> Whether
            you are an experienced professional looking for new opportunities, a
            recent graduate just starting a career, or even considering a career
            change, our platform offers you all the tools and resources you need
            to create a resume that highlights your experiences,
            accomplishments, <span className="text-info">&</span> skills
          </p>
        </div>
        <div className="col-sm-5 mt-0 pt-4 ">
          {/* images at left of the section  */}
          <img
            src={aboutSvg}
            height={520}
            width={500}
            alt="About js img"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default About;
