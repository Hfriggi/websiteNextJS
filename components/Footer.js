import React from 'react';
import Link from 'next/link'
import { FaCalendar } from 'react-icons/fa'
import { IoHeart } from 'react-icons/io5'
import { SiLinkedin, SiGithub, SiNextDotJs, SiTwitter } from 'react-icons/si'

const yourEmailAddrress = 'henriquefriggi1@mail.com'
const yourGitHubLink = 'https://github.com/Hfriggi'
const yourLinkedinLink = 'https://www.linkedin.com/in/henrique-friggi-ivanovich-40819118a/'
const yourTwitterLink = 'https://twitter.com/henriquefriggi'

export const Footer = () => {
	return (
        <center>
            <footer className="bgSecondary">
                <div className="container text-muted">
                    <small>&copy; 2022 {" "}
                        <Link href="https://github.com/Hfriggi">
                            <a>HenriqueFriggi</a>
                        </Link>
                        . Open sourced with love under {" "}
                        <Link href="https://github.com/Hfriggi/websiteNextJS">
                            <a>MIT</a>
                        </Link>
                        {" "} License
                    </small>
                </div>
                    <p>Contact me on</p>
                    <div className='contactMe'>
                        <ul>
                            <li>
                                <Link href={yourGitHubLink}>
                                <SiGithub />
                            </Link>
                            </li>
                            <li>
                                <Link color='text-blue-400' href={yourLinkedinLink}>
                                <SiLinkedin />
                            </Link>
                            </li>
                            <li>
                                <Link color='text-blue-400' href={yourTwitterLink}>
                                <SiTwitter />
                            </Link>
                            </li>
                        </ul>
                    </div>
            </footer>
        </center>
	);
}