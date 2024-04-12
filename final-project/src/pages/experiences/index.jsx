import styles from "../../styles/Experiences.module.scss";
import CardList from "@/components/cardList";

import Head from "next/head";
import MenuDesk from "@/components/menuDesk";
import MenuMobile from "@/components/menuMobile";
import Footer from "@/components/footer";
import React, { useState, useEffect } from "react";

import { Space, Flex, Select, TextInput } from "@mantine/core";
import Fuse from "fuse.js";
import { IconFilters } from "@tabler/icons-react";

export default function Experiences() {
  const [experiences, setExperiences] = useState([]);

  const [filteredExperiences, setFilteredExperiences] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [fuse, setFuse] = useState(null);
  const [category, setCategory] = useState("");
  useEffect(() => {
    setFuse(new Fuse(experiences, { keys: ["title"] }));
  }, [experiences]);

  const handleSelect = (categoryValue) => {
    if (categoryValue === category) {
      setCategory("");
    } else {
      setCategory(categoryValue);
    }
  };

  const filterExperiences = () => {
    let filtered = [...experiences];

    if (category) {
      filtered = filtered.filter((exp) => exp.category === category);
    }

    if (searchTerm && fuse) {
      const searchResults = fuse.search(searchTerm).map(({ item }) => item);
      filtered = filtered.filter((exp) => searchResults.includes(exp));
    }

    setFilteredExperiences(filtered);
  };

  useEffect(() => {
    filterExperiences();
  }, [searchTerm, category, experiences]);
  useEffect(() => {
    fetch("http://localhost:3000/api/experiences")
      .then((res) => res.json())
      .then((data) => {
        setExperiences(data);
        setFilteredExperiences(data);
      });
  }, []);

  useEffect(() => {
    console.log(experiences);
  }, [experiences]);
  return (
    <div className={styles.Experiences}>
      <Head>
        <title>Experiences</title>
        <meta name="description" content="List of experiences" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={styles.navExperiences}>
        <MenuDesk />
        <MenuMobile />

        <div className={styles.textNav}>
          <h1>
            Discover the myriad of experiences waiting for you within our app.
            Take your time to peruse through our curated selection and choose
            the perfect adventure to create your next cherished memory. Whether
            you're seeking culinary delights, cultural explorations, or
            thrilling outdoor escapades, our app has something special just for
            you. Begin your journey of discovery today and let the magic of
            Sicily unfold before your eyes.
          </h1>
        </div>
      </nav>
      <main className={styles.mainExperiences}>
        {/* ***QUI VIENE AGGIUNTA LA SEARCH*** */}
        <Flex
          direction={"column"}
          align={"center"}
          justify={"center"}
          w={"30%"}
          p={"xl"}
          bg={"white"}
          c={"black"}
          style={{ borderRadius: "5px" }}
        >
          <TextInput
            label="Search"
            type="text"
            placeholder="Search for..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            w={"100%"}
          />
          <Space h={"xl"} />
          <Select
            onChange={(_value, category) => handleSelect(category?.value)}
            label="Pick a category"
            placeholder="All"
            data={["Food", "Wellness", "Events", "Openair"]}
            w={"100%"}
            clearable
            leftSection={<IconFilters />}
            comboboxProps={{
              transitionProps: {
                transition: "pop",
                duration: 200,
                shadow: "md",
              },
            }}
          />
        </Flex>
        <div className={styles.containerCardList}>
          <CardList experiences={filteredExperiences} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
