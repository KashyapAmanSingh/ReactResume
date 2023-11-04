 import { useSearchParams } from 'react-router-dom';

 import ResumeTemplateFirst from './template1/resumeTemplate1';
import ResumeTemplateSecond from './template2/resumeTemplate2';
import ResumeTemplateThird from './template3/resumeTemplate';
import ResumeTemplateFour from './template4/ResumeTemplateFour';

 
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


 