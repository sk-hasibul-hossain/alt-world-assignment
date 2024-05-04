"use client"

import { createContext, useState } from "react";

export const AppContext = createContext<any>(undefined);

export function AppWrapper({children}: {children: React.ReactNode}){
    const [userDetails, setUserDetails] = useState();
    const [userAction, setUserAction] = useState();
    return <AppContext.Provider value={{userDetails,setUserDetails,userAction, setUserAction}}>
        {children}
    </AppContext.Provider>
}