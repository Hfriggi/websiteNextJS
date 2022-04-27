import Head from 'next/head'


export const Header = () => {
    return (
        <header id='header'>
            <script src="mobileButton.js"></script>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
            <a id='logo' href='/'>Henrique</a>
            <nav id='nav'>
                <div id='btnMobile'>Menu</div>
                <ul id='menu'>
                    <li className='listMenu'>
                        <a href='/'>Home</a>
                        <a href='/about'>About</a>
                        <a href='/projects'>Projects</a>
                        <a href='/work'>Work</a>
                    </li>
                </ul>
            </nav>
        </header>
        
    )
}