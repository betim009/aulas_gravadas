import { useState } from 'react';
import './App.css'
import Form from './Form';


export default function App() {
  // const [input, setInput] = useState("Fabio");

  // function handleChange(event: any) {
  //   console.log(event.target.value)
  //   setInput(event.target.value)
  // };

  // function handleChange2({ target }: any) {
  //   console.log(target.value)
  // };

  // function handleChange3({ target }: any) {
  //   /* retirando value de target */
  //   const { value } = target;
  //   console.log(value)
  // };



  return (
    <>
      {/* <input type="text" onChange={(event) => console.log(event.target.value)} />
      {/* event é um objeto -> target esta dentro do objeto -> retirou { target } */}
      {/* <input type="text" onChange={({ target }) => console.log(target.value)} />

      <input type="text" onChange={handleChange} />
      <input type="text" onChange={handleChange2} />

      <input type="text" onChange={handleChange3} />

      <input type="text" value={input} onChange={({ target }) => setInput(target.value)} />

      <input type="text" value={input} onChange={(event) => setInput(event.target.value)} />

      <input type="text" value={input} onChange={handleChange} /> */} 


      <Form />
    </>
  )
}

