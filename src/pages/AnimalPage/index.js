import {Box} from "@mui/material";
import {useParams} from "react-router-dom";
import {animals} from "../../mock-data";

export const AnimalPage = () => {
    const animal = animals[0]

    const {title, description, id, src} = animal

    return (
        <Box>
            Animal page
            {id}
        </Box>
    )
}