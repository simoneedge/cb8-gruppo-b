import React, { useState } from 'react';
import styles from "../../styles/Reservation.module.scss";
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { IconArrowNarrowLeft } from "@tabler/icons-react";

const Reservation = () => {
  const [phone, setPhone] = useState('');

  return (
    <div className={styles.Reservation}>
      <IconArrowNarrowLeft />
      <img className={styles.iconRes} src="https://img.icons8.com/stickers/100/reservation.png" alt="reservation" />
      <div className={styles.hourRes}>
        <h4>Select one of the following time availability</h4>
        <label>
          <input type="checkbox" name="primaFascia" value="primaFascia" />
           10 a.m. - 12 a.m.
        </label>
        <label>
          <input type="checkbox" name="secondaFascia" value="secondaFascia" />
           4 p.m. - 6 p.m.
        </label>
        <label>
          <input type="checkbox" name="terzaFascia" value="terzaFascia" />
           9 p.m. - 11 p.m.
        </label>
      </div>
      <div className={styles.selectRes}>
        <label htmlFor="exp">Choose between these categories of experiences:</label>
        <select name="experience" id="exp">
          <option value="food">Food</option>
          <option value="wellness">Wellness</option>
          <option value="events">Events</option>
          <option value="openair">Openair</option>
        </select>
        <label htmlFor="gues">How many guests?</label>
        <select name="guests" id="gues">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">9</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value=">10">more than 10</option>
        </select>
      </div>
      <div>
        <PhoneInput
          defaultCountry="ua"
          value={phone}
          onChange={(phone) => setPhone(phone)}
          placeholder="Enter phone number"
        />
      </div>
      <div className={styles.emailRes}>
        <input type="email" id="name" name="name" placeholder="Your email address" />
      </div>
      <button className={styles.btnRes}>Confirm your reservation!</button>
    </div>
  );
}

export default Reservation;
