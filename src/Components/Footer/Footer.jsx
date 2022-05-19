import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import s from "./footer.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Container } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";

function Footer() {
  return (
    <div className={s.footer}>
      <Container sx={{ display: "flex" }} className={s.contenedorFooter}>
        <div className={s.titulo}>Sant Shop</div>
        <div className={s.redes}>
          <a href="https://www.instagram.com/" className={s.link}>
            <InstagramIcon fontSize="large" sx={{ color: "white" }} />
          </a>
          <a href="https://www.facebook.com/" className={s.link}>
            <FacebookIcon fontSize="large" sx={{ color: "white" }} />
          </a>
          <a href="https://www.instagram.com/" className={s.link}>
            <TwitterIcon fontSize="large" sx={{ color: "white" }} />
          </a>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
