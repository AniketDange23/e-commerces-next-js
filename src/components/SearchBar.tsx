
"use client"
import { useRouter } from 'next/navigation';
import React from 'react'
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
    const router = useRouter();

    const handleSearch = (e:React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get('name') as string;
        if(name){
            router.push(`/list?name=${name}`);
        }
        console.log('Search submitted');
    }

  return (
    <form className='flex items-center justify-between gap-4 p-2 rounded-md bg-gray-100 flex-1' onSubmit={handleSearch}>
        <input type="text" name="name" placeholder="Search" className=' bg-transparent flex-1 outline-none  placeholder:bg-transparent'/>
      <button type="submit">
        <FiSearch />
      </button> 
    </form>
  )
}

export default SearchBar