"use client"

import { useSearchParams,useRouter } from "next/navigation";
import {useState} from "react";
function SearchBar(){
    const [name,setName]=useState('')
    const [city,setCity]= useState('')
    const router=useRouter()

    function handleSubmit(e:any){
        e.preventDefault()
        console.log("Meeme")
        router.push(`/subcategories/Murial?city=Reston`)
      
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" className="name" placeholder="murials.." />
            <input type="text" className="city" placeholder="murials.." />
            <button type="submit">Submit Me</button>
        </form>
    )

}

export default SearchBar;