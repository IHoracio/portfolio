import { 
  FaReact, FaJava, FaAws, FaDocker, FaCss3Alt, FaLock 
} from "react-icons/fa";
import { 
  SiVite, SiTailwindcss, SiTypescript, SiSpringboot, 
  SiAngular, SiMysql, SiCloudflare, SiAmazons3, 
  SiAmazonec2, SiAmazonwebservices, SiLinux, SiGnubash, 
  SiJenkins
} from "react-icons/si";

// Mapa de iconos centralizado
export const ICONS_MAP: Record<string, JSX.Element> = {
  // Frontend & Tooling
  "React": <FaReact className="text-blue-400" />,
  "Vite": <SiVite className="text-purple-500" />,
  "Tailwind CSS": <SiTailwindcss className="text-cyan-400" />,
  "TypeScript": <SiTypescript className="text-blue-500" />,
  "Angular": <SiAngular className="text-red-600" />,
  "CSS": <FaCss3Alt className="text-blue-600" />,

  // Backend & DB
  "Spring Boot": <SiSpringboot className="text-green-500" />,
  "Java": <FaJava className="text-orange-500" />,
  "MySQL": <SiMysql className="text-blue-600" />,
  "Docker": <FaDocker className="text-blue-500" />,

  // Cloud & Infra
  "AWS": <FaAws className="text-orange-400" />,
  "Cloudflare": <SiCloudflare className="text-orange-500" />,
  "Bucket S3": <SiAmazons3 className="text-red-500" />,
  "EC2": <SiAmazonec2 className="text-orange-600" />,
  "CloudFront": <SiAmazonwebservices className="text-orange-300" />,

  // DevOps & OS
  "Linux": <SiLinux className="text-gray-200" />,
  "Bash": <SiGnubash className="text-yellow-400" />,
  "Jenkins": <SiJenkins className="text-blue-400" />,

  // Seguridad
  "SSL": <FaLock className="text-green-400" />,
};

/**
 * Función utilitaria para obtener el icono de una tecnología.
 * Si no existe, devuelve el nombre en texto plano.
 */
export const getTechIcon = (tech: string): JSX.Element => {
  return ICONS_MAP[tech] || <span className="text-gray-300 text-xs">{tech}</span>;
};