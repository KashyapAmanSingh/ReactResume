
import { Link } from "react-router-dom";
 
 
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import HomeIcon from '@mui/icons-material/Home';

import InfoIcon from '@mui/icons-material/Info';
const NavBar = () => {
  return (
    <div>
      <nav id="sidebar" className="active">
        <div className={`col-auto bg-dark text-info position-fixed vh-100 'active' `}>
          <ul className="nav   ">
            <div className="d-flex justify-content-center"></div>
           
            <li className="nav-item">
              <Link
                href="/"
                className="text-white fw-bolder nav-link fs-2 mt-3 mx-1"
              >
                <HomeIcon/>
                <span className="d-none d-sm-none d-md-none d-lg-inline">
                  Home
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/UserHookForm"
                className="text-white fw-bold nav-link fs-3"
              >
                <FormatAlignCenterIcon size={29} />
                <span className="d-none d-sm-none d-md-none d-lg-inline">
                  {" "}
                    HookForm{" "}
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/template2"
                className="text-white fw-bold d-flex align-items-center nav-link fs-2 mx-1"
              >
                < InfoIcon size={35} />
                <span className="d-none d-sm-none d-md-none d-lg-inline">
                  {" "}
                  Preview{" "}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
