import React from "react";
import Layout from "@theme/Layout";
import styles from "./legal.module.css";

export default function LegalNotice(): JSX.Element {
  return (
    <Layout title="Legal Notice" description="Impressum / Legal Notice">
      <section className={styles.legalSection}>
        <div className={styles.container}>
          <h1 className={styles.title}>Legal Notice</h1>
          <p className={styles.intro}>
            This website is a personal portfolio created to showcase projects,
            skills and experience. It is not a commercial offer or shop.
          </p>

          <div className={styles.infoBlock}>
            <h2>Contact Information</h2>
            <p>
              Fabian Dürr
              <br />
              Haubenschloßstraße 13
              <br />
              87435 Kempten
              <br />
              Germany
            </p>
            <p>
              Email: <a href="mailto:fabian.onscreen644@passinbox.com">fabian.onscreen644@passinbox.com</a>
            </p>
          </div>

          <div className={styles.infoBlock}>
            <h2>Disclaimer</h2>
            <p>
              The contents of this website have been created with the utmost
              care. However, I cannot guarantee the accuracy, completeness or
              timeliness of the content. As a service provider I am responsible
              for my own content on these pages according to § 7 paragraph 1 TMG
              (German Telemedia Act).
            </p>
          </div>

          <div className={styles.infoBlock}>
            <h2>External Links</h2>
            <p>
              This website may contain links to external websites of third
              parties. I have no influence on the content of these external
              sites and therefore cannot accept any liability for such content.
              The respective provider or operator of the pages is always
              responsible for the content of the linked pages.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
