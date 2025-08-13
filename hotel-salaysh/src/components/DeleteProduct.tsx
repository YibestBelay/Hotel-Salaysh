'use client'

import { Trash2 } from "lucide-react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"


const DeleteProduct = ({id}: {id: string}) => {
    const{data:session,status}=useSession()
    const router = useRouter()


    if(status === 'loading') return "loading..."
    if(status === 'unauthenticated'||!session?.user.isAdmin) return null
    const handleDelete = async()=>{
        const res = await fetch(`http://localhost:3000/api/products/${id}`,{
            method:'DELETE'
        })
        if(res.ok){
            toast.success('Product deleted successfully')
            router.push('/menu')
        }
    }

  return (
    <button className=" absolute text-red-500 top-4 right-4 px-2 py-1  rounded-lg hover:text-red-600 hover:bg-red-300 transition-colors cursor-pointer " onClick={handleDelete}><Trash2 /></button>
  )
}

export default DeleteProduct