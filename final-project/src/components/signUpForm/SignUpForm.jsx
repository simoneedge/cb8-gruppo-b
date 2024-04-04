import { useFormik } from "formik";
// Importa tutte le funzioni dal modulo "yup"
import * as Yup from "yup";

const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .matches(/^[A-Za-z]*$/, "*Only letters are allowed*")
        .required("*Required*"),
      lastname: Yup.string()
        .matches(/^[A-Za-z]*$/, "*Only letters are allowed*")
        .required("*Required*"),
      username: Yup.string().required("*Required*"),
      email: Yup.string()
        .email("*Invalid email address*")
        .required("*Required*"),
      password: Yup.string()
        .min(8, "*Must be at least 8 characters*")
        .matches(/[a-z]/, "*Must contain at least one lowercase char*")
        .matches(/[A-Z]/, "*Must contain at least one uppercase char*")
        .matches(/\d/, "*Must contain at least one num*")
        .required("*Required*"),
    }),
    onSubmit: (values) => {
      // Per adesso stampa i valori in console
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">
        Name <br />
        <input
          type="text"
          name="name"
          id="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.errors.name ? <div>{formik.errors.name}</div> : null}
      </label>
      <label htmlFor="lastname">
        <br />
        Lastname <br />
        <input
          type="text"
          name="lastname"
          id="lastname"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastname}
        />
        {formik.errors.lastname ? <div>{formik.errors.lastname}</div> : null}
      </label>
      <label htmlFor="username">
        <br />
        Username <br />
        <input
          type="text"
          name="username"
          id="username"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
        />
        {formik.errors.username ? <div>{formik.errors.username}</div> : null}
      </label>
      <label htmlFor="email">
        <br />
        Email <br />
        <input
          type="email"
          name="email"
          id="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.errors.email ? <div>{formik.errors.email}</div> : null}
      </label>
      <label htmlFor="password">
        <br />
        Password <br />
        <input
          type="password"
          name="password"
          id="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.errors.password ? <div>{formik.errors.password}</div> : null}
      </label>
      <br />
      <input type="submit" value="Sumbit" />
    </form>
  );
};

export default SignUpForm;
