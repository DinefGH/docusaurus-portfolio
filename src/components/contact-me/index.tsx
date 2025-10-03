import React from "react";
import styles from "./contact-me.module.css";
import Translate from "@docusaurus/Translate";
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function ContactMe() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h2 className={styles.title}>
            <Translate id="contact.title">Contact me</Translate>
          </h2>

          <ul className={styles.list}>
            <li>
              <Translate id="contact.point1">
                I’m always excited to connect about new opportunities and collaborations in web development and IT security.
              </Translate>
            </li>
            <li>
              <Translate id="contact.point2">
                Feel free to reach out if you’re looking for a dedicated developer ready to contribute, learn, and grow with your team.
              </Translate>
            </li>
          </ul>
        </div>

        <div className={styles.right}>
          <p className={styles.subtitle}>
            <Translate id="contact.subtitle">
              Looking forward to hearing from you!
            </Translate>
          </p>
          <div className={styles.contactInfo}>
            <a
              href="mailto:fabian.onscreen644@passinbox.com"
              className={styles.contactItem}
            >
            <img src={useBaseUrl('/img/mail-icon.svg')} alt="Email" />
              fabian.onscreen644@passinbox.com
            </a>
            <a
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactItem}
            >
              
              <img src={useBaseUrl('/img/linkedin-icon.svg')} alt="LinkedIn" />
              <Translate id="contact.linkedin">Profile Page</Translate>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
