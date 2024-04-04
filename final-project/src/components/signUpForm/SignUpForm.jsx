const SignUpForm = () => {
  return (
    <form action="api/user" method="POST">
      <label htmlFor="name">
        Name <br />
        <input type="text" name="name" id="name" required />
      </label>
      <label htmlFor="lastname">
        <br />
        Lastname <br />
        <input type="text" name="lastname" id="lastname" required />
      </label>
      <label htmlFor="username">
        <br />
        Username <br />
        <input type="text" name="username" id="username" required />
      </label>
      <label htmlFor="email">
        <br />
        Email <br />
        <input type="email" name="email" id="email" required />
      </label>
      <label htmlFor="password">
        <br />
        Password <br />
        <input type="password" name="password" id="password" required />
      </label>
      <br />
      <input type="submit" value="Sumbit" />
    </form>
  );
};

export default SignUpForm;
