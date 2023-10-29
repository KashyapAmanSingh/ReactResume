 
import HomeIcon from '@mui/icons-material/Home';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import InfoIcon from '@mui/icons-material/Info';
import MenuIcon from '@mui/icons-material/Menu';
 const NvOff = () => {
  return (
    <div>
      <div className="offcanvas offcanvas-start" id="demo">
        <div className="offcanvas-header">
          <h1 className="offcanvas-title">Heading</h1>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
        </div>
        <div className="offcanvas-body">
       
             
              <a className="d-flex fs-1   align-items-center" href="/">
                <HomeIcon  fontSize='755'/>
                <p  className='mx-5'>Home</p>
              </a>
             
             
              <a className="d-flex fs-1   align-items-center" href="/template2" >
                <FormatAlignCenterIcon   fontSize='55' />
                <p  className='mx-5'>Form</p>
              </a>
             
             
              <a className="d-flex fs-1   align-items-center" href="/template2">
                <InfoIcon   fontSize='55'/>
                <p className='mx-5'>   My Resume</p>
              </a>
             
             
              <a className="d-flex fs-1   align-items-center" href="/About">
                <InfoIcon   fontSize='55'/>
                <p className='mx-5'>About Us</p>
              </a>
             
        
        </div>
      </div>

      <div className="container-fluid mt-3">
        <button className="btn   mx-5" type="button" data-bs-toggle="offcanvas" data-bs-target="#demo">
          <MenuIcon sx={{ fontSize: 70 }} color="info"/>
        </button>
      </div>
    </div>
  );
}

export default NvOff;
