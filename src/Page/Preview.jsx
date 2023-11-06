<<<<<<< HEAD
 import { useSearchParams } from 'react-router-dom';

// Import resume templates for different templates
 import ResumeTemplateFirst from '../Component/Templates/template1/resumeTemplate1';
import ResumeTemplateSecond from '../Component/Templates/template2/resumeTemplate2';
import ResumeTemplateThird from '../Component/Templates/template3/resumeTemplate';
import ResumeTemplateFour from '../Component/Templates/template4/ResumeTemplateFour';

 // Preview component for displaying selected resume template

const  Preview = () => {
    // Get search parameters from the URL

  const [searchParams] = useSearchParams();
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
       {TemplateComponent}
     </div>
  );
};

export default  Preview;


=======
 import { useSearchParams } from 'react-router-dom';

 import ResumeTemplateFirst from '../Component/Templates/template1/resumeTemplate1';
import ResumeTemplateSecond from '../Component/Templates/template2/resumeTemplate2';
import ResumeTemplateThird from '../Component/Templates/template3/resumeTemplate';
import ResumeTemplateFour from '../Component/Templates/template4/ResumeTemplateFour';

 
const  Preview = () => {
  const [searchParams] = useSearchParams();
   const templateNumber = searchParams.get('template');
   const templates = {
    template1: <ResumeTemplateFirst  />,
    template2: <ResumeTemplateSecond />,
    template3: <ResumeTemplateThird  />,
    template4: <ResumeTemplateFour/>,  };

   const TemplateComponent = templates[templateNumber] || null;

  return (
    <div>
       {TemplateComponent}
     </div>
  );
};

export default  Preview;


>>>>>>> 439afe43bfeef0a26b450ba7a0d315a866f1101c
 