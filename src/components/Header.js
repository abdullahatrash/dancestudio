import Image from 'next/image'
import { SearchIcon } from '@heroicons/react/solid'
import { useRouter } from "next/router";
const navigation = [
    { name: 'Performances', href: '/performances' },
    { name: 'Classes', href: '/classes' },
    { name: 'About', href: '#' },
    { name: 'Support', href: '#' },
  ]

function Header() {
  const { push } = useRouter();
    return (
        <header>
        <div className="flex items-center justify-around p-1 flex-grow py-5">
        <div className="mt-1 flex items-center flex-grow sm:flex-grow-0">
        <Image
        onClick={() => push("/")}
          src="/logo.png"
          alt="website logo"
          width={150}
          height={45}
          objectFit="contain"
          className="cursor-pointer"
        />
        </div>
      
        <div className=" flex items-center">
                        {navigation.map((item) => (
                          <a
                            
                            key={item.name}
                            href={item.href}
                            className="flex items-center px-10 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </a>
                        ))}
                        <div>
                          <SearchIcon className="h-5 w-5 text-gray-500"/>
                        </div>
                        <input className="pl-1 ml-2 border-opacity-0 outline-none" style={{  backgroundColor: 'rgba(0,0,0,0)'}}/> 
                      </div>
                      
                   
                    </div>
      </header>
    )
}

export default Header
