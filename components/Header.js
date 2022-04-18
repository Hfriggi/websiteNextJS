import Head from 'next/head'

export const Header = () => {
    return (
        <center>
        <nav className='ml-auto'>
            <div className='Tittle'>
                <h1>
                    Henrique 
                </h1>
            </div>
            <div className='menu'>
                <ul>
                    <li>
                        <a href='#' data-text='&nbsp;Home'>&nbsp;Home</a>
                    </li>
                    <li>
                        <a href='#' data-text='&nbsp;About'>&nbsp;About</a>
                    </li>
                    <li>
                        <a href='#' data-text='&nbsp;Projects'>&nbsp;Projects</a>
                    </li>
                    <li>
                        <a href='#' data-text='&nbsp;Work'>&nbsp;Work</a>
                    </li>
                    <li>
                        <a href='#' data-text='&nbsp;Contact'>&nbsp;Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    </center>
    )
}