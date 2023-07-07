import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import SectionTitle from "../SectionTitle/SectionTitle";

const Projects = () => {
    const projects = [

        {
            id: 1,
            img: "https://i.ibb.co/QMgSPh7/project1.png",
            name: "Rhythm Fusion",
            description: "A full stack website for a Summer camp school of Music Instrument Learning School",
            tech: "React.js , Node.js , Express.js , MongoDB , Firebase Authentication",
            liveURL: "https://rhythm-fusion-client.web.app/",
            gitClientURL: "https://github.com/NishitaDasGupta/rhythm-fusion-client",
           
        },
        {
            id: 2,
            img: "https://i.ibb.co/bQjydbW/project2.png",
            name: "ZooLand",
            description: " A full-stack animal toy marketplace website",
            tech: "React.js , Express.js , MongoDB , Firebase Authentication , React Router , REST APIs , Tailwind CSS",
            liveURL: "https://zoo-land-client.web.app/",
            gitClientURL: "https://github.com/NishitaDasGupta/zoo-land-client",
           

        },
        {
            id: 3,
            img: "https://i.ibb.co/hmdjWYv/project3.png",
            name: "Mr. Chef",
            description: "Front-end web application to showcase recipes on a single page",
            tech: "React.js , Express.js , Firebase Authentication , React Router , REST APIs , React Bootstrap , Bootstrap",
            liveURL: "https://mr-chef-client.web.app/",
            gitClientURL: "https://github.com/NishitaDasGupta/mr-chef-client",
           

        },
        {
            id: 4,
            img: "https://i.ibb.co/fH89DGj/project4.png",
            name: "Career Builder",
            description: "A Front-end web application for job-hunting",
            tech: "React.js, React Router , Tailwind CSS",
            liveURL: "https://tranquil-valkyrie-d52a13.netlify.app/",
            gitClientURL: "https://github.com/NishitaDasGupta/career-builder",


        },

    ];
    return (
        <div name="projects" className='bg-black pb-8 md:pb-0 py-20 '>
               <SectionTitle heading="My Projects" className="pt-8 md:pt-16 lg:pt-24"></SectionTitle>
            <div className="max-w-screen-lg mx-auto lg:grid grid-cols-2 gap-10 lg:mt-20 ">
                {projects?.map((project) => (
                    <div
                        key={project.id}
                        data-aos="zoom-out-dow"
                        data-aos-duration="2000"
                        className="p-6 bg-gradient-to-r from-[#800080] to-[#a64da6] text-white rounded-md"
                    >
                        <figure className="h-60  border-[1px] border-b-4 overflow-hidden rounded-md shadow-lg shadow-[#800080] ">
                            <img
                                src={project.img}
                                className="w-full  transition-transform duration-[10000ms] hover:-translate-y-[80%]"
                            />
                        </figure>
                      <div>
                      <h3 className="text-2xl font-black mt-3 mb-2">{project.name}</h3>
                        <p>{project.description}.</p>
                        <h3 className="font-semibold">Technology</h3>
                        <p>{project.tech}.</p>
                        <div className="flex  gap-4 pt-6 z-40">
                           
                            <a
                                href={project.liveURL}
                                target="blank"
                                className="project-card"
                                title="Live Link"
                            >
                               <FaExternalLinkAlt size={25}/>
                            </a>
                            <a
                                href={project.gitClientURL}
                                target="blank"
                                className="project-card"
                                title="Github Link"
                            >
                                <FaGithub size={25}/>
                            </a>
                        </div>
                      </div>
                    </div>
                ))}
            </div>
        
        </div>
    );
};

export default Projects;