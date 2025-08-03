

import React from "react";

import styled from 'styled-components'
import {faGitSquare,faLinkedin,faYoutubeSquare,faTelegram} from '@fortawesome/free-brands-svg-icons'
import {faGraduationCap} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


const SocialNetworkSection = ()=>{

  return(
    <Network>
                <Social href='http://github.com/dfponte' target="_blank">
                      <FontAwesomeIcon icon={faGitSquare} size="4x"/>
                      <h3>github.com/dfponte</h3>
                  </Social>
                   <Social href='https://www.linkedin.com/in/daniel-ponte-a3491778/' target="_blank">
                      <FontAwesomeIcon icon={faLinkedin} size="4x"/>
                      <h3>LinkdIn</h3>
                  </Social>
                   <Social href='http://github.com/dfponte' target="_blank">
                      <FontAwesomeIcon icon={faYoutubeSquare} size="4x"/>
                      <h3>youtube</h3>
                  </Social>
                     <Social href='http://github.com/dfponte' target="_blank">
                      <FontAwesomeIcon icon={faGraduationCap} size="4x"/>
                      <h3>Telegram</h3>
                  </Social>
                 </Network>


    
  );

}

const Network = styled.div`

   padding: 1rem 5rem;
   
`;

const Areas = styled.div`

  display: flex;
  align-items:center;
`;

const Social = styled.a`
   display: flex;
   flex-direction:row;
   justify-content:flex-start;
   align-items: center;
   border-radius:15px 50px;
   padding-left: 2rem;
   text-decoration: none;

   &:hover{
             background:yellow;
             cursor: pointer;
   }


   h3{
    color: gray;
    margin: 2rem;

   }

   color:inherit;
`;


export default SocialNetworkSection;