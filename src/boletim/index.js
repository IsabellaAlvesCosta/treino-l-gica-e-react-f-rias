import { useState } from "react"


export default function Boletim(){
    const [nota1, setNota1] = useState(0);
    const [nota2, setNota2] = useState(0);
    const [nota3, setNota3] = useState(0);
    const [nota4, setNota4] = useState(0);
    const [resposta, setResposta] = useState(0);

    function media(){
        let a = (nota1 + nota2 + nota3 + nota4) / 4;
    }

    return(
        <main>
            <h1>SEJAM BEM VINDOS(AS) AO PROGRAMA BOLETIM</h1>
            <div>
                <section>
                    Informe sua nota do 1º bimestre: <input type='number' value={nota1} onChange={e => setNota1(Number(e.target.value))}/>
                </section>

                <section>
                    Informe sua nota do 2º bimestre: <input type='number'value={nota2} onChange={e => setNota2(Number(e.target.value))}/>
                </section>

                <section>
                    Informe sua nota do 3º bimestre: <input type='number'value={nota3} onChange={e => setNota3(Number(e.target.value))}/>
                </section>

                <section>
                    Informe sua nota do 4º bimestre: <input type='number'value={nota4} onChange={e => setNota4(Number(e.target.value))}/>
                </section>
            </div>

            <div>
                <button>CALCULAR</button>
            </div>

            <div>
                
            </div>
        </main>
    )
}