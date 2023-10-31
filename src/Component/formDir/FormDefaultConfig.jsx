 

export const FormDefaultConfig = {
 
    defaultValues: {
        personalDetails: {
          address: {
            pincode: '',
            city: '',
            country: '',
          },
          email: '',
          firstName: '',
          jobTitle: '',
          lastName: '',
          phone: ['', ''],
          image: "",
        },
     
        professionalExperience: {
          companyName: '',
          currently: false,
          endDate: '',
          positionTitle: '',
          startDate: '',
          workSummary: '',
        },
  
        Education: {
          currently: true,
          schoolEndDate: ' ',
          schoolName: ' ',
          schoolStartDate: ' ',
          workSummaryDescription: ' ',
        },
  
        socialMediaLinks: [
          {
            links: "",
          },
        ],
        moreExperienceFields: [
          {
            experience: "",
          },
        ],
  
        QualificationDegree: [
          {
            degree: "",
          },
        ],
        Accomplishment: [
          {
            Accomplish: '',
          },
        ],
        KeySkills: [
          {
            skill: '',
          },
        ],
        Keyhobby: [
          {
            Hobby: '',
          },
        ],
        Keylanguages: [
          {
            language: '',
          },
        ],
   
      }
  
};
