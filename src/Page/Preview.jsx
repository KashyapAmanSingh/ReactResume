 import { useSearchParams } from 'react-router-dom';

 import ResumeTemplateFirst from './template1/resumeTemplate1';
import ResumeTemplateSecond from './template2/resumeTemplate2';

 
const  Preview = () => {
  const [searchParams] = useSearchParams();
   const templateNumber = searchParams.get('template');
   const templates = {
    template1: <ResumeTemplateFirst  />,
    template2: <ResumeTemplateSecond />,
    // Add other templates here wrapped in <></>
  };

   const TemplateComponent = templates[templateNumber] || null;

  return (
    <div>
      <h1>Preview</h1>
      {TemplateComponent}
      
    </div>
  );
};

export default  Preview;


 