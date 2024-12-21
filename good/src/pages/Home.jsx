import React from "react"
import IndependentWindow from "../components/IndependentWindow"

export default function Home(){
    return(
        <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Welcome to my Website</h1>
      <div className="bg-white p-6 rounded-md shadow-md">
        <p>This is the main content of the page.</p>
      </div>
      <div className="mt-4">
        <IndependentWindow />
      </div>
    </div> 
    )
     
}