import styles from "../../styles/Home.module.scss";
import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import SearchBar from "@/components/searchBar";
import CityFilter from "@/components/cityFilter";
import CategoryFilter from "@/components/categoryFilter";
import CardList from "@/components/cardList";
import ImageSlider from "@/components/imageSlider";
import MenuMobile from "@/components/menuMobile";
import MenuDesk from "@/components/menuDesk";
import Footer from "@/components/footer";

// Immagini dello slider
const images = ["/exp1.jpg", "/sicilyexp-pic.jpeg"];

export default function Home() {
  // Aggiunta delle esperienze filtrate
  const [experiences, setExperiences] = useState([]);
  const [filteredExperiences, setFilteredExperiences] = useState([]);
  const [cityOptions, setCityOptions] = useState([]);
  const [cityFilter, setCityFilter] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState(null);
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
        <h1>
          Discover Sicilian Experiences: Find Local Adventures in Your City
        </h1>

        <div className={styles.containerInput}>
          <input type="text" placeholder="search..." />
          <button>Click</button>
        </div>
        <div className={styles.filterIcons}>
          <button>Food & wine</button>
          <button>Wellness</button>
          <button>Events</button>
          <button>Open Air</button>
        </div>
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
          <Link href="#">See all</Link>
        </div>
        {/* //Slider */}
        <ImageSlider images={images} />
        <div className={styles.containerSlider}>
          <div className={styles.boxSlider}>
            <h4>Titolo Evento</h4>
            <p>Orario</p>
            <p>Città</p>
          </div>
          {/* <div className={styles.boxSlider}>
            <h4>Titolo Evento</h4>
            <p>Orario</p>
            <p>Città</p>
          </div>
          <div className={styles.boxSlider}>
            <h4>Titolo Evento</h4>
            <p>Orario</p>
            <p>Città</p>
          </div>
          <div className={styles.boxSlider}>
            <h4>Titolo Evento</h4>
            <p>Orario</p>
            <p>Città</p>
          </div> */}
        </div>
        <h2>#Show Experience</h2>
        <SearchBar data={experiences} onSearch={onHandleSearch} />
        <CityFilter options={cityOptions} onFilter={setCityFilter} />
        <CategoryFilter onFilter={setCategoryFilter} />
        <CardList experiences={filteredExperiences} />
        =======
        <div className={styles.titleAndLink}>
          <h2>#Show Experience</h2>
        </div>
        {/* List with random cards, but updates when the search is performed */}
      </main>
      {/* bottom menu */}
      {/* ---HEADER-- */}
      <header>
        <MenuMobile />
      </header>
      {/* ---FOOTER--- */}
      <Footer />
      {/* <footer className={styles.footer}>
        <p>Copyright</p>
      </footer> */}
    </div>
  );
}
