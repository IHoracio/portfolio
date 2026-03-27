import { useEffect, useState } from "react";
import useTranslations from "../hooks/useTranslations";
import { projectsData, Project } from "../../data/projects";
import { FaGithub, FaTimes } from "react-icons/fa";
import { getTechIcon } from "../../data/technologies";

export default function Proyectos() {
  const t = useTranslations();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Bloquear scroll del body cuando el modal está abierto
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Limpieza al desmontar el componente por seguridad
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  return (
    <section id="proyectos" className="py-12 px-4 md:px-8 lg:px-16">
      <h3 className="text-3xl font-bold text-center mt-1 md:text-5xl md:mt-7 lg:text-7xl shadow-blue-200 mb-12">
        &lt;{t.proyectsTitle}/&gt;
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => {
          const translation = t.projects[project.id as keyof typeof t.projects];

          return (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500/50 hover:-translate-y-2 transition-all duration-300 shadow-lg"
            >
              <div className="relative overflow-hidden">
                <img src={project.image} alt={translation.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold">
                  {t.buttons.clickProyect}
                </div>
              </div>

              <div className="p-6">
                <h4 className="text-xl font-bold text-blue-300 mb-2">{translation.title}</h4>
                {/* Descripción limitada a 3 líneas */}
                <p className="text-gray-400 mb-4 line-clamp-3 text-sm h-[4.5rem]">
                  {translation.description}
                </p>

                {/* Tecnologías limitadas en altura sin scroll visible */}
                <div className="flex flex-wrap gap-2 mb-2 h-20 overflow-hidden relative">
                  {project.technologies.slice(0, 6).map((tech) => (
                    <span key={tech} className="flex items-center gap-1 bg-gray-700/50 px-2 py-1 rounded text-xs text-gray-300">
                      {getTechIcon(tech)} {tech}
                    </span>
                  ))}
                  {project.technologies.length > 6 && <span className="text-blue-400 text-xs mt-1">...y más</span>}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* --- MODAL / WIDGET --- */}
      {selectedProject && (
        <div
          // Al hacer clic aquí (en el fondo), se cierra el modal
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn cursor-pointer"
        >
          {/* Contenido del Modal */}
          <div
            // IMPORTANTE: stopPropagation evita que el click dentro del modal lo cierre
            onClick={(e) => e.stopPropagation()}
            className="bg-gray-900 border border-gray-700 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl cursor-default"
          >
            {/* El botón X lo dejamos por accesibilidad, pero ahora el fondo también funciona */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10 cursor-pointer"
            >
              <FaTimes size={24} />
            </button>

            <img src={selectedProject.image} alt="Preview" className="w-full h-64 object-cover" />

            <div className="p-8">
              <h4 className="text-3xl font-bold text-blue-300 mb-4">
                {t.projects[selectedProject.id as keyof typeof t.projects].title}
              </h4>

              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                {t.projects[selectedProject.id as keyof typeof t.projects].description}
              </p>

              <h5 className="text-white font-semibold mb-4 border-b border-gray-800 pb-2">
                Tecnologías utilizadas
              </h5>
              <div className="flex flex-wrap gap-3 mb-8">
                {selectedProject.technologies.map((tech) => (
                  <span key={tech} className="flex items-center gap-2 bg-gray-800 border border-gray-700 px-4 py-2 rounded-lg text-sm text-white">
                    {getTechIcon(tech)} {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-lg transition">
                  <FaGithub /> {t.buttons.code}
                </a>
                {selectedProject.demoUrl && (
                  <a href={selectedProject.demoUrl} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white p-3 rounded-lg transition">
                    {t.buttons.demo}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}