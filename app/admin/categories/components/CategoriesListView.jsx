"use client"

import { useCategories } from "@/lib/firebase/category/read"
import Link from "next/link";
export default function CategoriesListView(){
    const { data,error,isLoading}=useCategories();
    if(isLoading){
        return <h1>Loading.....</h1>
    }
    if(error){
        return <h1>{error}</h1>
    }
    if (!data){
        return <h1>Data not found</h1>
    }

    return <section>
        <table className="w-full">
            <thead>
                <tr>
                    <th clasName="border px-4 py-2">Sr.</th> 
                    <th clasName="border px-4 py-2">Icon</th>
                    <th clasName="border px-4 py-2">Name</th>
                    <th clasName="border px-4 py-2">Slug</th>
                    <th className="border px-4 py-2"> Action</th>
                </tr>
            </thead>
        
        <tbody>
        {data?.map((item, Key)=>{
            return <tr>
                <td className="border px-4 py-2">{Key+1}</td>
                <td className="border px-4 py-2"><img className="h-10 w-20" src={item?.iconURL} alt="logo" /></td>
                <td className="border px-4 py-2">{item?.name}</td>
                <td className="border px-4 py-2">{item?.slug}</td>
                <td className="border px-4 py-2"> 
                    <Link href={`/admin/categories/form?id=${item?.id}`}>
                    <button className=" bg-blue-500 text-white rounded-full px-3 py-1 text-sm">Action</button>
                    </Link>
                </td>
                
            </tr>
            
        })}
        </tbody>
        </table>
    </section>
}