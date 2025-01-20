import { useContext } from "react";
import Context from "../context/Context";


export function useAddRemove() {
    const {
        count,
        setCount,
        total,
        setTotal,
        produto
    } = useContext(Context);

    const addProduto = () => {
        const newCount = count + 1;
        const newValue = newCount * produto.valor;

        setCount(newCount)
        setTotal(newValue)

        console.log(newValue)
    };

    const removeProduto = () => {
        const newCount = count - 1;
        const newValue = newCount * produto.valor;

        setCount(newCount)
        setTotal(newValue)

        console.log(newValue)
    };

    return { addProduto, removeProduto }
}