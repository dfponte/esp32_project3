

import React from "react";

import {About,Description,Image} from '../styles'



const AboutSection = ()=>{

  return(
    <About>
          <Description>
                
                <h2>Daniel Ferreira da Ponte</h2>
                <h2>Electronic Professor</h2>
                <p>
                   I'm Eletrical Enginner Developer. I Work with Embedded Systems.      
                </p>
                 <button>Contact Me</button>
         </Description>
            
        <image>
           <img src="https://th.bing.com/th/id/OIP.zl4KfmZWp77fK8F8LwN1xwHaEc?w=254&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"/>
        </image>

        
         
          
    </About>
  )

}

export default AboutSection;