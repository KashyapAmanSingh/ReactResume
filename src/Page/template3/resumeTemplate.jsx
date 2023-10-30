import { Suspense, lazy } from 'react'
const PDFGenerator = lazy(() => import("../../Component/PdfGenerat"));
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const ResumeTemplateThird = () => {
    return (
        <div className='d-flex justify-content-start'>
            <div className="container">

                <div className="row ">
                    <div className="col-sm-9 mb-5">
                        <div className="TemplateThird mx-5 mb-5  border border-3  border-success" id='resume-content'>

                            {/* <!-- Header with blue background and name/title --> */}
                            <div className="row mx-0 bg-success mb-2 ">
                                <div className="col-12 my-2 text-center">
                                    <div className="rounded rounded-circle  ">
                                        <h1 className="text-white display-3 ">Your Name</h1>
                                    </div>
                                    <h3 className="text-white ">Professional Title</h3>
                                </div>
                            </div>

                            {/* <!-- Contact Information --> */}
                            <div className="row  mx-1">
                                <div className="col-sm-3 ">
                                    <div className="SideBarContact mt-1">
                                        <ul className="list-unstyled text-end">
                                            <li>  000-000-0000<LocalPhoneIcon color="success" /></li>
                                            <li>  000-000-0000<WhatsAppIcon color="success" /></li>

                                            <li>  yourmail@mail.com<EmailIcon color="success" /></li>
                                            <li >  <a className='text-decoration-none text-dark' href="#">yourlinkedin<LinkedInIcon color="success" /></a></li>

                                            <li>Delhi,India<LocationOnIcon color="success" /> </li>
                                        </ul>
                                    </div>




                                    <div className="SideBarEducation text-end">
                                        <h5 className='fs-4 text-success fw-medium'>Education</h5>
                                        <div className=' mt-2'>
                                            <p className='m-0 p-0 '>Degree Type 1</p>
                                            <p className='m-0 p-0 '>Degree: Master Degree</p>
                                            <p className='m-0 p-0 '>Degree:University Name</p>
                                            <p className='m-0 p-0 '>Degree:Timeline</p>
                                        </div>
                                        <div className=' mt-2 pt-3'>
                                            <p className='m-0 p-0 '>Degree Type 2</p>
                                            <p className='m-0 p-0 '>Degree: Master Degree</p>
                                            <p className='m-0 p-0 '>Degree:University Name</p>
                                            <p className='m-0 p-0 '>Degree:Timeline</p>
                                        </div>


                                        {/* <!-- Expertise --> */}

                                        <div className="SideBarExpertise mt-4">
                                            <h5 className='fs-4 fw-medium text-success'>Expertise</h5>
                                            <ul className="list-unstyled multi-column-list">
                                                <li >HTML</li>
                                                <li  >CSS</li>
                                                <li>JavaScript</li>
                                                <li>React</li>
                                                <li>Python</li>
                                                <li >Java</li>
                                                <li>C++</li>
                                                <li>SQL</li>
                                                <li>PHP</li>
                                                <li>Ruby</li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>


                                {/* <!-- Professional Profile --> */}

                                <div className="col-sm-9  ">
                                    <h5 className='fs-3 fw-medium  text-success'>Professional Profile</h5>
                                    <p className='text-break'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                    <div className="row mt-1">
                                        <h5 className='fs-3 fw-medium  text-success'>Professional Experience</h5>
                                        <h6 className='m-0  text-success'>Position Title</h6>
                                        <p className=' text-success'>Company Name, 2013-Present</p>
                                        <p className='text-break'>Job Description and responsibilities... Lorem, ipsum dolor sit amet
                                            consectetur adipisicing elit. Molestias necessitatibus nihil maiores!
                                            Voluptates, velit? Veritatis  enim quisquam fugiat voluptas

                                        </p>
                                        <ul className='mx-5 px-2  text-muted'>
                                            <li>Responsibility 1</li>
                                            <li>Responsibility 2</li>
                                            <li>Responsibility 3</li>
                                        </ul>
                                    </div>
                                    <div className="row mt-1">
                                        <h5 className='fs-3 fw-medium  text-success'>Professional Experience</h5>
                                        <h6 className='m-0  text-success'>Position Title</h6>
                                        <p className=' text-success'>Company Name, 2013-Present</p>
                                        <p className='text-break'>Job Description and responsibilities... Lorem, ipsum dolor sit amet
                                            consectetur adipisicing elit. Molestias necessitatibus nihil maiores!
                                            Voluptates, velit? Veritatis fugit con at voluptas

                                        </p>
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