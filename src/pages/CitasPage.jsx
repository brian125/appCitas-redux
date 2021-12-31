import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { loadCitasAsync } from '../redux/reducers/citas/thunks';

const CitasPage = () => {
    const dispatch = useDispatch();
    const {isLoading, citas, errorMessage} = useSelector( (state) => state.citas );

    useEffect(() => {
        dispatch(loadCitasAsync());
    },[]);

    return ( 
        <div>
            <h1>Citas Listing</h1>
            {isLoading && <h3>Loading...</h3>}
            {errorMessage && <h3>{errorMessage}</h3>}
            {citas && citas.map(cita => <h5 key={cita._id}>{cita.nombrePaciente}</h5>)}
        </div>
     );
}
 
export default CitasPage;