function Crazyyyyyyyy() {

    return(
        <div>

            <h2>Registration Form</h2>
   <form className="form-container" action="/submit" method="post">
  <div className="form-group">
    <label htmlFor="name">Full Name:</label>
    <input type="text" id="name" name="fullname" required />
  </div>

  <div className="form-group">
    <label htmlFor="email">Email:</label>
    <input type="email" id="email" name="email" required />
  </div>

  <div className="form-group">
    <label htmlFor="password">Password:</label>
    <input type="password" id="password" name="password" required />
  </div>

  <button type="submit">Submit</button>
</form>

        </div>
    );
}

export default Crazyyyyyyyy;