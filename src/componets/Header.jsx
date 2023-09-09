import { moneyFormat } from "../helper/moneyFormat"

const Header = ({money,total}) => {
  return (
    <div>
        {
                total > 0 && money - total !==0 && (<div className="header">Harcayacak  $ {moneyFormat(money-total)} paranız kaldı.</div> ) || (
                        <div className="header">
                            Harcamak için $ {moneyFormat(money)} paranız vardır.    
                        </div>                )
        }
        <style jsx>
                {
                  `
.header{
        background: linear-gradient(to left, green, greenyellow); 
        height: 60px;
        display:flex;
        justify-content: center;
        align-items: center;
        color:white;
        font-size:24px;
        font-weight:bold;
        letter-spacing:1px;
        
}
`      
                }


        </style>
    </div>
  )
}

export default Header