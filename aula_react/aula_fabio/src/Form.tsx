import { useState } from "react"

export default function Form() {
    const [form, setForm] = useState({
        nome: "",
        sobrenome: "",
        cidade: ""
    });

    /*
    Não precisamos mais um estado para cada input
    const [nome, setNome] = useState("")
    const [sobrenome, setSobreNome] = useState("")
    */
    function handleChange({ target }: any) {
        const { name, value } = target;
        
        const resultado = {
            [name]: value
        }

        setForm({
            ...form,
            ...resultado
        })

        console.log(form)
    }

    return (
        <>  
            {form.cidade} {form.nome} {form.sobrenome}

            {/* Nada proibe passar 2 funções por onChange ou para 2 inputs */}
            <input
                type="text"
                placeholder="nome"
                name="nome"
                value={form.nome}
                onChange={handleChange}
            />

            <input
                type="text"
                placeholder="sobrenome"
                name="sobrenome"
                value={form.sobrenome}
                onChange={handleChange}
            />

            <input
                type="text"
                placeholder="cidade"
                name="cidade"
                value={form.cidade}
                onChange={handleChange}
            />
        </>
    )
}