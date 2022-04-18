import React from 'react';
import Link from 'next/link'
import { FaCalendar } from 'react-icons/fa'
import { IoHeart } from 'react-icons/io5'
import { SiFacebook, SiGithub, SiNextDotJs, SiTwitter } from 'react-icons/si'

const yourEmailAddrress = 'henriquefriggi1@mail.com'
const yourGitHubLink = 'https://github.com/Hfriggi'
const yourFacebookLink = 'https://www.facebook.com/henrique.friggiivanovich/'
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
                    <p>Reach me out on</p>
                    <div className='contactMe'>
                        <ul>
                            <li>
                                <Link href={yourGitHubLink}>
                                <SiGithub />
                            </Link>
                            </li>
                            <li>
                                <Link color='text-blue-400' href={yourFacebookLink}>
                                <SiFacebook />
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