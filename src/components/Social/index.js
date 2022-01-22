import React from 'react';

import Wrapper from './Wrapper';
import SocialLink from './SocialLink';

function Social({ malapi, twitter, github, filesec }) {
  return (
    <Wrapper>
      {malapi && (
        <SocialLink href={malapi} target="_blank" rel="noopener">
          <svg 
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 339.033 339.033"
          style="enable-background:new 0 0 339.033 339.033;">
          <g>
            <g>
              <path d="M169.516,0C76.044,0,0,76.045,0,169.517c0,93.471,76.044,169.516,169.516,169.516s169.516-76.044,169.516-169.516
                S262.989,0,169.516,0z M143.367,17.224c-13.76,11.78-26.933,26.445-37.516,42.056c-4.766,7.031-9.051,14.291-12.856,21.737H42.93
                C66.133,47.926,101.962,24.312,143.367,17.224z M162.016,244.596h-59.371c-8.934-19.363-15.104-41.7-16.14-66.79h75.511V244.596z
                M33.628,96.017h52.462c-8.754,21.293-13.708,43.833-14.594,66.79H15.156C16.19,138.717,22.756,116.037,33.628,96.017z
                M15.224,177.807H71.49c0.863,23.317,5.768,45.651,14.643,66.79H34.51C23.359,224.625,16.506,201.944,15.224,177.807z
                M44.05,259.596h49.157c3.749,7.149,7.968,14.15,12.671,20.988c12.478,18.143,25.89,31.638,37.218,41.179
                C102.469,314.734,67.229,291.787,44.05,259.596z M162.016,317.587c-16.754-12.269-36.477-31.838-51.588-57.991h51.588V317.587z
                M162.016,162.807H86.505c0.934-23.32,6.239-45.666,15.834-66.79h59.678V162.807z M162.016,81.017H109.99
                c2.556-4.502,5.31-8.944,8.276-13.32c15.442-22.78,32.369-37.697,43.75-46.15V81.017z M323.878,162.807h-56.341
                c-0.886-22.957-5.84-45.497-14.594-66.79h52.461C316.276,116.037,322.844,138.717,323.878,162.807z M296.104,81.017h-50.064
                c-3.805-7.446-8.091-14.706-12.856-21.737c-10.583-15.612-23.76-30.273-37.521-42.057
                C237.068,24.311,272.898,47.925,296.104,81.017z M177.016,21.546c11.381,8.453,28.308,23.37,43.75,46.15
                c2.966,4.376,5.72,8.818,8.276,13.32h-52.026V21.546z M177.016,96.017h59.678c9.595,21.124,14.9,43.47,15.834,66.79h-75.512
                V96.017z M177.016,177.807L177.016,177.807h75.512c-1.035,25.09-7.206,47.427-16.14,66.79h-59.372V177.807z M177.016,259.596
                h51.588c-15.111,26.152-34.834,45.722-51.588,57.991V259.596z M195.94,321.763c11.327-9.54,24.738-23.038,37.215-41.178
                c4.703-6.838,8.922-13.839,12.671-20.988h49.157C271.805,291.786,236.566,314.733,195.94,321.763z M304.523,244.596h-51.622
                c8.875-21.139,13.78-43.472,14.643-66.79h56.265C322.526,201.944,315.674,224.625,304.523,244.596z"/>
            </g>
          </g>
          </svg>
          MalAPI.io
        </SocialLink>
      )}
      {twitter && (
        <SocialLink href={twitter} target="_blank" rel="noopener">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
          </svg>
          Twitter
        </SocialLink>
      )}
      {github && (
        <SocialLink href={github} target="_blank" rel="noopener">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
          </svg>
          Github
        </SocialLink>
      )}
      {filesec && (
        <SocialLink href={filesec} target="_blank" rel="noopener">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path transform="translate(-10,-10)" d="M29.76 29.03v-7.373h-1.537c.152.48.23.975.23 1.49 0 .958-.243 1.838-.73 2.647-.485.807-1.146 1.447-1.98 1.918-.834.47-1.744.705-2.73.705-1.495 0-2.773-.514-3.835-1.543-1.062-1.027-1.593-2.27-1.593-3.726 0-.517.076-1.013.228-1.49H16.21v7.373c0 .2.065.37.2.5.13.14.296.2.494.2H29.07c.188 0 .352-.06.488-.2s.202-.3.202-.49zm-3.233-6.064c0-.94-.343-1.743-1.03-2.406-.686-.664-1.515-.996-2.486-.996-.96 0-1.78.332-2.47.996-.68.663-1.03 1.466-1.03 2.406 0 .942.35 1.743 1.03 2.407s1.51.996 2.48.996c.975 0 1.8-.34 2.49-1s1.03-1.47 1.03-2.41zm3.233-4.097v-1.88c0-.22-.076-.4-.23-.56-.15-.158-.336-.235-.556-.235h-1.98c-.22 0-.406.08-.558.233-.15.155-.228.34-.228.552v1.876c0 .22.076.404.228.556s.337.23.558.23h1.98c.22 0 .406-.078.557-.23.16-.15.23-.338.23-.558zm1.98-2.37v12.99c0 .61-.22 1.14-.66 1.58-.44.44-.967.66-1.582.66H16.502c-.614 0-1.142-.22-1.582-.66-.44-.44-.66-.97-.66-1.586V16.5c0-.614.22-1.142.66-1.582.44-.44.967-.66 1.582-.66h12.996c.615 0 1.14.22 1.582.66.44.44.66.967.66 1.58z" />
          </svg>
          Filesec.io
        </SocialLink>
      )}
    </Wrapper>
  );
}

export default Social;
