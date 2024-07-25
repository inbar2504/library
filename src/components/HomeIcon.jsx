import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { IconButton } from "@mui/material"
import "./MyBook.css";

const HomeIcon = (props) => {

    return (
<IconButton  variant="text"
        className="home-icon"
        onClick={() => props.setPageToMenu()}
>
  <HomeOutlinedIcon  sx={{fontSize: "3rem !important"}}/>
</IconButton>

    )
}

export default HomeIcon