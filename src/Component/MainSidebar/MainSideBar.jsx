 
import HomeIcon from '@mui/icons-material/Home';
 import InfoIcon from '@mui/icons-material/Info';
import MenuIcon from '@mui/icons-material/Menu';
import LOGO from "../../assets/image/LOGO.png"

// sidebar for navigation  from Bootstrape
 const SideBar = () => {
  return (
    <div>
      <div className="offcanvas offcanvas-start" id="SideBar">
        <div className="offcanvas-header">
      
          <img  className="offcanvas-title mx-1 mx-sm-5 pt-2 img-fluid" src={LOGO} alt='Heading Logo'/>
          <button type="button" className="btn-close fw-bold fs-1" data-bs-dismiss="offcanvas"></button>
        </div>
        <div className="offcanvas-body">
       
             {/* home icon navigation */}
              <a className="text-decoration-none d-flex fs-1   align-items-center" href="/">
                <HomeIcon  fontSize='755' color="warning"/>
                <p  className='mx-5 text-info' >Home</p>
              </a> 
             {/* my resume navigation  */}
              <a className="text-decoration-none d-flex fs-1   align-items-center" href="/DetailFill/Preview">
                <InfoIcon   fontSize='55' color="warning"/>
                <p className='mx-5 text-info'>   My Resume</p>
              </a>
             
              {/* About Us navigation  */}
              <a className="text-decoration-none d-flex fs-1   align-items-center" href="/About">
                <InfoIcon   fontSize='55' color="warning"/>
                <p className='mx-5 text-info ' >About Us</p>
              </a>
     
        </div>
      </div>

             {/* navigation menu button  */}
      <div className="container-fluid mt-0">
        <button className="btn mx-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#SideBar">
          <MenuIcon sx={{ fontSize: 70 }} color="info"/>
        </button>
      </div>
   

    </div>
  );
}

export default SideBar;
