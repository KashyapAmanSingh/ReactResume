 /* eslint-disable react/prop-types */ // Disable prop-types linting for this component

import AccountBoxTwoToneIcon from "@mui/icons-material/AccountBoxTwoTone";
import WorkTwoToneIcon from "@mui/icons-material/WorkTwoTone";
import EngineeringIcon from "@mui/icons-material/Engineering";
import SchoolTwoToneIcon from "@mui/icons-material/SchoolTwoTone";

const SideBar = ({ formCount }) => {
  return (
    <div>
      <div className="border border-4 border-dark">
        {/* Personal Info section */}
        <h5
          className={`px-3 py-1 m-0 border-4 fw-bold border-bottom fs-5 border-dark ${
            formCount === 1 ? "bg-secondary text-white" : ""
          }`}
        >
          <AccountBoxTwoToneIcon /> Personal Info
        </h5>

        {/* Work Experience section */}
        <h5
          className={`px-3 py-1 m-0 border-4 fw-bold text-dark fs-5 border-bottom border-dark ${
            formCount === 2 ? "bg-secondary text-white" : ""
          }`}
        >
          <WorkTwoToneIcon /> Work Experience
        </h5>

        {/* Key Skills section */}
        <h5
          className={`px-3 py-1 m-0 border-4 text-dark fs-5 fw-bold border-bottom border-dark ${
            formCount === 3 ? "bg-secondary text-white" : ""
          }`}
        >
          <EngineeringIcon />
          Key Skills
        </h5>

        {/* Educational Details section */}
        <h5
          className={`px-3 border-4 m-0 py-1 text-dark fs-5 fw-bold border-dark ${
            formCount === 4 ? "bg-secondary text-white" : ""
          }`}
        >
          <SchoolTwoToneIcon />
          Educational Details
        </h5>
      </div>
    </div>
  );
};

export default SideBar;
