"use client"

import { useSearchParams,usePathname,useRouter } from "next/navigation"

const SearchWorkouts=()=>{
    const searchParams=useSearchParams();
    const pathname=usePathname();
    const {replace}=useRouter()
    const handleSearch=(searchTerm:string)=>{
         const params=new URLSearchParams(searchParams)
         if(searchTerm){
            params.set("query",searchTerm)
         }
         replace(`${pathname}?${params.toString()}`)
    };
    return(
        <div>
            <form>
                <label htmlFor="Search">Search</label>
                <input
                className="peer block"
                placeholder="search"
                defaultValue={searchParams.get('query')?.toString()}
                onChange={(e)=>{
                 handleSearch(e.target.value)
                }}
                />
            </form>
        </div>
    )
}

export default SearchWorkouts;