import React, { useState, useEffect } from "react";
import styles from "../../styles/Reservation.module.scss";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { IconArrowNarrowLeft } from "@tabler/icons-react";
import ModalConfirmation from "../../components/modalConfirmation/ModalConfirmation";
import { useSession } from "next-auth/react";
const ReservationForm = ({ data }) => {
  const { data: session } = useSession();
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [selectedGuests, setSelectedGuests] = useState("");
  const [formValid, setFormValid] = useState(false);
  const [formErrors, setFormErrors] = useState({
    phone: "",
    email: "",
    timeSlot: "",
    guests: "",
  });

  const validateForm = () => {
    const errors = {};
    let isValid = true;

    if (!phone.trim()) {
      errors.phone = "Please enter your phone number";
      isValid = false;
    }

    if (!email.trim()) {
      errors.email = "Please enter your email address";
      isValid = false;
    }

    if (!selectedTimeSlot) {
      errors.timeSlot = "Please select a time slot";
      isValid = false;
    }

    if (!selectedGuests) {
      errors.guests = "Please select number of guests";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  useEffect(() => {
    setFormValid(validateForm());
  }, [phone, email, selectedTimeSlot, selectedGuests]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("arrivato fino a qui");
    if (!formValid) {
      return;
    }
    console.log("arrivato fino a qui 2");

    setIsLoading(true);

    try {
      const reservation = {
        esperienceId: data._id,
        phone: phone,
        email: email,
        timeSlot: selectedTimeSlot,
        guests: selectedGuests,
      };

      const response = await fetch(`/api/reservations/${session.user.id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reservation),
      });

      if (!response.ok) {
        throw new Error("Something went wrong while saving the reservation");
      } else {
        console.log(response);
        setSuccessModalOpen(true);
        setPhone("");
        setEmail("");
        setSelectedTimeSlot("");
        setSelectedGuests("");
      }
    } catch (error) {
      console.error("Error while saving the reservation", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.Reservation}>
      <IconArrowNarrowLeft />
      <img
        className={styles.iconRes}
        src="https://img.icons8.com/stickers/100/reservation.png"
        alt="reservation"
      />
      <form onSubmit={handleSubmit}>
        <div className={styles.hourRes}>
          <h4>Select one of the following time availabilities</h4>
          <label>
            <input
              type="radio"
              name="timeSlot"
              value="10AM-12PM"
              onChange={() => setSelectedTimeSlot("10AM-12PM")}
            />
            10 a.m. - 12 p.m.
          </label>
          <label>
            <input
              type="radio"
              name="timeSlot"
              value="4PM-6PM"
              onChange={() => setSelectedTimeSlot("4PM-6PM")}
            />
            4 p.m. - 6 p.m.
          </label>
          <label>
            <input
              type="radio"
              name="timeSlot"
              value="9PM-11PM"
              onChange={() => setSelectedTimeSlot("9PM-11PM")}
            />
            9 p.m. - 11 p.m.
          </label>
        </div>
        {formErrors.timeSlot && (
          <p style={{ color: "red" }}>{formErrors.timeSlot}</p>
        )}
        <div>
          <PhoneInput
            defaultCountry="ua"
            value={phone}
            onChange={(phone) => setPhone(phone)}
            placeholder="Enter phone number"
          />
        </div>
        {formErrors.phone && <p style={{ color: "red" }}>{formErrors.phone}</p>}
        <div className={styles.emailRes}>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
          />
        </div>
        {formErrors.email && <p style={{ color: "red" }}>{formErrors.email}</p>}
        <div>
          <select
            value={selectedGuests}
            onChange={(e) => setSelectedGuests(e.target.value)}
          >
            <option value="">Select number of guests</option>
            <option value="1">1 guest</option>
            <option value="2">2 guests</option>
            <option value="3">3 guests</option>
            <option value="4">4 guests</option>
            <option value="5">5 guests</option>
            <option value="6">6 guests</option>
            <option value="7">7 guests</option>
            <option value="8">8 guests</option>
            <option value="9">9 guests</option>
            <option value="10">10 guests</option>
          </select>
        </div>
        {formErrors.guests && (
          <p style={{ color: "red" }}>{formErrors.guests}</p>
        )}
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Loading..." : "Book your experience!"}
        </button>
      </form>
      <ModalConfirmation
        isOpen={successModalOpen}
        onClose={() => setSuccessModalOpen(false)}
      >
        <p>Your reservation has been correctly entered!</p>
        <p>You will receive an email with all the details!</p>
      </ModalConfirmation>
    </div>
  );
};

export default ReservationForm;
