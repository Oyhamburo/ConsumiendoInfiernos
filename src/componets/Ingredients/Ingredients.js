import { FormControlLabel, Checkbox } from "@mui/material"
const Ingredients = ({ data,handleChange }) => {
    return (
        <>
            {
                data.map((i) => {
                    return <FormControlLabel control={<Checkbox checked={i.estado} onChange={handleChange} name={i.name} />} label={i.name} />
                })
            }

        </>
    )
}

export default Ingredients