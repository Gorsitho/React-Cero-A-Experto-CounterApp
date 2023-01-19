import {useState} from 'react'
import PropTypes from 'prop-types';

const handleAdd = (event) => {

    const [ counter ] = useState(0);

    console.log(event);



}

export const CounterApp = ({ value }) =>{

       
return(
    <>
    <h1> CounterApp</h1>
    <h2> { value } </h2>
    <button onClick={ handleAdd }> + </button>
    <button> - </button>
    </>
);

}


CounterApp.propTypes = {

    value: PropTypes.number,

}

CounterApp.defaultProps = {

    value:25
}
