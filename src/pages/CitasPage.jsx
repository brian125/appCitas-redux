import React, {Fragment, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { loadCitasAsync } from '../redux/reducers/citas/thunks';

const CitasPage = () => {
    const dispatch = useDispatch();
    const {isLoading, citas, errorMessage} = useSelector( (state) => state.citas );

    useEffect(() => {
        dispatch(loadCitasAsync());
    },[]);

    return ( 

        <Fragment>
            <nav className='navbar navbar-expand-lg navbar-dark bg-primary justify-content-between'>
                <h1>Trabajo de Eddi</h1>
            </nav>
            <div className='container'>
                <h2>Listado de citas</h2>
                <table className='table table-striped'>
                    <thead className='bg-primary table-dark'>
                        <tr>
                            <th scope='col'>ID</th>
                            <th scope='col'>IdPaciente</th>
                            <th scope='col'>Nombre Paciente</th>
                            <th scope='col'>Apellidos Paciente</th>
                            <th scope='col'>Nombre Medico</th>
                            <th scope='col'>Apellidos Medico</th>
                            <th scope='col'>Fecha</th>
                            <th scope='col'>Hora</th>
                            <th scope='col'>Estado</th>
                        </tr>
                    </thead>
                        {isLoading && <h3>Loading...</h3>}
                        {errorMessage && <h3>{errorMessage}</h3>}
                        {citas && citas.map(cita => 
                        <tr key={cita._id}>
                            <td>{cita.id}</td>
                            <td>{cita.idPaciente}</td>
                            <td>{cita.nombrePaciente}</td>
                            <td>{cita.apellidosPaciente}</td>
                            <td>{cita.nombreMedico}</td>
                            <td>{cita.apellidosMedico}</td>
                            <td>{cita.fechaReservaCita}</td>
                            <td>{cita.horaReservaCita}</td>
                            {cita.estadoReservaCita && <td>Activo</td> || <td>Inactivo</td>}
                        </tr>)}
                </table>
            </div>
        </Fragment>
     );
}
 
export default CitasPage;