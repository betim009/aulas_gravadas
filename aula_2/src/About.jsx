import { useContext } from "react"
import Context from "./context/Context"
import { useAddRemove } from "./hooks/UseAddRemove"

function About() {

    const { total } = useContext(Context)

    const { addProduto } = useAddRemove();
    return (
        <>
            <h2>About pagina</h2>

            {total}

            <button onClick={addProduto}>+</button>
        </>
    )
}

export default About