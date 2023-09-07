import React from 'react';
import Link from 'next/link'

const projects = [
    {
        id: 1,
        title: 'Netflix Clone',
        github_link: 'https://github.com/aditya1OG/Websites/tree/0c32adb520d714ce694c4b14a8c2a83269ccc006/NetFlix_Clone',
        Live: 'https://github.com/aditya1OG/Websites/tree/0c32adb520d714ce694c4b14a8c2a83269ccc006/NetFlix_Clone',
        description: 'The Netflix Clone project serves as a demonstration of front-end web development skills and creativity.And offering users a taste of the Netflix experience while highlighting the capabilities of HTML, CSS, and JavaScript.',
        img: '../assests/netflix.png',
        technologies: ['HTML', 'CSS', 'JavaScript'],
    },
    {
        id: 2,
        title: 'Amazon Clone',
        github_link: 'https://github.com/aditya1OG/Websites/tree/0c32adb520d714ce694c4b14a8c2a83269ccc006/Amazon_Clone',
        Live: 'https://github.com/aditya1OG/Websites/tree/0c32adb520d714ce694c4b14a8c2a83269ccc006/NetFlix_Clone',
        description: 'The Amazon Clone - Frontend is a demonstration of frontend development skills and serves as a portfolio project for showcasing the ability to create a responsive, feature-rich e-commerce platform interface.',
        img: '../assests/amazon.png',
        technologies: ['React', 'Next.js', 'Tailwind CSS'],
    },
    {
        id: 3,
        title: 'Nike Shoe Website',
        github_link: 'https://github.com/aditya1OG/Websites/tree/0c32adb520d714ce694c4b14a8c2a83269ccc006/Nike_Store',
        Live: 'https://github.com/aditya1OG/Websites/tree/0c32adb520d714ce694c4b14a8c2a83269ccc006/NetFlix_Clone',
        description: 'The Nike Store Website project serves as a demonstration of web development skills, including HTML, CSS, and JavaScript and serves as a portfolio project for showcasing the ability to create a responsive interface ',
        img: '../assests/nike.png',
        technologies: ['HTML', 'CSS', 'JavaScript'],
    },
    {
        id: 4,
        title: 'Restaurant Website',
        github_link: 'https://github.com/aditya1OG/Websites/tree/0c32adb520d714ce694c4b14a8c2a83269ccc006/Restaurent_web',
        Live: 'https://github.com/aditya1OG/Websites/tree/0c32adb520d714ce694c4b14a8c2a83269ccc006/NetFlix_Clone',
        description: 'This web project utilizes the power of Next.js and Tailwind CSS to deliver an exceptional front-end user interface that captures the essence of the restaurant, promotes its menu, and provides essential information to diners.',
        img: '../assests/logo.svg',
        technologies: ['React', 'Next.js', 'Tailwind CSS'],
    },
    {
        id: 5,
        title: 'YouTube Clone',
        github_link: 'https://github.com/aditya1OG/Websites/tree/0c32adb520d714ce694c4b14a8c2a83269ccc006/YouTube_Clone',
        Live: 'https://github.com/aditya1OG/Websites/tree/0c32adb520d714ce694c4b14a8c2a83269ccc006/NetFlix_Clone',

        description: 'The YouTube Clone project is a web application that replicates the core features and user interface of the YouTube. Developed using React for  functionality and Tailwind CSS for styling,',
        img: '../assests/youtube.png',
        technologies: ['React', 'JavaScript', 'CSS'],
    },
    {
        id: 6,
        title: 'Facebook Clone',
        github_link: 'https://github.com/aditya1OG/Websites/tree/0c32adb520d714ce694c4b14a8c2a83269ccc006/Nike_Store',
        Live: 'https://github.com/aditya1OG/Websites/tree/0c32adb520d714ce694c4b14a8c2a83269ccc006/NetFlix_Clone',
        description: 'The Facebook clone project serves as a demonstration of web development skills, including HTML, TailwindCSS, and JavaScript and also It is responsive for mobile devices.In this project i have created sign-up and sign-in page',
        img: '../assests/facebook.png',
        technologies: ['HTML', 'CSS', 'JavaScript'],
    },
];

export default function Projects() {
    return (
        <div id='projects' className='mt-16 lg:mt-24 text-black border-t pb-20'>
            <h1 className="text-2xl font-bold text-center">Projects</h1>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 mt-8 gap-12 text-sm md:text-base place-items-center ">
                {projects.map((item) => (
                    <div key={item.id} className="flex flex-col items-center justify-center gap-5 h-[420px] xl:h-96 text-center text-white w-[90%] xl:w-72 shadow-2xl border rounded-2xl">
                        <a href={item.github_link} target="_blank" rel="noopener noreferrer" className='font-bold text-xl flex flex-col items-center justify-center gap-5'>
                            <div className='flex items-center justify-around cursor-pointer '>
                                <img src={item.img} alt={item.title} className="flex items-center justify-center object-contain w-[30%]" />
                            </div>
                            {item.title}
                            <p className='font-medium text-xs text-center w-[85%]'>{item.description}</p>
                        </a>
                        <div className="flex space-x-2 mt-4">
                            {item.technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className="bg-blue-500 text-white px-2 py-1 rounded-lg text-xs"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className='flex gap-5'>
                            <Link legacyBehavior href='https://www.dropbox.com/scl/fi/9hfvt4a5lp1wyolzqz5gd/ADITYA.pdf?rlkey=vlkm8dx2uqgdhfb01crrxnyh2&dl=0' className=''>
                                <a href='https://www.dropbox.com/scl/fi/9hfvt4a5lp1wyolzqz5gd/ADITYA.pdf?rlkey=vlkm8dx2uqgdhfb01crrxnyh2&dl=0' className='text-white border rounded-lg px-3 py-1 bg-[#131921] text-xs hover:bg-[black]'>Live Demo</a>
                            </Link>
                            <Link legacyBehavior href='https://www.dropbox.com/scl/fi/9hfvt4a5lp1wyolzqz5gd/ADITYA.pdf?rlkey=vlkm8dx2uqgdhfb01crrxnyh2&dl=0' className=''>
                                <a href='https://www.dropbox.com/scl/fi/9hfvt4a5lp1wyolzqz5gd/ADITYA.pdf?rlkey=vlkm8dx2uqgdhfb01crrxnyh2&dl=0' className='text-white border rounded-lg px-3 py-1 bg-[#131921] text-xs hover:bg-[black]'>Source Code </a>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
