import React, { createContext, useState } from 'react';
export const addResponsecontext = createContext();
export const editResponseContext = createContext();

function ContextAPI({children}) {
  const [addResponse,setAddResponse] = useState("")
  const [editResponse,setEditResponse] = useState("")
  return (
    <>
      <addResponsecontext.Provider value={{addResponse,setAddResponse}}>
        <editResponseContext.Provider value={{editResponse,setEditResponse}}>
            {children}
        </editResponseContext.Provider>
      </addResponsecontext.Provider>
    </>
  );
}

export default ContextAPI