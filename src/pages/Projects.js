import ProjectsGallery from "../components/ProjectsGallery"
import image1 from "../assets/images/51.png"
import image2 from "../assets/images/52.png"
import image3 from "../assets/images/53.png"
import image4 from "../assets/images/54.png"
import image6 from "../assets/images/56.png"
import image7 from "../assets/images/57.png"
import image8 from "../assets/images/58.png"
import image9 from "../assets/images/59.png"
import image10 from "../assets/images/60.png"
import image11 from "../assets/images/61.png"
import image12 from "../assets/images/62.png"
import image13 from "../assets/images/63.png"
import image14 from "../assets/images/64.png"
import image15 from "../assets/images/65.png"
import image16 from "../assets/images/66.png"
import image17 from "../assets/images/67.png"
import image18 from "../assets/images/68.png"
import image19 from "../assets/images/69.webp"
import image21 from "../assets/images/71.webp"
import image22 from "../assets/images/72.png"
import image23 from "../assets/images/73.png"
import image24 from "../assets/images/74.png"
import image25 from "../assets/images/75.png"
import image26 from "../assets/images/76.jpg"
import image27 from "../assets/images/77.jpg"
import image28 from "../assets/images/78.jpg"
import image29 from "../assets/images/79.jpg"
import image30 from "../assets/images/80.jpg"
import image31 from "../assets/images/81.jpg"
import image32 from "../assets/images/82.jpg"
import image33 from "../assets/images/83.jpg"
import image34 from "../assets/images/84.jpg"
import image35 from "../assets/images/85.jpg"
import image36 from "../assets/images/86.jpg"
import image37 from "../assets/images/87.jpg"
import image38 from "../assets/images/88.jpg"
import image39 from "../assets/images/89.jpg"
import image40 from "../assets/images/image1.jpg"
import image41 from "../assets/images/image2.jpg"
import image42 from "../assets/images/image3.jpg"
import image43 from "../assets/images/90.jpg"
import image44 from "../assets/images/91.jpg"
import image45 from "../assets/images/92.jpg"


// Ejemplo de cómo usar el componente con datos personalizados
const customProjects = [
  {
    id: 1,
    title: "Portafolio App",
    description:
      "Sitio web personal que concentra mis proyectos, experiencia y habilidades técnicas, utilize React JS, CSS, animaciones, plataforma lista y actualizable para mostrar trayectoria profesional, app lista en 1 mes.",
    images: [
      image43, // <-- MODIFICA ESTAS RUTAS CON TUS IMÁGENES LOCALES
      image44,
      image45,  // <-- MODIFICA ESTAS RUTAS CON TUS IMÁGENES LOCALES
    ],
    link: "https://mi-app-movil.com",
  },
  {
    id: 2,
    title: "Spotify Clone App",
    description:
      "Desarrollo de un clon funcional inspirado en Spotify, con interfaz moderna y experiencia de usuario fluida, utilize React, CSS, APIs de música, creación de interfaz completa y funciones de reproducción, app lista en 2 meses.",
    images: [
      image35, // <-- MODIFICA ESTAS RUTAS CON TUS IMÁGENES LOCALES
      image37,
      image38,
      image39,
      image36, // <-- MODIFICA ESTAS RUTAS CON TUS IMÁGENES LOCALES
    ],
    link: "https://spoti-clone-ruddy.vercel.app/",
  },
  {
    id: 3,
    title: "Google Keep Clone App",
    description:
      "Versión simplificada de Google Keep con funciones de notas y recordatorios personalizados, hecha conReact JS, CSS, implementación de CRUD y diseño adaptable, app lista en 3 semanas.",
    images: [
      image42, // <-- MODIFICA ESTAS RUTAS CON TUS IMÁGENES LOCALES
      image40,
      image41, // <-- MODIFICA ESTAS RUTAS CON TUS IMÁGENES LOCALES
    ],
    link: "https://vercel.com/demasiadohuman0s-projects",
  },

{
    id: 4,
    title: "Snacks Olivo App",
    description:
      "Aplicación móvil para gestión y promoción de productos de Snacks Olivo, incluye catálogo y pedidos, utilize React Native, Firebase, CSS, para pruebas internas y promoción de marca, app lista en 1.5 meses",
    images: [
      image1, // <-- MODIFICA ESTAS RUTAS CON TUS IMÁGENES LOCALES
      image2, // <-- MODIFICA ESTAS RUTAS CON TUS IMÁGENES LOCALES
      image18, // <-- MODIFICA ESTAS RUTAS CON TUS IMÁGENES LOCALES
    ],
    link: "https://www.facebook.com/share/1JCj9byyrF/",
  },

  {
    id: 5,
    title: "Minecraft C++ Modder",
    description:
      "Creación de mods con nuevas mecánicas, texturas y funciones para Minecraft, utilize tecnologías como C++, Java, diseño de scripts, mods funcionales compartidos en comunidades online ente el año 2012 a 2015.",
    images: [
      image19, // <-- MODIFICA ESTAS RUTAS CON TUS IMÁGENES LOCALES
      image21,
      image22, // <-- MODIFICA ESTAS RUTAS CON TUS IMÁGENES LOCALES
    ],
    link: "https://www.instagram.com/minecraft?igsh=MWI4aTQycmY1NWFqaw==",
  },
  {
    id: 6,
    title: "Dragon Ball Shin Budokai 2: Game Modder",
    description:
      "Desarrollo de modificaciones gráficas y de jugabilidad para PSP y Android, utilize C++, edición de texturas, diseño gráfico, creación de personajes y escenarios modificados usados para la comunidad entre el año 2014 a 2016.",
    images: [
      image26, // <-- MODIFICA ESTAS RUTAS CON TUS IMÁGENES LOCALES
      image27, // <-- MODIFICA ESTAS RUTAS CON TUS IMÁGENES LOCALES
    ],
    link: "https://www.instagram.com/dragonballsuper?igsh=MWxvY2RmMWR5MHdvZQ==",
  },
  {
    id: 7,
    title: "Graphic Designer",
    description:
      "Proyectos de diseño gráfico y multimedia para diferentes marcas y proyectos personales, utilize Photoshop, PicsArt, Canva, Blender, ilustración a mano, entrega de material visual para campañas, portadas y difusión artística desde 2012",
    images: [
      image3, // <-- MODIFICA ESTAS RUTAS CON TUS IMÁGENES LOCALES
      image7,
      image9,
      image8,
      image16,
      image17,
      image15,
      image14,
      image13,
      image12,
      image11,
      image10,
      image23,
      image25,
    ],
    link: "https://www.facebook.com/share/19RMdzrVYS/",
  },
  {
    id: 8,
    title: "Product Manager",
    description:
      "Página oficial del proyecto musical, usada para difusión y contacto directo con audiencia, utilize marketing digital, gestión de contenido, branding, se planea el  crecimiento de seguidores y consolidación de comunidad musical.",
    images: [
      image29, // <-- MODIFICA ESTAS RUTAS CON TUS IMÁGENES LOCALES
      image30,
      image31, // <-- MODIFICA ESTAS RUTAS CON TUS IMÁGENES LOCALES
    ],
    link: "https://www.facebook.com/share/19RMdzrVYS/",
  },
  {
    id: 9,
    title: "Content Creator",
    description:
      "Canal con contenido de entretenimiento y tutoriales educativos sobre tecnología y videojuegos, utilize edición de video, guionización, creación de contenido, se planea la construcción de audiencia y biblioteca de videos variados.",
    images: [
      image28, // <-- MODIFICA ESTAS RUTAS CON TUS IMÁGENES LOCALES
    ],
    link: "https://youtube.com/@bras0gamer?feature=shared",
  },
  {
    id: 10,
    title: "Artist",
    description:
      "Proyecto musical personal con canciones originales, enfoque en mezcla de estilos y letras reflexivas, emplee composición, producción musical, edición de audio, este es un proyecto en curso, se planean lanzamiento de sencillos en plataformas digitales.",
    images: [
      image32, // <-- MODIFICA ESTAS RUTAS CON TUS IMÁGENES LOCALES
      image33,
      image34, // <-- MODIFICA ESTAS RUTAS CON TUS IMÁGENES LOCALES
    ],
    link: "https://www.instagram.com/epicurio_el_fantastico?igsh=MXUzcW80bXo4ZnJ0Yg==",
  },
  {
    id: 11,
    title: "Astral RS",
    description:
      "Creador del estudio musical de enseñanza y grabacion Astral Records ubicado en Chihuahua, mexico, nos encargamos de la produccion audiovisual de contenido de la mas alta calidad.",
    images: [
      image24, // <-- MODIFICA ESTAS RUTAS CON TUS IMÁGENES LOCALES
    ],
    link: "https://mi-app-movil.com",
  },
  // Agrega más proyectos aquí...
]

export default function ProjectsPage() {
  return (
    <main>
      {/* Usar con datos personalizados */}
      <ProjectsGallery projects={customProjects} />
      {/* O usar sin datos para mostrar el ejemplo por defecto */}
      {/* <ProjectsGallery /> */}
    </main>
  )
}
