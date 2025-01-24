import { useContext } from "react"
import Context from "./context/Context"
import { useAddRemove } from "./hooks/UseAddRemove";

export default function Contact() {
    const { total } = useContext(Context);
    const { removeProduto } = useAddRemove();

    return (
        <>
            <h2>Pagina de Contato</h2>
            {total}
            <button onClick={removeProduto}>-</button>
        </>
    )
};