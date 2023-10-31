 

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
 
        socialMediaLinks: [
          {
            links: "",
          },
        ],
        moreExperienceFields: [
          {
            experience: '',
            companyName: '',
            currently: false,
            endDate: '',
            positionTitle: '',
            startDate: '',
            workSummary: '',
          },
        ], 
  
        QualificationDegree: [
          {
            degree: "",
            schoolName: ' ',
            schoolStartDate: ' ',
            schoolEndDate: ' ',
            currently: false,
            degreeDescription: ' ',
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
