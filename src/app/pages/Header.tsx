import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="text-primary">
    <div className="jumbotron text-center mb-0">
     <h2>Daniel Salas</h2>
     </div>
     <nav className="navbar navbar-expand-sm bg-light">
     <ul className="navbar-nav">
     <li className="nav-item">
       <Link href="/" legacyBehavior><a className="nav-link">Home</a></Link>
     </li>
    
   </ul>
 </nav>
</div>
  )
}
