"use client";

import {
  createContext,
  useContext,
  useState
} from "react";


const AnalysisContext =
createContext<any>(null);



export function AnalysisProvider({
  children
}: {
  children: React.ReactNode
}) {


  const [analysis,setAnalysis] =
  useState(null);



  return (

    <AnalysisContext.Provider

      value={{
        analysis,
        setAnalysis
      }}

    >

      {children}

    </AnalysisContext.Provider>

  );

}



export function useAnalysis(){

  return useContext(
    AnalysisContext
  );

}
