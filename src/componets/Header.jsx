import { Box, Typography } from "@mui/material"
import { moneyFormat } from "../helper/moneyFormat"

const Header = ({money,total}) => {
  return (
    <div>
        {
                total > 0 && money - total !==0 && (<Box className="header">Harcayacak  $ {moneyFormat(money-total)} paranız kaldı.</Box> ) || (
                        <Box className="header">
                            Harcamak için $ {moneyFormat(money)} paranız vardır.    
                        </Box>                )
        }
        <style jsx>
                {
                  `
.header{
        background: linear-gradient(to left, #101418, #0A3D6F); 
        height: 100px;
        display:flex;
        justify-content: center;
        align-items: center;
        color:white;
        font-size:24px;
        font-weight:bold;
        letter-spacing:1px;
        text-align:center;
        
}
`      
                }


        </style>
    </div>
  )
}

export default Header