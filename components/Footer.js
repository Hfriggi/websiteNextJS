import React from 'react';
import Link from 'next/link'

export const Footer = () => {
	return (
        <center>
            <footer className="bg-secondary text-center py-2 px-5">
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
            </footer>
        </center>
	);
}