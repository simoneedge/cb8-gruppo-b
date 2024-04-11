import styles from "../../styles/Home.module.scss";
import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import SearchBar from "@/components/searchBar";
import CityFilter from "@/components/cityFilter";
import CategoryFilter from "@/components/categoryFilter";
import CardList from "@/components/cardList";
import ImageSlider from "@/components/imageSlider";
import MenuMobile from "@/components/menuMobile";
import MenuDesk from "@/components/menuDesk";
import Footer from "@/components/footer";

export default function Home() {
  // Aggiunta delle esperienze filtrate
  const [experiences, setExperiences] = useState([]);
  const [filteredExperiences, setFilteredExperiences] = useState([]);
  const [cityOptions, setCityOptions] = useState([]);
  const [cityFilter, setCityFilter] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState(null);
  const { data: session } = useSession();
  // Chiamata di tutti i dati delle eperienze complete
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/experiences");
      const data = await res.json();

      const cities = data.map((experience) => experience.geolocation);
      // Così nelle opzioni di scelta non si duplicano le città
      const uniqueCities = [...new Set(cities)];
      // Aggiunta dell'opzione "qualsiasi città" all'inizio dell'array
      uniqueCities.unshift("All");

      setExperiences(data);
      setCityOptions(uniqueCities);
    };
    fetchData();
  }, []);

  useEffect(() => {
    // Applicazione dei filtri ogni volta che cambiano
    let filtered = experiences;
    // Se il filtro è impostato su "All" non applica il filtro per città
    if (cityFilter && cityFilter !== "All") {
      filtered = filtered.filter(
        (experience) => experience.geolocation === cityFilter
      );
    }

    if (categoryFilter) {
      filtered = filtered.filter(
        (experience) => experience.category === categoryFilter
      );
    }

    setFilteredExperiences(filtered);
  }, [cityFilter, categoryFilter]);

  const onHandleSearch = (results) => {
    setFilteredExperiences(results);
  };

  return (
    <div className={styles.Home}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* ---NAV--- */}
      <nav className={styles.navPageHome}>
        <MenuDesk />
        <MenuMobile />
        <div className={styles.sessionLogo}>
          <Image
            src="/logoBianco.svg"
            width={100}
            height={100}
            className={styles.logoImage}
            alt="logo"
            priority
          />
          {/* ----SESSION--- */}
          <div className={styles.session}>
            {session ? (
              <div className={styles.sessionContainer}>
                <p className={styles.textName}>
                  Welcome {session.user.username}!
                </p>
                <button className={styles.btnMenu} onClick={() => signOut()}>
                  Sign Out
                </button>
              </div>
            ) : (
              <div className={styles.containerBtn}>
                <button className={styles.btnMenu} onClick={() => signIn()}>
                  Sign In
                </button>
              </div>
            )}
          </div>
        </div>
        <div className={styles.navText}>
          <h1>
            Discover Sicilian Experiences: Find Local Adventures in Your City!
          </h1>
          <p>
            Embark on a journey through the heart of Sicily's culture, cuisine,
            and landscapes. Explore hidden gems, savor authentic flavors, and
            create unforgettable memories. Start your adventure today by
            discovering unique experiences waiting for you in our app!
          </p>

          <Link href="/experiences" className={styles.btnCallAction}>
            Start Exploring
          </Link>
        </div>
        {/* --SEARCH-- */}
        {/* 
        <div className={styles.containerInput}>
          <SearchBar data={experiences} onSearch={onHandleSearch} />
          <button>Click</button>
        </div>
        <CityFilter options={cityOptions} onFilter={setCityFilter} />
        <CategoryFilter onFilter={setCategoryFilter} />
       */}
      </nav>
      {/* ---MAIN--- */}
      <main className={styles.mainPageHome}>
        <div className={styles.textDesk}>
          <h2>Uncover Sicily with SicilyExperience!</h2>
          <p>
            Embark on a captivating journey through the heart of Sicily with
            SicilyExperience. Our platform offers more than just a booking
            experience - it's your ultimate guide to exploring Sicily, tailored
            to your interests and preferences.
          </p>
        </div>
        <div className={styles.titleAndLink}>
          <h2>#Experience for you</h2>
          <Link href="/experiences">See all</Link>
        </div>
        {/*Slider con le prime 6 esperienze che si trovano sul database */}

        <ImageSlider experiences={experiences.slice(0, 6)} />

        <h2>#Show Experience</h2>
        <SearchBar data={experiences} onSearch={onHandleSearch} />
        <CityFilter options={cityOptions} onFilter={setCityFilter} />
        <CategoryFilter onFilter={setCategoryFilter} />
        <CardList experiences={filteredExperiences} />

        {/* <div className={styles.containerSlider}>
          <div className={styles.boxSlider}>
            <h4>Titolo Evento</h4>
            <p>Orario</p>
            <p>Città</p>
          </div>
        </div> */}

        <div className={styles.titleAndLink}>
          <h2>#Show Experience</h2>
        </div>
      </main>

      <Footer />
    </div>
  );
}
