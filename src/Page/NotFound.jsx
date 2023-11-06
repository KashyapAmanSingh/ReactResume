<<<<<<< HEAD
 import AlanContainer from "../Component/VoiceCommand/Alancontainer"
import notFound from "../assets/image/notFound.svg"
 
const NotFound = () => {
   return (
    <>         
    <div className="text-center text-warning fs-1 diaplay-2 fw-bold my-auto">NotFound 404 ERRORS</div>
 
 <img className="img-fluid mx-auto d-block" src={notFound}/> 
    <div className=' d-flex justify-content-end mb-5'>
    <AlanContainer />  </div>
     </>

    )
}

=======
 
const NotFound = () => {
  return (
    <div className="text-center text-warning fs-1 diaplay-2 fw-bold my-auto">NotFound 404 ERRORS</div>
  )
}

>>>>>>> 439afe43bfeef0a26b450ba7a0d315a866f1101c
export default NotFound