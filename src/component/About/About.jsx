import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';
import SectionTitle from '../SectionTitle/SectionTitle';
// import Social from '../Home/Social';

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    const values = [
        {
            leftValue: "Birthdate",
            rightValue: "25th November",
        },
        {
            leftValue: "Education",
            rightValue: "B.Sc. in CSE, Premier University Chittagong",
        },
        {
            leftValue: "Languages",
            rightValue: "Bangla, English, Hindi",
        },
        {
            leftValue: "Phone",
            rightValue: "+8801648017927",
        },
        {
            leftValue: "Email",
            rightValue: "nishitadasguptamou@gmail.com",
        },
        {
            leftValue: "Nationality",
            rightValue: "Bangladeshi",
        },
        {
            leftValue: "Address",
            rightValue: "Chattogram, Bangladesh",
        },
    ];

    const TableRow = ({ leftValue, rightValue }) => (
        <tr>
            <td className="pr-4 py-2 font-bold">{leftValue}</td>
            <td className="pr-4 py-2">: {rightValue}</td>
        </tr>
    );


    return (

        <div name="about" className='bg-black pb-8 md:pb-0 py-20 '>

            <SectionTitle heading="About Me" className="pt-8 md:pt-16 lg:pt-24"></SectionTitle>
            <div className='max-w-screen-lg mx-auto px-4 md:px-8 lg:px-14'>
            <p className='text-center mb-6'>
                        Welcome to my portfolio, I am <span className='text-2xl font-bold text-[#a64da6]'>Nishita Das Gupta</span> , a passionate and dedicated MERN stack web develper. I can provide clean code and pixel perfect design. 
                    </p>
                <div data-aos="fade-up-left" className='md:w-/3  text-gray-300 text-justify mx-auto'>
                       <table className="table-auto">
                            <tbody>
                                {values?.map((item) => (
                                    <TableRow 
                                        key={item.leftValue}
                                        leftValue={item.leftValue}
                                        rightValue={item.rightValue}
                                        
                                    />
                                ))}
                            </tbody>
                        </table>
                    
 </div>
 </div>
 </div>
    );
};

export default About;