import Image from 'next/image'
import { Inter } from 'next/font/google'
import Footer from '././pages/Footer';
import Header from '././pages/Header';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
    <Header></Header>
      <div className="container mt-5">
      <div className="row">
       <h1>Portafolio profesional</h1>
       <p>
       ¡Bienvenido a mi portafolio web! Soy Carlos Daniel Salas estudiante de ingeniería en sistemas apasionado por la programación y con experiencia en distintos lenguajes de programación, soporte técnico, administración de redes y mucho más.

Si estás buscando un profesional altamente capacitado en el mundo de la tecnología, has llegado al lugar correcto. Me especializo en el desarrollo de software y soluciones tecnológicas que permiten a las empresas alcanzar sus objetivos de manera más eficiente y efectiva.

Con habilidades en lenguajes de programación como Python, Java y C++, puedo crear aplicaciones de escritorio y móviles, así como aplicaciones web dinámicas y sitios web. Además, tengo experiencia en la administración de bases de datos, diseño y mantenimiento de redes, y brindo soporte técnico a través de diversas plataformas.

Estoy seguro de que mi experiencia y habilidades pueden ayudarte a mejorar tus procesos de negocio y a lograr tus objetivos tecnológicos. ¡No dudes en contactarme para comenzar a trabajar juntos!
       </p>
       <img src="Daniel.jpg" width="0.25"  height="5"/>
     </div>
      </div>
      <Footer></Footer>
  </div>
  )
}
