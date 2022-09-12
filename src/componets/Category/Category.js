import { useState } from "react";
import { Link } from 'react-router-dom';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import './Category.scss';

const Category = () => {

    const [prendas, setPrendas] = useState([]);

    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div className="category" >
            <FormControl fullWidth  >
                <InputLabel id="demo-simple-select-label" className="inputLabel" >Age</InputLabel>
                <Select
                    className="select"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                >
                    <Link to="/category/clasicas" ><MenuItem value={10}>Clasicas</MenuItem></Link>
                    <Link to="/category/tostados" ><MenuItem value={10}>Tostados</MenuItem></Link>
                    <Link to="/category/vegui" ><MenuItem value={10}>Veguie</MenuItem></Link>
                </Select>
            </FormControl>
        </div>
    )
}

export default Category

