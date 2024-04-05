import styles from "../../styles/ExperienceDetail.module.scss";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { IconHeart } from "@tabler/icons-react";
import { IconBuilding } from "@tabler/icons-react";
import { IconHome } from "@tabler/icons-react";
import { IconStar } from "@tabler/icons-react";
import { IconSailboat } from "@tabler/icons-react";
import { IconUserCircle } from "@tabler/icons-react";

export default function ExperienceDetail() {
  return (
    <div className={styles.ExperieceDetail}>
      <Head>
        <title>Experience</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* ---NAV--- */}
      <nav className={styles.navExperienceDetail}>
        <div className={styles.containerSlider}>
          <Image
            src="/exp1.jpg"
            width={1000}
            height={1000}
            alt="Experience picture"
          />
          <span className={styles.containerIconHeart}>
            <IconHeart size={26} />
          </span>
        </div>
        <div className={styles.containerDesk}>
          <div className={styles.containerImage}>
            <img src="/logoipsum-331.svg" alt="logo" />
          </div>
          <div className={styles.topMenu}>
            <Link href="/#">Preferiti</Link>
            <Link href="/#">Esperienze</Link>
            <Link href="/#">Profilo</Link>
            <Link href="/#">Contatti</Link>
            <Link href="/#">About Us</Link>
          </div>
        </div>
      </nav>

      {/* ---MAIN--- */}
      <main className={styles.mainExperienceDetail}>
        <section className={styles.info}>
          <div className={styles.infoTitleCity}>
            <h1>Titolo Esperienza</h1>
            <div className={styles.city}>
              <p>Città</p>
              <IconBuilding />
            </div>
          </div>
          <div className={styles.infoPriceStars}>
            <p>Rating Stelle</p>
            <p>prezzo</p>
          </div>
          <div className={styles.containerOrganiz}>
            <div className={styles.organizPicture}>
              <Image
                src="/organiz.png"
                width={100}
                height={100}
                alt="organizer picture"
              />
            </div>
            <div className={styles.organizNameSurn}>
              <p>Giulia</p>
              <p>Rossi</p>
            </div>
          </div>
        </section>

        {/* ---DESCRIPTION and PICTURE SECTION FOR DESK--- */}
        <div className={styles.PicAndDescription}>
          <div className={styles.boxPicture}>
            <div className={styles.mainPic}>
              <Image
                src="/exp1.jpg"
                width={400}
                height={400}
                alt="image experience"
              />
            </div>
            <div className={styles.containerPicBottom}>
              <div className={styles.picBottom}>
                <Image
                  src="/exp1.jpg"
                  width={400}
                  height={400}
                  alt="image experience"
                />
              </div>
              <div className={styles.picBottom}>
                <Image
                  src="/exp1.jpg"
                  width={400}
                  height={400}
                  alt="image experience"
                />
              </div>
              <div className={styles.picBottom}>
                <Image
                  src="/exp1.jpg"
                  width={400}
                  height={400}
                  alt="image experience"
                />
              </div>
            </div>
          </div>

          <div className={styles.infoDescription}>
            <h2>Description</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              delectus illum quam, laboriosam aliquam quibusdam? Perspiciatis
              quis quo ab dolores impedit repellat cumque, excepturi eveniet
              corrupti hic cum tenetur quae! Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Quisquam provident natus aliquid
              cumque commodi, earum deleniti nemo ullam, accusamus quae a
              pariatur dicta ipsam ratione inventore labore. Minus, facilis
              animi.
            </p>
            <button className={styles.experienceBtn}>Add Experience</button>
          </div>
        </div>
        <div className={styles.suggestion}>
          <h2>Suggestion for you</h2>
        </div>
      </main>
      <header>
        <div className={styles.menu}>
          <Link href="/#">
            <IconHome />
          </Link>
          <Link href="/#">
            <IconSailboat />
          </Link>
          <Link href="/#">
            <IconHeart />
          </Link>
          <Link href="/#">
            <IconUserCircle />
          </Link>
        </div>
      </header>
      <footer className={styles.footer}>
        <p>Copyright</p>
      </footer>
    </div>
  );
}
