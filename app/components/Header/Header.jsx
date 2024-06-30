import { Home,List,Mail,BookOpen} from "lucide-react"
import LoginButton from "./LoginButton"
import Link from "next/link"
import AuthContextProvider from '@/lib/contexts/AuthContext'
export default function(){
    return <nav className=" flex justify-between items-center px-7 py-3 border-b">
        <Link href='/'><img className="h-10" src='logo.png' alt="logo" /></Link>
        <ul className="flex gap-6 items-center">
            <Link href={'/'}>
            <li className="flex gap-2 items-center"> <Home/>Home</li>
            </Link>
            <Link href={'/categories'}>
            <li className="flex gap-2 items-center"> <List />Categories</li>
            </Link>
            <Link href={'/resources'}>
            <li className="flex gap-2 items-center"> <BookOpen />Resources</li>
            </Link>
            <Link href={'/about'}>
            <li className="flex gap-2 items-center"><Mail/> About Us</li>
            </Link>
            
        </ul>
    <AuthContextProvider>
    <LoginButton/>
    </AuthContextProvider>
    </nav>
}