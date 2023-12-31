
import { Link } from 'react-router-dom';


// Import template images
import resume1 from "../../assets/image/Resume1.png";
import resume2 from "../../assets/image/resumeSecond.png";
import resume3 from "../../assets/image/ThirdResume.png";
import resume4 from "../../assets/image/ResumeFourth.png";
import AlanContainer from '../../Component/VoiceCommand/Alancontainer';
// Home component

const Home = () => {
  return (
    <div>
      <div className="container">
        <h1 className="fw-bolder text-center mb-5 mt-0 display-2">
          Explore Our <span className="text-info">Templates</span> and Begin Your
          <span className="text-info"> Journey</span>
        </h1>
        <div className="row ">


          <div className="col-lg-3 card  text-center my-3    ">
            <img src={resume1} alt="Resume 1" width={250} height={350} className='mx-auto' />
            <div
              className="card-overlay position-absolute w-100 h-100 d-flex justify-content-center align-items-center"

            >
              <Link to="/DetailFill?template=template1" className="btn btn-dark">
                Use Template 1</Link>
            </div>


          </div>
          <div className="col-lg-3    card  text-center my-3  ">
            <img src={resume2} alt="Resume 1" width={250} height={350} className='mx-auto' />
            <div
              className="card-overlay position-absolute w-100 h-100 d-flex justify-content-center align-items-center"
            >
              <Link to="/DetailFill?template=template2" className="btn btn-success">
                Use Template 2</Link>
            </div>
          </div>
          <div className="col-lg-3  card  text-center my-3  ">
            <img src={resume3} alt="Resume 1" width={250} height={350} className='mx-auto' />
            <div className="card-overlay position-absolute w-100 h-100 d-flex justify-content-center align-items-center">
              <Link to="/DetailFill?template=template3" className="btn btn-secondary">

                Use Template 3</Link>
            </div>
          </div>
          <div className="col-lg-3 my-auto   card  text-center my-3 ">
            <img src={resume4} alt="Resume 1" width={250} height={350} className='mx-auto' />
            <div className="card-overlay position-absolute w-100 h-100 d-flex justify-content-center align-items-center">

              <Link to="/DetailFill?template=template4" className="btn btn-warning">

                Use Template 4</Link>
            </div>

          </div>
          <div className=' d-flex justify-content-end mb-5'>
            <AlanContainer />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home
