import React from "react";
import { Link } from "react-router-dom";
import Simple from "layouts/Simple";
import Particles from "components/Particles";

const NotFound = () => (
  <>
    <Simple>
      Hey! you're drunk!
      <br /> Go{" "}
      <Link className="link" to="/">
        Home
      </Link>
    </Simple>
    <Particles />
  </>
);

export default NotFound;
