import {Box} from "@mui/material";
import {animals} from "../../mock-data";
import {AnimalCard} from "../../components/AnimalCard";

export const HomePage = () => {
    return (
    <Box sx={{display: 'flex', gap: 2}}>
        {animals.map((animal) => (
            <AnimalCard data={animal} key={animal.id} />
        ))}
    </Box>
    )
}