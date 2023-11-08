 import { useLocation, useSearchParams } from 'react-router-dom';

// Import resume templates for different templates
 import ResumeTemplateFirst from '../Component/Templates/template1/resumeTemplate1';
import ResumeTemplateSecond from '../Component/Templates/template2/resumeTemplate2';
import ResumeTemplateThird from '../Component/Templates/template3/resumeTemplate';
import ResumeTemplateFour from '../Component/Templates/template4/ResumeTemplateFour';
import NotFound from './NotFound';
 
 // Preview component for displaying selected resume template

const  Preview = () => {
    // Get search parameters from the URL

  const [searchParams] = useSearchParams();
  const location = useLocation()
  console.log(location.pathname);

   const templateNumber = searchParams.get('template');
     // Define a mapping of template numbers to their respective components
   const templates = {
    template1: <ResumeTemplateFirst  />,
    template2: <ResumeTemplateSecond />,
    template3: <ResumeTemplateThird  />,
    template4: <ResumeTemplateFour/>,  };


  // Select the template component based on the template number from the URL
   const TemplateComponent = templates[templateNumber] || null;

 return (
  <div>
    {location.pathname === "/DetailFill/Preview" ? (
      <>
        <h1 className='mx-5 text-center '>First <span className='text-info'>Select</span> the Template & fill respective <span className='text-info'> Details</span></h1>
        <NotFound />
      </>
    ) : (
      TemplateComponent
    )}
  </div>
);

};

export default  Preview;


 
