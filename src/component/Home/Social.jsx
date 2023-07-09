import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiFacebook } from 'react-icons/fi'
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
                    <FiFacebook size={30} />
                </>
            ),
            href: "https://web.facebook.com/nishi.ta.79/",
        },
        {
            id: 4,
            child: (
                <>
                    <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: "https://drive.google.com/u/0/uc?id=1zwR9hpJqfO6KNE-LUvJtvvTMMMkEh1nu&export=download",

            download: true,
        },
    ];

    return (
        <div className=''>
            <div className='flex justify-center items-center'>
                {
                    links.map(({ id, child, href, download }) => <div key={id} className='mr-5'>
                        <a className={`px-4 text-lg font-semibold h-full  w-full text-white `} href={href} download={download} target="_blank" rel="noreferrer">
                            {child}
                        </a>
                    </div>)
                }


            </div></div>
    );
};

export default Social;