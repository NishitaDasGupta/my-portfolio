import SectionTitle from "../SectionTitle/SectionTitle";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { AiFillHtml5, AiFillDatabase, AiOutlineCode } from "react-icons/ai";
import { DiCss3, DiReact, DiNodejsSmall, DiGit } from "react-icons/di";
import {
    SiBootstrap, SiTailwindcss, SiFirebase, SiMysql, SiJavascript, SiTypescript, SiC, SiVisualstudiocode, SiGithub, SiNetlify, SiVercel, SiRedux, SiFigma, SiCanva, SiJsonwebtokens, SiNextdotjs
} from "react-icons/si";


const Skills = () => {
    const skillsData = [

        { id: 1, name: "HTML5", category: "Expertise", src: <AiFillHtml5 /> },
        { id: 2, name: "CSS3", category: "Expertise", src: <DiCss3 /> },
        { id: 3, name: "Bootstrap", category: "Expertise", src: <SiBootstrap /> },
        { id: 4, name: "Tailwind CSS", category: "Expertise", src: <SiTailwindcss /> },
        { id: 5, name: "ReactJS", category: "Expertise", src: <DiReact /> },
        { id: 6, name: "JavaScript", category: "Expertise", src: <SiJavascript /> },
        { id: 7, name: "NodeJS", category: "Comfortable", src: <DiNodejsSmall /> },
        { id: 8, name: "Express JS", category: "Comfortable", src: <AiOutlineCode /> },
        { id: 9, name: "MongoDB", category: "Comfortable", src: <AiFillDatabase /> },
        { id: 10, name: "MySQL", category: "Comfortable", src: <SiMysql /> },
        { id: 11, name: "TypeScript", category: "Familiar", src: <SiTypescript /> },
        { id: 12, name: "C", category: "Expertise", src: <SiC /> },
        { id: 13, name: "Git", category: "Tools", src: <DiGit /> },
        { id: 14, name: "GitHub", category: "Expertise", src: <SiGithub /> },
        { id: 15, name: "VS Code", category: "Tools", src: <SiVisualstudiocode /> },
        { id: 16, name: "Netlify", category: "Tools", src: <SiNetlify /> },
        { id: 17, name: "Vercel", category: "Tools", src: <SiVercel /> },
        { id: 18, name: "Firebase", category: "Tools", src: <SiFirebase /> },
        { id: 19, name: "JWT", category: "Comfortable", src: <SiJsonwebtokens /> },
        { id: 20, name: "Next.js", category: "Familiar", src: <SiNextdotjs /> },
        { id: 21, name: "Redux", category: "Familiar", src: <SiRedux /> },
        { id: 22, name: "Figma", category: "Tools", src: <SiFigma /> },
        { id: 23, name: "Canva", category: "Tools", src: <SiCanva /> },
    ]

    return (
        <div name="skills" className='bg-black pb-8 md:pb-0'>
            <SectionTitle heading="Skills" className="pt-8 md:pt-16 lg:pt-24"></SectionTitle>

            <div className="text-center pt-16 text-[#a64da6] font-bold">
                <Tabs>
                    <TabList>
                        <Tab>Expertise</Tab>
                        <Tab>Comfortable</Tab>
                        <Tab>Familiar</Tab>
                        <Tab>Tools</Tab>
                    </TabList>

                    <TabPanel>
                        <div className='flex justify-center items-center flex-wrap overflow-auto mt-8 p-3 gap-3 '>
                            {
                                (skillsData.filter(skill => skill.category === "Expertise")).map(value =>
                                    <div key={value.id}
                                        className="py-4 w-32 bg-gradient-to-r from-[#800080] to-[#a64da6] rounded-lg"
                                        data-aos="flip-left"
                                        data-aos-easing="ease-out-cubic" data-aos-duration="2000"
                                    >
                                        <div className="text-3xl mx-auto w-max mb-3 text-white shadow-md shadow-[#660066]">
                                            {value.src}
                                        </div>
                                        <p className="text-white text-center text-sm font-medium">{value.name}</p>
    </div>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='flex justify-center items-center flex-wrap mt-8  p-3 gap-3  '>
                            {
                                (skillsData.filter(skill => skill.category === "Comfortable")).map(value =>
                                    <div key={value.id}
                                        className="py-4 w-32 bg-gradient-to-r from-[#800080] to-[#a64da6] rounded-lg"
                                        data-aos="flip-left"
                                        data-aos-easing="ease-out-cubic" data-aos-duration="2000"
                                    >
                                        <div className="text-3xl mx-auto w-max mb-3 text-white shadow-md shadow-[#660066]">
                                            {value.src}
                                        </div>
                                        <p className="text-white text-center text-sm font-medium">{value.name}</p>





                                    </div>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='flex justify-center items-center flex-wrap mt-8  p-3 gap-3 '>
                            {
                                (skillsData.filter(skill => skill.category === "Familiar")).map(value =>
                                    <div key={value.id}
                                        className="py-4 w-32 bg-gradient-to-r from-[#800080] to-[#a64da6] rounded-lg"
                                        data-aos="flip-left"
                                        data-aos-easing="ease-out-cubic" data-aos-duration="2000"
                                    >
                                        <div className="text-3xl mx-auto w-max mb-3 text-white shadow-md shadow-[#660066]">
                                            {value.src}
                                        </div>
                                        <p className="text-white text-center text-sm font-medium">{value.name}</p>





                                    </div>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='flex justify-center items-center flex-wrap mt-8 p-3 gap-3  '>
                            {
                                (skillsData.filter(skill => skill.category === "Tools")).map(value =>
                                    <div key={value.id}
                                        className="py-4 w-32 bg-gradient-to-r from-[#800080] to-[#a64da6] rounded-lg"
                                        data-aos="flip-left"
                                        data-aos-easing="ease-out-cubic" data-aos-duration="2000"
                                    >
                                        <div className="text-3xl mx-auto w-max mb-3 text-white shadow-md shadow-[#660066]">
                                            {value.src}
                                        </div>
                                        <p className="text-white text-center text-sm font-medium">{value.name}</p>





                                    </div>)
                            }
                        </div>
                    </TabPanel>

                </Tabs>
            </div>

        </div >
    );
};

export default Skills;