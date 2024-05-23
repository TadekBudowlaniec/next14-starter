"use client"
import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

const Navigation = () => {
    
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const q = searchParams.get("q")

    console.log(q)

    const handleClick = () =>{
        console.log("clicked")
        router.push("/")
    }
    
    return (
        <div>
            <Link href="/" prefetch={false}>Kliknij braszini</Link>
            <button onClick={handleClick}>Napisz i przekieruj</button>
        </div>
    )
}

export default Navigation