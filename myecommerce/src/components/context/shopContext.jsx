import { createContext, useState } from "react";

export const ShopContext = createContext

export const ShopComponentContext =({children}) => {
    const [numero, setNumero] = useState(1)
    return(
        <ShopContext.provider value={{numero, setNumero}}>
            {children}
        </ShopContext.provider>

    )

}
export default ShopComponentContext     