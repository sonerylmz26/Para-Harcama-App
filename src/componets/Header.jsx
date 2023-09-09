import { moneyFormat } from "../helper/moneyFormat"

const Header = ({money,total}) => {
  return (
    <div>
        {
                total > 0 && (<div>Harcayacak  $ {moneyFormat(money-total)} paranız kaldı.</div> ) || (
                        <div>
                            Harcamak için $ {moneyFormat(money)} paranız vardır.    
                        </div>                )
        }
    </div>
  )
}

export default Header