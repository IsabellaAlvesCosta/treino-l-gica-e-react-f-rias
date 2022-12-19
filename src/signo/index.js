import { useState } from "react"

export default function Libra(){
    const [mes, setMes] = useState('');
    const [dia, setDia] = useState();
    const [resultado, setResultado] = useState();
    
    function CalcularMes(mes, dia){
        if (mes == 'Setembro' && dia >= 23 || mes == 'Outubro' && dia <= 22) {
            return 'Sim'
        }
        else {
            return 'Não'
        }
      }
      function verificarClick() {
        const resp = CalcularMes(mes, dia)
        setResultado(resp);}

    return(
        <section>
            <h1>SEJAM BEM VINDOS(AS) AO PROGRAMA SIGNO DE LIBRA</h1>
            <div>
                Informe seu dia de aniversário: <input type='number'value={dia} onChange={e => setDia(Number(e.target.value))}/>
            </div>

            <div>
                Informe seu mês de aniversário: <input type='text'value={mes} onChange={e => setMes(e.target.value)}/>
            </div>

            <button onClick={verificarClick}>Verificar</button>
            <div>
                É de libra? {resultado}
            </div>
        </section>
    )
}