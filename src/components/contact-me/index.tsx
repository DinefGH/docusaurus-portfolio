import React from "react";
import styles from "./contact-me.module.css";
import Translate from "@docusaurus/Translate";

export default function ContactMe() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        {/* Left column */}
        <div className={styles.left}>
          <h2 className={styles.title}>
            <Translate id="contact.title">Contact me</Translate>
          </h2>
          <p className={styles.text}>
            <Translate id="contact.info">
              Include information like:
            </Translate>
          </p>
          <ul className={styles.list}>
            <li>
              <Translate id="contact.point1">
                Feel free to reach out with job offers or opportunities
              </Translate>
            </li>
            <li>
              <Translate id="contact.point2">
                What role are you looking for?
              </Translate>
            </li>
            <li>
              <Translate id="contact.point3">
                How you will contribute to the new team
              </Translate>
            </li>
            <li>
              <Translate id="contact.point4">
                Are you open for remote work or relocation?
              </Translate>
            </li>
          </ul>
        </div>

        {/* Right column */}
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
              <img src="/img/mail-icon.svg" alt="Email" />
              fabian.onscreen644@passinbox.com
            </a>
            <a
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactItem}
            >
              <img src="/img/linkedin-icon.svg" alt="LinkedIn" />
              <Translate id="contact.linkedin">Profile Page</Translate>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
