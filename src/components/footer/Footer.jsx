
export const Footer = () => {
    return (
        <div className="w-full bg-gray-700 flex justify-end p-6">
            <div className="grid grid-cols-1 mr-4 ">
                <h4 className=" font-bold text-xl text-blue-100">Socials</h4>
                <ul className=" space-x-2">
                    <li className=" text-blue-100 p-2 rounded-md hover:text-white ">
                        <a href="">
                            📧 luciano.dinoia91@proton.me
                        </a>
                    </li>
                    <li className=" text-blue-100 p-2 rounded-md hover:text-white ">
                        <a href="https://www.linkedin.com/in/luciano-dinoia/">
                            🔗 linkedin.com/in/luciano-dinoia
                        </a>
                    </li>
                    <li className="flex items-center text-blue-100 p-2 rounded-md hover:text-white">
                        <a href="https://github.com/LELUK911" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                            <svg className="w-6 h-6 text-gray-800 hover:text-black" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.083-.729.083-.729 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.107-.775.418-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.47-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 013.005-.404c1.02.005 2.045.138 3.005.404 2.28-1.555 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.235 1.91 1.235 3.22 0 4.61-2.8 5.625-5.475 5.92.435.375.81 1.102.81 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.687.825.57C20.565 22.092 24 17.592 24 12.297 24 5.67 18.63.297 12 .297z" />
                            </svg>
                            <span className="ml-2">GitHub: Leluk911</span>
                        </a>
                    </li>
                </ul>
            </div>

        </div >
    )
}
