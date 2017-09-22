import React from 'react';

export default class UserRegistration extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="emailInput">
            email
            <input type="text" id="emailInput" placeholder="email here" />
          </label>
          <br />
          <label htmlFor="passwordInput">
            password
            <input type="text" id="passwordInput" placeholder="password here" />
          </label>

          <br />
          <label htmlFor="firstName">
            First name
            <input type="text" id="firstName" placeholder="first name here" />

          </label>
          <br />
          <label htmlFor="lastName">
            lastName
            <input type="text" id="lastName" placeholder="last name  here" />
          </label>
          <br />
        </form>
      </div>
    );
  }
}
