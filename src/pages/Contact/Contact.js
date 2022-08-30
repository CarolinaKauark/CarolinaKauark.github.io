import React , {useContext, useEffect} from 'react';
import PortifolioContext from '../../context/PortifolioContext';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import './Contact.css';

export default function Contact() {

  const { updatePage, isEnglish } = useContext(PortifolioContext);

  useEffect(() => {
    updatePage();
  }, [])

  return (
    <footer className='contact'>
      <section className='contact_section'>
        <div className='contact_mail'>
          {isEnglish ? (
              <h2 className='mail_h2'>Feel free to contact me!</h2> )
            : (
              <h2 className='mail_h2'>Sinta-se à vontade para entrar em contato!</h2>
            )}
          <a href = "mailto:ckauark@gmail.com"><img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white" target="_blank" alt="email" className='contact_mail_a'/></a>
        </div>
        <div className='line'></div>
        <div className='contact_title'>
          {isEnglish ? (
              <h3 className='contact_title_1'>Contact details -</h3> )
            : (
              <h3 className='contact_title_1'>Informações de contato -</h3>
            )}
        </div>
        <div className='contact_container'>
          <div className='contact_container_info'>
            <div className='contact_container_info_location'>Salvador - BA</div>
            <div className='contact_container_info_1'>
              <p className='tag'>Tel:{' '}</p>
              <span>+55 71 99401-7901</span>
            </div>
            <div className='contact_container_info_1'>
              <p className='tag'>Email:{' '}</p>
              <span>ckauark@gmail.com</span>
            </div>
          </div>
          <div className='contact_container_web'>
            <a className='contact_container_web_icon' href='https://www.linkedin.com/in/carolina-kauark-fontes/'
                target="_blank"
                rel="noreferrer"
            ><span className='web_text'>LinkedIn</span><BsLinkedin /></a>
            <a className='contact_container_web_icon'
            href='https://github.com/CarolinaKauark'
                target="_blank"
                rel="noreferrer"
            ><span className='web_text'>GitHub</span><BsGithub /></a>
          </div>
        </div>
      </section>
      {/* <div className='contact_line'></div>
      <div className='contact_container_info_copyright'>© 2022 - Designed and built by Carolina Kauark</div> */}
    </footer>
  )
}
