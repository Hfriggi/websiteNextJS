import Head from 'next/head'

export const Header = () => {
    return (
        <nav className='ml-auto'>
            <div className='Tittle'>
                <h1>
                    Henrique
                </h1>
            </div>
            <input type='checkbox' id='check'/>
            <div className='menu'>
                <ul className='ul'>
                    <li className='li'>
                        <a className='a' href='/' data-text='&nbsp;Home'>&nbsp;Home</a>
                    </li>
                    <li className='li'>
                        <a className='a' href='/about' data-text='&nbsp;About'>&nbsp;About</a>
                    </li>
                    <li className='li'>
                        <a className='a' href='/projects' data-text='&nbsp;Projects'>&nbsp;Projects</a>
                    </li>
                    <li className='li'>
                        <a className='a' href='/work' data-text='&nbsp;Work'>&nbsp;Work</a>
                    </li>
                </ul>
            </div>
            <label for='check' className='burgerBtn'>
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
            </label>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"></link>
        </nav>
    )
}