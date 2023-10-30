import   { Suspense, lazy } from 'react'
const PDFGenerator = lazy(() => import("../../Component/PdfGenerat"));
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const ResumeTemplateFour = () => {
    return (
        <div className='d-flex justify-content-start'>
            <div className="container">

                <div className="row ">
                    <div className="col-sm-9 mb-5">
                        <div className="TemplateThird mx-5 mb-5  border border-3  border-success" id='resume-content'>

                            {/* <!-- Header with blue background and name/title --> */}
                            <div className="row mx-0  mb-2 ">
                                <div className="col-12 my-2 text-center ">

                                    <h1 className="text-dark mb-0 display-5 text-uppercase">First Name</h1>

                                    <h1 className="text-dark mt-0 display-4 text-uppercase fw-medium">Last Name</h1>



                                </div>
                            </div>
                            <div className="row mx-0  mb-2 ">
                                <div className="col-12 my-2 text-center">

                                    <h3 className="text-dark text-justify text-uppercase">Professional PROFILE</h3>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                        Vero possimus recusandae cupiditate minima consequuntur, cumque rerum delectus similique sequi in
                                        est dignissimos magni fuga! Error voluptatum eveniet culpa molestias enim incidunt? Exercitationem,
                                        maxime at. Magni consectetur, sit, quaerat aliquid laboriosam ipsa sed adipisci inventore reiciendis
                                        voluptatem facilis deleniti harum, at esse quae nesciunt voluptatum praesentium expedita commodi.
                                        Error repellat officiis distinctio. Necessitatibus, aspernatur incidunt facilis nam quasi id.
                                        Tempora, architecto.</p>
                                </div>
                            </div>
                            {/* <!-- Contact Information --> */}
                            <div className="row  mx-1">
                                <div className="col-sm-3 mx-2">
                                    <div className="SideBarContact  small">
                                        <ul className="list-unstyled text-start">
                                            <li>  <LocalPhoneIcon />000-000-0000</li>
                                            <li> <WhatsAppIcon /> 000-000-0000</li>

                                            <li><EmailIcon />  yourmail@mail.com</li>
                                            <li >  <a className='text-decoration-none text-dark' href="#"><LinkedInIcon />yourlinkedin</a></li>

                                            <li><LocationOnIcon />Delhi,India </li>
                                        </ul>
                                    </div>

                                    <div className="SideBarEducation text-start mt-4 mb-2">
                                        <h5 className='fs-5 fw-medium text-uppercase'>Education</h5>
                                        <div className=' small mt-2'>
                                            <p className='m-0 p-0 text-uppercase'>Degree:University Name</p>
                                            <p className='m-0 p-0 '>University Location</p>
                                            <p className='m-0 p-0 '>Degree:Type</p>
                                            <p className='m-0 p-0 '>Degree:Timeline</p>
                                        </div>
                                        <div className=' small mt-2'>
                                            <p className='m-0 p-0 text-uppercase'>Degree:University Name</p>
                                            <p className='m-0 p-0 '>University Location</p>
                                            <p className='m-0 p-0 '>Degree:Type</p>
                                            <p className='m-0 p-0 '>Degree:Timeline</p>
                                        </div>
                                    </div>
                                    {/* <!-- Expertise --> */}

                                    <div className="SideBarExpertise mt-4 mb-2">
                                        <h5 className='fs-5  fw-medium text-uppercase'>Skills</h5>
                                        <ul className="list-unstyled small">
                                            <li >HTML</li>
                                            <li  >CSS</li>
                                            <li>JavaScript</li>
                                            <li>React</li>
                                            <li>JavaScript</li>
                                            <li>React</li>  <li>JavaScript</li>
                                            <li>React</li>
                                        </ul>
                                    </div>


                                </div>


                                {/* <!-- Professional Profile --> */}

                                <div className="col-sm-8  ">

                                    <div className="row mt-1">
                                        <h5 className='fs-3 fw-medium  text-success text-uppercase'>Work experience</h5>
                                        <h6 className='m-0  text-success text-uppercase'>Position Title</h6>
                                        <p className=' text-success small'>Company Name, | <span>Time Line</span></p>
                                        <p className='  text-justify small'>Job Description and responsibilities... Lorem, ipsum dolor sit amet
                                            consectetur adipisicing elit. Molestias necessitatibus nihil maiores!
                                            Voluptates, velit? Veritatis fugit consectetur, odit reiciendis perspiciatis,
                                            velit possimus voluptates ipsam illum aut eos esse voluptatibus accusantium
                                            quibusdam, ab veniam dolorem non nemo enim quisquam fugiat voluptas

                                        </p>
                                        <ul className='mx-3   text-muted small'>
                                            <li>Responsibility 1</li>
                                            <li>Responsibility 2</li>
                                            <li>Responsibility 3</li>
                                        </ul>
                                    </div>
                                    
                                    <div className="row mt-1">
                                        <h5 className='fs-3 fw-medium  text-success text-uppercase'>Work experience</h5>
                                        <h6 className='m-0  text-success text-uppercase'>Position Title</h6>
                                        <p className=' text-success small'>Company Name, | <span>Time Line</span></p>
                                        <p className='  text-justify small'>Job Description and responsibilities... Lorem, ipsum dolor sit amet
                                            consectetur adipisicing elit. Molestias necessitatibus nihil maiores!
                                            Voluptates, velit? Veritatis fugit consectetur, odit reiciendis perspiciatis,
                                            velit possimus voluptates ipsam illum aut eos esse voluptatibus accusantium
                                            quibusdam, ab veniam dolorem non nemo enim quisquam fugiat voluptas

                                        </p>
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

