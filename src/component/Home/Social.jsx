import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
const Social = () => {

    const links = [

        {
            id: 1,
            child: (
                <>
                    <FaLinkedin size={30} />
                </>
            ),
            href: "https://www.linkedin.com/in/nishita-dasgupta-12b762160/",

        },
        {
            id: 2,
            child: (
                <>
                    <FaGithub size={30} />
                </>
            ),
            href: "https://github.com/NishitaDasGupta",
        },
        {
            id: 3,
            child: (
                <>
                    <FiMail size={30} />
                </>
            ),
            href: "nishitadasguptamou@gmail.com",
        },
        {
            id: 4,
            child: (
                <>
                    <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: "/Nishita_Resume.pdf",

            download: true,
        },
    ];

    return (
        <div className=''>
            <div className='grid grid-cols-4 gap-[2px]'>
                {
                    links.map(({ id, child, href, download }) => <div key={id} className='w-40 h-14   '>
                        <a className={`px-4 text-lg font-semibold h-full  w-full text-white `} href={href} download={download} target="_blank" rel="noreferrer">
                            {child}
                        </a>
                    </div>)
                }


            </div></div>
    );
};

export default Social;