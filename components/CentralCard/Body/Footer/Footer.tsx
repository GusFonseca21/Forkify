import classes from "./Footer.module.css";

import { GoMarkGithub } from "react-icons/go";
import { GiKnifeFork } from "react-icons/gi";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes["footer-text"]}>
        <div className={classes["footer-text-gustavo"]}>
          <span>Criado por Gustavo Fonseca de Araújo</span>
          <a
            href="https://github.com/GusFonseca21"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GoMarkGithub className={classes["footer-icon"]} />
          </a>
        </div>
        <div className={classes["footer-text-forkify"]}>
          <span >Inspirado em Forkify, de Jonas Schmedtmann</span>
          <a
            href="https://forkify-v2.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GiKnifeFork className={classes["footer-icon"]} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
