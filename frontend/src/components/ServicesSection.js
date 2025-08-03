
import React from "react";
import {About,Description,Image} from '../styles'
import styled from 'styled-components'

import {faGithubSquare} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAlarmClock} from '@fortawesome/free-solid-svg-icons'

import { library } from '@fortawesome/fontawesome-svg-core'

import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)

const ServicesSection = ()=>{

  return(
    <Services>
       <Image>
         <img src="https://tse2.mm.bing.net/th/id/OIP.m34yOcXqmTubXwvBKsS9xQHaEc?rs=1&pid=ImgDetMain&o=7&rm=3"/>
       </Image>
       <ServicesDescription>
         <h2>Things to Conect</h2>
            <Cards>
                <Card>
                    <div className="icon">
                      <FontAwesomeIcon icon="fa-solid fa-temperature-three-quarters" size='3x' />
                      <h3>Sensor de Temperatura</h3>
                    </div>
                    <p>Check my work in Portfolio</p>
                </Card>
                <Card>
                    <div className="icon">
                       <FontAwesomeIcon icon="fa-solid fa-arrows-to-circle" size='3x'/>
                      <h3>Sensor de Pressão</h3>
                    </div>
                    <p>Check my work in Portfolio</p>
                </Card>
                 <Card>
                    <div className="icon">
                      <FontAwesomeIcon icon="fa-solid fa-volume-high" size='3x' />
                      <h3>Alarme de Incêndio</h3>
                    </div>
                    <p>Check my work in Portfolio</p>
                 </Card>
                  <Card>
                    <div className="icon">
                    <FontAwesomeIcon icon="fa-solid fa-ruler-vertical" size='3x'/>                   
                      <h3>Sensor de Nível</h3>
                    </div>
                    <p>Check my work in Portfolio</p>
                 </Card>
            </Cards>
       </ServicesDescription>
    </Services>
  )};

  
const Services = styled(About)`

 h2{
     padding-top:5rem;
 }
 p{
   width: 70%;
   padding: 2rem 0rem 4rem 0rem;

 }
 
`;

const ServicesDescription = styled(Description)`

flex:2;
 
`;

const Cards = styled.div`
 background: red;
 display: flex;
 flex-wrap:wrap;
 padding: 1rem;
`;

const Card = styled.div`
 background: green;
 padding: 0.5rem;
 flex-basis: 20rem;
 align-items:center;
 .icon{
  display: flex;
  align-items:center;
  

 }
 h3{
   margin-left:1rem;
   background:white;
   color:black;
   padding:1rem;
   
 }
 
`;

export default ServicesSection ;