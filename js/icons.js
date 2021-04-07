import {dom, library} from '@fortawesome/fontawesome-svg-core';
import {faGithub, faLinkedin, faStackOverflow, faTwitter,} from '@fortawesome/fontawesome-free-brands';

import {faPhone, faEnvelope, faCode} from '@fortawesome/free-solid-svg-icons'
// config.searchPseudoElements = true; //<----- config
console.log(faPhone, 'faPhone')
export default () => {
    library.add(
        faLinkedin,
        faTwitter,
        faStackOverflow,
        faGithub,
        faPhone,
        faEnvelope,
        faCode
    );
    dom.watch();
};

