import React from "react";
import styles from "./contact-me.module.css";

export default function ContactMe() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        {/* Left column */}
        <div className={styles.left}>
          <h2 className={styles.title}>Contact me</h2>
          <p className={styles.text}>
            Include information like:
          </p>
          <ul className={styles.list}>
            <li>Feel free to reach out with job offers or opportunities</li>
            <li>What role are you looking for?</li>
            <li>How you will contribute to the new team</li>
            <li>Are you open for remote work or relocation?</li>
          </ul>
        </div>

        {/* Right column */}
        <div className={styles.right}>
          <p className={styles.subtitle}>Looking forward to hearing from you!</p>
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
              Profile Page
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
