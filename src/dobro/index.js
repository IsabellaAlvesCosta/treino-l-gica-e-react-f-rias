import { useState } from 'react';

export default function Dobro(){
    const [numero, setNumero] = useState(0);
    const [resposta, setResposta] = useState(0);

    function dobrinho(){
        let a = numero * 2;
        setResposta(a);
    }


    return(
        <section>
            <div>
              <h1>SEJAM BEM VINDOS(AS) AO PROGRAMA DO DOBRO</h1>  
            </div>

            <main>
                Informe o número: <input type='number' value={numero} onChange={e => setNumero(Number(e.target.value))}/>
            </main>

            <div>
                <button onClick={dobrinho}>Calcular</button>
            </div>

            <main>
                O dobro é: {resposta}
            </main>
        </section>
    )
        
}