/* eslint-disable react/jsx-no-target-blank */
import './footer.css';
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { IconContext } from "react-icons";


export const Footer = () => {
   return (
      <IconContext.Provider value={{color: 'black', size: '2em'}}>
         <div className='containerFooter' >
            <div className='footer'>
               <h1>Entre em contato comigo!</h1>
                  <div className='icons'>
                     <a className='linkedin' href='https://www.linkedin.com/in/victor-hugo-994967241/' target='_blank'><BsLinkedin /></a>
                     <a href='https://github.com/victorhugo-js' target='_blank' ><BsGithub /></a>
                  </div>
            </div>
         </div>
      </IconContext.Provider>
   )
}