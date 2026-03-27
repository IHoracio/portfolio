import routeMasterImage from "../assets/images/proyects/routeMasterImage.png";
import portfolioImage from "../assets/images/proyects/portfolioScreenshot.png";

export interface Project {
  id: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  demoUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: "portfolio",
    technologies: ["React", "Vite", "Tailwind CSS", "TypeScript", "Cloudflare"],
    image: portfolioImage,
    githubUrl: "https://github.com/IHoracio/porfolio-web"
  },
    {
    id: "routemaster",
    technologies: ["Spring Boot", "Java", "Angular", "TypeScript", "CSS", "MySQL", "AWS", "Docker", "Cloudflare", "Bucket S3", "EC2", "CloudFront", "Linux", "Bash", "SSL", "Jenkins"],
    image: routeMasterImage,
    githubUrl: "https://github.com/IHoracio/TFG-RouteMaster",
    demoUrl: "https://tfg.mariomartinmorilla.es"
  }
];