import React from 'react';
import CustomInputComponent from '../Components/CustomInputComponent';
export default function MenuView(){
    const[typeTransaction,setTypeTransaction] = React.useState(false);
    const[visibilidadDeposito,setVisibilidadDeposito]=React.useState(false);
    const[visibilidadGiro,setVisibilidadGiro]=React.useState(false);
    const[visibilidadConsultarSaldo,setvisibilidadConsultarSaldo]=React.useState(false);
    const[visibilidadHistorial,setvisibilidadHistorial]=React.useState(false);
    React.useEffect(()=>{
        typeTransaction==="Depositar" ? setVisibilidadDeposito(true): setVisibilidadDeposito(false);
        typeTransaction==="Girar" ? setVisibilidadGiro(true): setVisibilidadGiro(false);
        typeTransaction==="Consultar Saldo" ? setvisibilidadConsultarSaldo(true): setvisibilidadConsultarSaldo(false);
        typeTransaction==="Consultar Historial de Transacciones" ? setvisibilidadHistorial(true): setvisibilidadHistorial(false);

    },[typeTransaction])
    const handleChange = (e)=>{
        setTypeTransaction(e.target.value) ;
    }
    return(
        <div className='container mt-5 '>
            <div>
                <h3>Selecciona la operacion que deseas realizar:</h3>
            </div>
            <div className='row mt-5'>
                <div className='row'>
                    <select  value={typeTransaction}className='form-select form-select-lg ms-2 mb-5' placeholder='Selecciona una opción' onChange={handleChange}>
                        <option value="Depositar">Depositar</option>
                        <option value="Consultar Saldo">Consultar Saldo</option>
                        <option value="Girar">Girar</option>
                        <option value="Consultar Historial de Transacciones">Consultar historial de transacciones</option>
                    </select>
                </div>
            
            {visibilidadDeposito && <CustomInputComponent title="Ingrese Monto a Depositar" type="number" text="$0"/>}
            {visibilidadConsultarSaldo && <h2> Su saldo es: </h2>}
            {visibilidadGiro && <CustomInputComponent title="Ingrese el Valor que desea Girar" type="number" text="$0"/>}
            {visibilidadHistorial && <h2> Su historial de transacciones son :</h2>}
            </div>
           
        </div>
    )
}