import { useEffect, useState } from "react";
import Context from "./Context";
import PropTypes from "prop-types";

export default function Provider({ children }) {
  const [user, setUser] = useState("Jonas");

  useEffect(() => { }, []);

  const contextValue = {
    user, setUser
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
