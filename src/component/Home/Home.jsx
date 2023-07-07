import { TypeAnimation } from 'react-type-animation';
import heroImage from '../../assets/mou.png';
import {FiMail} from 'react-icons/fi';



const Home = () => {
    return (
        <div name='home' className='bg-black pt-20 min-h-screen '>
            <div className='max-w-7xl mx-auto px-4 md:px-8 lg:px-14 pt-8 md:pt-20 md:mt-4  h-full lg:grid grid-cols-2 gap-4 '>
                <div className=' space-y-4'>
                    <h3 className='text-xl md:text-3xl font-bold text-white'>Hello !!</h3>
                    <h2 className='text-3xl md:text-5xl font-bold text-white'>This is Nishita Das Gupta,</h2>
                    <h2 className='text-2xl md:text-4xl font-bold text-[#a64da6]'>
                        <TypeAnimation
                            sequence={[

                                'FULL Stack Developer',
                                1000,
                                'MERN Stack Developer',
                                1000,
                                'Frontend Developer',
                                1000,
                                'React Developer',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            className=''
                            style={{ display: 'inline-block' }}
                            repeat={Infinity}
                        />
                    </h2>
                    <p className='text-gray-300 text-justify'>
                        I am passionate about building dynamic web applications using the MERN stack. With my expertise in Tailwind, React.js, Node.js, Express.js, and MongoDB, I am able to create engaging user interfaces that enhance the overall user experience.
                    </p>
                    <div className='flex items-center gap-6'>
                        <button className='group text-white flex items-center gap-3 uppercase font-medium  py-2 px-4 rounded-lg border-[1px] border-b-[6px] border-[#a64da6] shadow-md shadow-[#993399] hover:bg-[#a64da6] hover:shadow-[0px] '>Contact Me <span><FiMail></FiMail></span></button>
                    </div>
                </div>
                <div data-aos="zoom-out-dow" data-aos-duration="2000" className='order-first mx-auto  lg:order-last'>
                    <img className='border-white border-2 shadow-lg shadow-[#a64da6] rounded-lg mx-auto mt-5 lg:mt-0' src={heroImage} alt="" />
                </div>

            </div>
        </div>
    );
};

export default Home;