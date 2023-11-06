<<<<<<< HEAD
/* eslint-disable react/prop-types */

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkIcon from '@mui/icons-material/Link';
const Links = ({ socialMediaLinks }) => {
    return (
        <div>
            <h5><LinkIcon /> Links</h5> {/* Display a heading with a LinkIcon */}
            <ul>
                {socialMediaLinks.map((link, index) => {
                    console.log(`Social Media Link ${index + 1}:`, link.links); // Log the social media link for debugging
                    return (
                        <>
                            <li key={index}>
                                {/* Display a LinkedIn link */}
                                <a
                                    href={link.links}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-decoration-none text-dark"
                                >
                                    <LinkedInIcon /> LinkedIn
                                </a>
                            </li>
                            <li key={index + 1}>
                                {/* Display a Twitter link */}
                                <a
                                    href={link.links}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-decoration-none text-dark"
                                >
                                    <TwitterIcon /> Twitter
                                </a>
                            </li>
                        </>
                    );
                })}
            </ul>
        </div>
    )
}

export default Links; // Export the Links component
=======
/* eslint-disable react/prop-types */

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkIcon from '@mui/icons-material/Link';


const Links = ({ socialMediaLinks }) => {
    return (
        <div>
            <h5><LinkIcon />Links</h5>
            <ul>
                {socialMediaLinks.map((link, index) => {
                    console.log(`Social Media Link ${index + 1}:`, link.links);
                    return (
                        <>
                            <li key={index}>
                                <a
                                    href={link.links}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-decoration-none text-dark"
                                >
                                    <LinkedInIcon /> LinkedIn
                                </a>
                            </li>
                            <li key={index + 1}>
                                <a
                                    href={link.links}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-decoration-none text-dark"
                                >
                                    <TwitterIcon /> Twitter
                                </a>
                            </li>
                        </>
                    );
                })}
            </ul>
        </div>
    )
}

export default Links
>>>>>>> 439afe43bfeef0a26b450ba7a0d315a866f1101c
