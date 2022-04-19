import React from "react";
import { useEffect, useState } from "react";

import axios from "axios";
import useAuth from "../../hooks/useAuth";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  
  return (
    <div className="container">
      <h1>Welcome to The Curly Crew!!!</h1>
    </div>
  );
};

export default HomePage;
