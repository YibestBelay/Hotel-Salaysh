'use client'
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { toast } from "react-toastify"

type option={
    title:string,
    additionalPrice:number
}

type inputs={
    title:string,
    desc:string,
    price:number,
    catslug:string,
}
const page = () => {

    const {data:session,status} = useSession()
    const router = useRouter()
    const[inputs,setInputs] = useState<inputs>({
        title:'',
        desc:'',
        price:0,
        catslug:'',
            })
    const [file,setFile] = useState<FileList | null>(null)

    const [options,setOptions] = useState<option>(
        {
            title:'',
            additionalPrice:0,
        }
    )
    const [optionsList,setOptionsList] = useState<option[]>([])


    if(status === 'loading') return "loading..."
    if(status === 'unauthenticated'||!session?.user.isAdmin) return router.push('/')

        const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            const { name, value } = e.target;
            setInputs({
              ...inputs,
              [name]: name === "price" ? Number(value) : value,  
            });
          };
          
          const changeOption = (e: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = e.target;
            setOptions({
              ...options,
              [name]: name === "additionalPrice" ? Number(value) : value,  
            });
          };
          

   const uploadImage = async () => {
    try {
      if (!file || file.length === 0) {
        throw new Error('No file selected');
      }
      
      const data = new FormData();
      data.append('file', file[0]);
      data.append('upload_preset', 'salaysh');
      
      const res = await fetch('https://api.cloudinary.com/v1_1/dzkvhqymt/image/upload', {
        method: 'POST',
        body: data,
      });
      
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || 'Failed to upload image');
      }
      
      const result = await res.json();
      return result.secure_url || result.url;
    } catch (error) {
      console.error('Error uploading image:', error);
      toast.error('Failed to upload image');
      throw error; // Re-throw to be caught in handleSubmit
    }
   }       

  const handleSubmit = async(e:React.FormEvent)=>{
    e.preventDefault()
    try {
        const res = await fetch('http://localhost:3000/api/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...inputs,
                options: optionsList,
                category:{
                    connect:{
                        slug:inputs.catslug
                    }
                },
                img:await uploadImage(),
                
            }),
        });
        const data = await res.json();
        console.log(data)
        toast.success('Product added successfully');
        router.push(`/product/${data.id}`);
    } catch (error) {
        toast.error('Failed to add product');
    }
  }
        return (
    <div> 
        <form onSubmit={handleSubmit} className="shadow-lg  flex flex-wrap gap-4 p-8">
            <h1 className="text-2xl font-bold">Add new Product</h1>
            <div className="w-full flex flex-col gap-2">
                <label >Image</label>
                <input  className="ring-1 ring-red-200 rounded-sm p-2" type="file" name="img" onChange={(e)=>setFile(e.target.files)}/>
            </div>
            <div className="w-full flex flex-col gap-2">
                <label >Title</label>
                <input onChange={handleChange} className="ring-1 ring-red-200 rounded-sm p-2" type="text" name="title"/>
            </div>
            <div className="w-full flex flex-col gap-2">
                <label >Description</label>
                <textarea onChange={handleChange} className="ring-1 ring-red-200 rounded-sm p-2" name="desc"/>
            </div>
            <div className="w-full flex flex-col gap-2">
                <label >Price</label>
                <input onChange={handleChange} className=" ring-1 ring-red-200 rounded-sm p-2" type="number" name="price"/>
            </div>
            <div className="w-full flex flex-col gap-2">
                <label >catagory</label>
                <input onChange={handleChange} className=" ring-1 ring-red-200 rounded-sm p-2" type="text" name="catslug"/>
            </div>
            <div className="w-full flex flex-col gap-2">
                <label>Options</label>
                <div className="flex gap-2">
                    <input onChange={changeOption} className="w-52 ring-1 ring-red-500 rounded-sm p-2" type="text" placeholder="title" name="title"/>
                    <input onChange={changeOption} className="w-52 ring-1 ring-red-500 rounded-sm p-2" type="number" placeholder="AdditionalPrice" name="additionalPrice"/>
                </div>
                <div className="w-52 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors cursor-pointer" onClick={()=>setOptionsList([...optionsList,options])}>Add Option</div>
            </div>
            <div className="flex flex-col gap-2">
                {optionsList.map((option)=>(
                    <div className="flex ring-1 ring-red-200 p-2 rounded-md gap-2" key={option.title} onClick={()=>setOptionsList(optionsList.filter((opt)=>opt.title!==option.title))}>
                        <span>{option.title}</span>
                        <span>${option.additionalPrice}</span>
                    </div>
                ))}
            </div>

            <button type="submit" className="w-full bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors cursor-pointer">Add Product</button>
        </form>
    </div>
  )
}

export default page