import { FaYoutube, FaInstagram, FaGithub } from 'react-icons/fa';


export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="https://www.youtube.com/@jeremiasalvarez1872">Youtube
        <FaYoutube /></a>
        <a href="https://www.instagram.com/">Instagram <FaInstagram/></a>
        <a href="https://github.com/AlvarezJeremias">Github<FaGithub/></a>
      </div>
    </footer>
  )
}
