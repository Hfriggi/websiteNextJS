import Head from 'next/head'


export const Header = () => {
    return (
        <header id='header'>
            <a id='logo' href='/'>Henrique</a>
            <nav id='nav'>
                <ul id='menu'>
                    <li>
                        <a href='/about'>About</a>
                        <a href='/projects'>Projects</a>
                        <a href='/work'>Work</a>
                    </li>
                </ul>
            </nav>
        </header>
        
    )
}