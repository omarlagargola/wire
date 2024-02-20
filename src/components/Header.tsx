import './Header.scss'

function Header() {
  return (
    <>
      <header id='masthead'>
        <div className='container'>
          <ul className='network-nav nav'>
            <li className='nav-docs'><a href='https://bower.io/'>Docs</a></li>
            <li className='nav-search'><a href='https://bower.io/'>Search packages</a></li>
            <li className='nav-blog'><a href='https://bower.io/blog/'>Blog</a></li>
            <li className='nav-stats'><a href='https://bower.io/stats/'>Stats</a></li>
          </ul>
          <a href='/'>
            <img className='logo' src='/src/assets/images/bower-logo.svg' alt='Bower logo' />
          </a>
          <h1 className='page-title'>Bower Search</h1>
          <h4 className='small-hidden' /* style='margin: -20px 0 0 223px' */>
            Powered by <a href='https://libraries.io/'>libraries.io</a>
          </h4>
        </div>
      </header>
      <div className='notification'>
        ...psst! While Bower is maintained, we recommend using&nbsp;
        <a href='https://yarnpkg.com/'>Yarn</a>
        &nbsp;and&nbsp;
        <a href='https://vitejs.dev/'>Vite</a>
        &nbsp;for front-end projects.&nbsp;
        <a href='https://bower.io/blog/2017/how-to-migrate-away-from-bower/'>
          Read how to migrate
        </a>!
      </div>
    </>
  )
}

export default Header
