import React, { useState, useEffect } from "react";
import styles from "../../styles/Reservation.module.scss";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { IconArrowNarrowLeft } from "@tabler/icons-react";
import ModalConfirmation from "../../components/modalConfirmation/ModalConfirmation";
import { useSession } from "next-auth/react";

const Reservation = () => {
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

    // verificare se è l'utente è loggato - check with paolo if this is correct
    // if (!session || !session.user || !session.user.id) {
    //   console.error("User session not found.");
    //   return;
    // }

    // Open the modal for testing purposes and check console log for array:
    console.log("Form data:", {
      phone,
      email,
      selectedTimeSlot,
      selectedGuests,
    });
    setSuccessModalOpen(true);
  };

  //  const userId = session.user.id;

  // Temporarily disable API request - check with paolo if api path is correct plus check on DB if data is received

  //   if (formValid) {
  //     setIsLoading(true);
  //     try {
  //       const response = await fetch(`/api/reservations/${userId}`, {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           phone,
  //           email,
  //           selectedTimeSlot,
  //           selectedGuests,
  //         }),
  //       });

  //       if (response.ok) {
  //         setSuccessModalOpen(true);
  //       } else {
  //         console.error("Error during reservation:", response.statusText);
  //       }
  //     } catch (error) {
  //       console.error("Error during reservation:", error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }

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

export default Reservation;
