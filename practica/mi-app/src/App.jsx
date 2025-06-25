import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projectItems = [
  {
    title: "E-commerce React",
    description: "Tienda online con panel administrativo, carrito y autenticación segura.",
    tech: "React, Tailwind CSS, Firebase",
    url: "https://github.com/joakoromero/ecommerce-react",
  },
  {
    title: "API Spring Boot",
    description: "API RESTful con autenticación JWT y gestión de usuarios.",
    tech: "Spring Boot, PostgreSQL, JWT",
    url: "https://github.com/joakoromero/api-spring",
  },
  {
    title: "Dashboard Analytics",
    description: "Visualización de datos y análisis en tiempo real con gráficos.",
    tech: "React, Chart.js, Express",
    url: "https://github.com/joakoromero/dashboard-analytics",
  },
];

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 700,
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  pauseOnHover: false,
};

const sections = [
  {
    id: "about",
    title: "Sobre mí",
    bg: "bg-black",
    content: (
      <>
        <h3 className="text-3xl font-extrabold mb-4 text-white tracking-wide select-none">
          Joako Romero
        </h3>
        <p className="text-gray-300 text-base text-center max-w-md leading-relaxed select-text">
          Soy desarrollador fullstack apasionado por crear aplicaciones modernas,
          limpias y con experiencia de usuario impecable.
          Me especializo en React, Spring Boot y diseño UI/UX con Tailwind CSS.
        </p>
      </>
    ),
  },
  {
    id: "skills",
    title: "Skills",
    bg: "bg-gray-900",
    content: (
      <div className="flex flex-wrap justify-center gap-4 max-w-lg select-none">
        {[
          "Java",
          "Spring Boot",
          "React",
          "Tailwind CSS",
          "JavaScript",
          "TypeScript",
          "Docker",
          "Git",
          "Figma",
          "PostgreSQL",
        ].map((skill) => (
          <span
            key={skill}
            className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold shadow-md hover:scale-105 transform transition"
            title={skill}
          >
            {skill}
          </span>
        ))}
      </div>
    ),
  },
  {
    id: "projects",
    title: "Proyectos",
    bg: "bg-gray-800",
    content: (
      <div className="w-full max-w-4xl px-4 select-text">
        <Slider {...settings}>
          {projectItems.map(({ title, description, tech, url }) => (
            <a
              key={title}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-black hover:bg-gray-700 transition-colors rounded-xl p-8 shadow-lg cursor-pointer"
              aria-label={`Proyecto: ${title}`}
            >
              <h4 className="text-2xl font-bold text-white">{title}</h4>
              <p className="text-gray-400 mt-2">{description}</p>
              <p className="text-gray-500 mt-3 italic text-sm">{tech}</p>
            </a>
          ))}
        </Slider>
      </div>
    ),
  },
  {
    id: "contact",
    title: "Contacto",
    bg: "bg-gray-900",
    content: (
      <form className="w-full max-w-sm space-y-5" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Nombre"
          className="w-full p-3 rounded-md bg-black text-white placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white transition"
          required
          aria-label="Nombre"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded-md bg-black text-white placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white transition"
          required
          aria-label="Email"
        />
        <textarea
          rows="4"
          placeholder="Mensaje"
          className="w-full p-3 rounded-md bg-black text-white placeholder-gray-500 border border-gray-700 resize-none focus:outline-none focus:ring-2 focus:ring-white transition"
          required
          aria-label="Mensaje"
        />
        <button
          type="submit"
          className="w-full bg-white text-black font-semibold py-3 rounded-md hover:bg-gray-200 transition"
          aria-label="Enviar mensaje"
        >
          Enviar
        </button>
      </form>
    ),
  },
];

export default function App() {
  return (
    <>
      <style>{`
        body, html, #root {
          margin: 0; padding: 0;
          background: #000000;
          font-family: 'Inter', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .grid-container {
          display: grid;
          grid-template-columns: 2fr 3fr 1.5fr;
          grid-template-rows: 1fr 2fr;
          gap: 12px;
          height: 100vh;
          padding: 16px;
          overflow: hidden;
        }

        .about { grid-area: 1 / 1 / 2 / 2; }
        .skills { grid-area: 1 / 2 / 2 / 4; }
        .projects { grid-area: 2 / 1 / 3 / 3; }
        .contact { grid-area: 2 / 3 / 3 / 4; }

        .grid-container > div {
          border: 1.5px solid rgba(255,255,255,0.1);
          box-shadow: 0 0 12px rgba(255, 255, 255, 0.05);
        }

        h2 {
        position: relative;
        padding-bottom: 8px;
        margin-bottom: 24px;
        color: white;
        font-family: 'Space Grotesk', sans-serif;
        font-size: 1.75rem;
        letter-spacing: 0.03em;
        text-transform: uppercase;
        }
        h2::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 2px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 1px;
        }

        @media (max-width: 1024px) {
          html, body, #root {
            height: auto;
            overflow-y: auto;
          }
          .grid-container {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto auto auto auto;
            height: auto;
            padding: 12px;
            overflow-y: auto;
          }
          .about, .skills, .projects, .contact {
            grid-area: auto;
          }
        }

        @media (max-width: 640px) {
          .grid-container {
            grid-template-columns: 1fr;
            grid-template-rows: auto auto auto auto;
            gap: 16px;
            height: auto;
            padding: 10px;
            overflow-y: auto;
          }
        }
      `}</style>

      <div className="grid-container">
        {sections.map(({ id, title, content, bg }, i) => (
          <motion.div
            key={id}
            className={`${id} rounded-xl p-6 flex flex-col justify-center items-center ${bg}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            aria-label={`${title} sección`}
          >
            <h2>{title}</h2>
            {content}
          </motion.div>
        ))}
      </div>
    </>
  );
}
