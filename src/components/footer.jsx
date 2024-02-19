import React,{useState} from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';
import logo from '../data/images/logo.png';
import { Link } from 'react-router-dom';
import '../styles/style.css';
import Chat from './chat';


const Footer = () => {
    const [chat, setChat] = useState(false);


    const handleChat = () => {
        setChat(!chat);
    }

    return (
        <footer className="footer">
            <div className="container footer_container">
                <div class="mb-0 md:mb-0 h-full flex flex-col justify-center p-0">
                    <a href='/' class="flex items-center w-200px h-full">
                        <img src={logo} className='md:h-32 md:w-32 h-12 w-12 flex' alt="Logo" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-left ml-5"> Progyan <br /> Educations </span>
                    </a>
                        {/* <p class="text-white bg-black text-inline mt-0 w-[220px]">Education for the Modern Era. </p> */}
                </div>
                <hr className='border md:hidden bg-blue-950 h-1'/>

                <div className="footer_2 md:ml-20 m-0 justify-between items-start flex flex-col">
                    <h4 className='font-bold text-2xl'>Resources</h4>
                    <ul className="text-start permalinks">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/courses">Courses</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>

                <div className="footer_3 text-start">
                    <h4 className='font-bold text-2xl'>Help</h4>
                    <ul className="privacy text-start">
                        <li><a href="privacy">Privacy Policy</a></li>
                        <li><a href="terms">Terms and Conditions</a></li>
                        <li><a href="refund">Refund Policy</a></li>
                    </ul>
                </div>

                <div className="footer_4 text-start">
                    <h4 className='font-bold text-2xl'>Contact Us</h4>
                    <ul className="privacy">
                        <li><a href="privacy">Privacy Policy</a></li>
                        <li><a href="terms">Terms and Conditions</a></li>
                        <li><a href="refund">Refund Policy</a></li>
                    </ul>

                    <ul className="footer_social items-center flex justify-start">
                        <li>
                            <a href="https://youtube.com/progyaneducations" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <FaYoutube size={20} />
                            </a>
                        </li>
                        <li>
                            <a href="https://instagram.com/progyaneducations" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <FaInstagram size={20} />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/progyaneducations" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <FaTwitter size={20} />
                            </a>
                        </li>
                        <li>
                            <a href="https://linkedin.com/in/progyaneducations" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <FaLinkedin size={20} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer_copyright mt-0">
                <small>Copyright &copy; PROGYAN EDUCATIONS ESTEEMED TO BE Pvt. Ltd. </small>
            </div>
            <button className=' hidden md:fixed bottom-5 right-5 btn btn-primary' onClick={handleChat}>
                {chat ? 'Close Chat' : 'Chat with us'}
            </button>
            {chat && <Chat handleClose={handleChat} />}
        </footer>
    );
};

export default Footer;
