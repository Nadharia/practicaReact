import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-8">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">Joako Romero</h1>
        <p className="text-xl text-gray-400">
          Fullstack Developer | Java | React | Spring Boot | Tailwind
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="https://github.com/joakoromero" target="_blank">
            <Button variant="ghost"><Github className="w-5 h-5 mr-1" />GitHub</Button>
          </a>
          <a href="https://linkedin.com/in/joakoromero" target="_blank">
            <Button variant="ghost"><Linkedin className="w-5 h-5 mr-1" />LinkedIn</Button>
          </a>
          <a href="mailto:joako@example.com">
            <Button variant="ghost"><Mail className="w-5 h-5 mr-1" />Mail</Button>
          </a>
        </div>
      </header>

      <section className="grid md:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-4">
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <a href={project.link} target="_blank">
                  <Button variant="secondary">Ver Proyecto</Button>
                </a>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

      <footer className="text-center mt-20 text-gray-500">
        © {new Date().getFullYear()} Joako Romero. Todos los derechos reservados.
      </footer>
    </main>
  );
}

const projects = [
  {
    title: "Gestión de Productos con Spring Boot",
    description: "API REST completa con autenticación JWT, validaciones y conexión a base de datos.",
    link: "https://github.com/joakoromero/spring-productos",
  },
  {
    title: "E-commerce con React + Tailwind",
    description: "Frontend moderno para una tienda online, carrito de compras y autenticación.",
    link: "https://github.com/joakoromero/react-ecommerce",
  },
  {
    title: "Microservicio con Kafka",
    description: "Sistema distribuido en Java que comunica eventos entre servicios con Apache Kafka.",
    link: "https://github.com/joakoromero/kafka-service",
  },
];
