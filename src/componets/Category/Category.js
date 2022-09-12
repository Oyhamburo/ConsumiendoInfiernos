import { useState } from "react";
import { Link } from 'react-router-dom';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import './Category.scss';

const Category = () => {
    const [tipo, setTipo] = useState('');

    const handleChange = (event) => {
      setTipo(event.target.value);
    };

    return (
        <div className="category" >
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={tipo}
                    label="Tipo"
                    onChange={handleChange}
                >
                    <MenuItem value={'Clasica'} to="/ConsumiendoInfiernos/category/clasica" as={Link}>
                        Clasica
                    </MenuItem>
                    <MenuItem value={'Vegui'} to="/ConsumiendoInfiernos/category/vegui" as={Link}>
                        Vegui
                    </MenuItem>
                    <MenuItem value={'Papas'} to="/ConsumiendoInfiernos/category/papas" as={Link}>
                        Papas
                    </MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}

export default Category

