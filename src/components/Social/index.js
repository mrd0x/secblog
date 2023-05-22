import React from 'react';

import Wrapper from './Wrapper';
import SocialLink from './SocialLink';

function Social({twitter, github, maldev, lots, malapi, filesec, }) {
  return (
    <Wrapper>
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
          @mrd0x
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
      {maldev && (
        <SocialLink href={maldev} target="_blank" rel="noopener">
          <svg height="50px" id="Layer_1" version="1.1" viewBox="0 0 50 50" width="50px"><rect fill="none" height="0" width="0"/><circle cx="25" cy="25" fill="none" r="24" stroke="#6e849c" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/><ellipse cx="25" cy="25" fill="none" rx="12" ry="24" stroke="#6e849c" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/><path d="M6.365,40.438C10.766,37.729,17.479,36,25,36  c7.418,0,14.049,1.682,18.451,4.325" fill="none" stroke="#6e849c" stroke-miterlimit="10" stroke-width="2"/><path d="M43.635,9.563C39.234,12.271,32.521,14,25,14  c-7.417,0-14.049-1.682-18.451-4.325" fill="none" stroke="#6e849c" stroke-miterlimit="10" stroke-width="2"/><line fill="none" stroke="#6e849c" stroke-miterlimit="10" stroke-width="2" x1="1" x2="49" y1="25" y2="25"/><line fill="none" stroke="#6e849c" stroke-miterlimit="10" stroke-width="2" x1="25" x2="25" y1="1" y2="49"/></svg>
          MalDev Academy
        </SocialLink>
      )}
       {lots && (
        <SocialLink href={lots} target="_blank" rel="noopener">
          <svg height="50px" id="Layer_1" version="1.1" viewBox="0 0 50 50" width="50px"><rect fill="none" height="0" width="0"/><circle cx="25" cy="25" fill="none" r="24" stroke="#6e849c" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/><ellipse cx="25" cy="25" fill="none" rx="12" ry="24" stroke="#6e849c" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/><path d="M6.365,40.438C10.766,37.729,17.479,36,25,36  c7.418,0,14.049,1.682,18.451,4.325" fill="none" stroke="#6e849c" stroke-miterlimit="10" stroke-width="2"/><path d="M43.635,9.563C39.234,12.271,32.521,14,25,14  c-7.417,0-14.049-1.682-18.451-4.325" fill="none" stroke="#6e849c" stroke-miterlimit="10" stroke-width="2"/><line fill="none" stroke="#6e849c" stroke-miterlimit="10" stroke-width="2" x1="1" x2="49" y1="25" y2="25"/><line fill="none" stroke="#6e849c" stroke-miterlimit="10" stroke-width="2" x1="25" x2="25" y1="1" y2="49"/></svg>
          LOTS Project
        </SocialLink>
      )}
      {malapi && (
        <SocialLink href={malapi} target="_blank" rel="noopener">
          <svg height="50px" id="Layer_1" version="1.1" viewBox="0 0 50 50" width="50px"><rect fill="none" height="0" width="0"/><circle cx="25" cy="25" fill="none" r="24" stroke="#6e849c" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/><ellipse cx="25" cy="25" fill="none" rx="12" ry="24" stroke="#6e849c" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/><path d="M6.365,40.438C10.766,37.729,17.479,36,25,36  c7.418,0,14.049,1.682,18.451,4.325" fill="none" stroke="#6e849c" stroke-miterlimit="10" stroke-width="2"/><path d="M43.635,9.563C39.234,12.271,32.521,14,25,14  c-7.417,0-14.049-1.682-18.451-4.325" fill="none" stroke="#6e849c" stroke-miterlimit="10" stroke-width="2"/><line fill="none" stroke="#6e849c" stroke-miterlimit="10" stroke-width="2" x1="1" x2="49" y1="25" y2="25"/><line fill="none" stroke="#6e849c" stroke-miterlimit="10" stroke-width="2" x1="25" x2="25" y1="1" y2="49"/></svg>
          MalAPI.io
        </SocialLink>
      )}
      {filesec && (
        <SocialLink href={filesec} target="_blank" rel="noopener">
          <svg height="50px" id="Layer_1" version="1.1" viewBox="0 0 50 50" width="50px"><rect fill="none" height="0" width="0"/><circle cx="25" cy="25" fill="none" r="24" stroke="#6e849c" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/><ellipse cx="25" cy="25" fill="none" rx="12" ry="24" stroke="#6e849c" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/><path d="M6.365,40.438C10.766,37.729,17.479,36,25,36  c7.418,0,14.049,1.682,18.451,4.325" fill="none" stroke="#6e849c" stroke-miterlimit="10" stroke-width="2"/><path d="M43.635,9.563C39.234,12.271,32.521,14,25,14  c-7.417,0-14.049-1.682-18.451-4.325" fill="none" stroke="#6e849c" stroke-miterlimit="10" stroke-width="2"/><line fill="none" stroke="#6e849c" stroke-miterlimit="10" stroke-width="2" x1="1" x2="49" y1="25" y2="25"/><line fill="none" stroke="#6e849c" stroke-miterlimit="10" stroke-width="2" x1="25" x2="25" y1="1" y2="49"/></svg>
          Filesec.io
        </SocialLink>
      )}
    </Wrapper>
  );
}

export default Social;
