import { useContext } from "react"
import Context from "./context/Context"
import { useAddRemove } from "./hooks/UseAddRemove";
import { Link } from "react-router-dom";

function Home() {
    const { produto, total } = useContext(Context);
    const { addProduto, removeProduto } = useAddRemove();

    return (
        <>
            <h4>Página Home</h4>
            <Link to="/about">About</Link>
            <p>Valor total: {total}</p>

            <h2>{produto.produto} valor: ${produto.valor}</h2>
            <button onClick={addProduto}>+</button>
            <button onClick={removeProduto}>-</button>
        </>
    )
}

export default Home