"use client"

import { useParams,useSearchParams } from "next/navigation";
function SubCategoriesPage(){
    const {name} = useParams()
    const searchParams = useSearchParams();
    
    return(
        <div>
          <h1>Hello</h1>  
           {name}
           <div>
            {searchParams.get('city')}
           </div>
        </div>
    )

}
export default SubCategoriesPage;