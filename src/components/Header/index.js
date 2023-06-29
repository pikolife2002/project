import {AppBar, Toolbar, ButtonBase, Box, TextField} from "@mui/material";
import {Search as SearchIcon} from '@mui/icons-material';
import {useHistory} from "react-router-dom/cjs/react-router-dom";
export const Header = () => {
    const history = useHistory()
    const onIconClick = () => {
        history.push('/')
    }

    return (
            <AppBar position="static">
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <ButtonBase onClick={onIconClick}>
                        <Box component='img' src='logo-social.png' sx={{ width: 90 }} />
                    </ButtonBase>

                    <TextField
                        sx={{ backgroundColor: 'white', height: 49 }}
                        InputProps={{
                            startAdornment: (
                                <SearchIcon />
                            )
                        }}
                        placeholder='Search...'
                        variant='outlined'
                    />
                </Toolbar>
            </AppBar>

    )
}