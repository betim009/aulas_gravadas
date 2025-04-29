import { useContext, useState } from "react";
import "./home.css";
import { useEffect } from "react";
import About from "../about";
import Context from "../../context/Context";

export default function Home() {

  const [data, setData] = useState([]);
  const { user } = useContext(Context)

  useEffect(() => {
    const fetchApi = async () => {
      const req = await fetch(' https://api.mercadolibre.com/sites/MLB/search?q=computador')
      const res = await req.json()

      setData(res.results)
    }

    fetchApi()
  }, [])


  return (
    <main>
      <h2>CONTEUDO INICIAL, {user}</h2>

      {data.map(e => (
        <div>
          <img src={e.thumbnail} />
          <h2>{e.title}</h2>
        </div>
      ))}

    </main>
  );
}
