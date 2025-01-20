import { useState, useEffect } from "react";
import Context from "./Context";
import PropTypes from "prop-types";

export default function Provider({ children }) {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);

  const [produto, setProduto] = useState(
    { produto: "produto AYX", valor: 35 },
  );

  useEffect(() => {

  }, []);

  const contextValue = {
    count,
    setCount,
    total,
    setTotal,
    produto,
    setProduto
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};