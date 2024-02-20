import { useState } from 'react'
import './Sidebar.scss'

function Sidebar() {
  const [ hideMenu, setHideMenu ] = useState<boolean>(true)
  return (
    <>
      <button className='btn menu-btn' onClick={ () => setHideMenu(!hideMenu) }>Menu</button>
      <div className={`sidebar ${!hideMenu ? 'extended' : ''}`}>
        <ul className='docs-nav nav'>
          <li className='nav-home'><a href='https://bower.io/'>Home</a></li>
          <li className='nav-creating'><a href='https://bower.io/docs/creating-packages/'>Creating Packages</a></li>
          <li className='nav-api'><a href='https://bower.io/docs/api/'>API</a></li>
          <li className='nav-config'><a href='https://bower.io/docs/config/'>Configuration</a></li>
          <li className='nav-config'><a href='https://bower.io/docs/pluggable-resolvers/'>Pluggable Resolvers</a></li>
          <li className='nav-tools'><a href='https://bower.io/docs/tools/'>Tools</a></li>
          <li className='nav-about'><a href='https://bower.io/docs/about/'>About</a></li>
        </ul>
        <h5>Sponsors (<a href='https://opencollective.com/bower'>become one</a>):</h5>
        <a href='https://www.loadview-testing.com/'><img className='sidebar-logo' src='https://i.imgur.com/iHdPKSV.png' alt='LoadView-Testing' /></a>
        <a href='https://www.credimaxx.de/'><img className='sidebar-logo' src='https://i.imgur.com/sf5e7KT.png' alt='credimaxx.de' /></a>
        <a href='https://420couponcodes.com/'><img className='sidebar-logo' src='https://i.imgur.com/IbhCD2k.png' alt='420couponcodes.com' /></a>
        <a href='https://www.top5credits.com/'><img className='sidebar-logo' src='https://i.imgur.com/K2EU3HD.png' alt='top5credits.com' /></a>
        <a href='https://www.ramotion.com/agency/web-design/'><img className='sidebar-logo' src='https://i.imgur.com/mQxmvRm.png' alt='Ramotion' /></a>
        <a href='https://www.softwaredevelopment.co.uk/'><img className='sidebar-logo' src='https://i.imgur.com/HoU15ep.png' alt='SoftwareDevelopmentUK' /></a>
        <a href='https://theymakedesign.com/best-web-design-companies-3ecc85b32071'><img className='sidebar-logo' src='https://i.imgur.com/kfA0vQE.png' alt='theymakedesign.com' /></a>
        <a href='https://www.zadluzenia.com/'><img className='sidebar-logo' src='https://i.imgur.com/NLC1TOn.png' alt='zadluzenia.com' /></a>
        <a href='https://www.instinctools.com/cloud-computing/'><img className='sidebar-logo' src='https://i.imgur.com/c56Di42.png' alt='*instinctools' /></a>
        <a href='https://bitlaunch.io/'><img className='sidebar-logo' src='https://i.imgur.com/pJ8u9sq.png' alt='Bitcoin VPS' /></a>
        <a href='https://legalbet.uk/'><img className='sidebar-logo' src='https://i.imgur.com/2qQ6Gxf.png' alt='Legalbet' /></a>
        <a href='https://www.cryptonewsz.com/'><img className='sidebar-logo' src='https://i.imgur.com/sYNDuyj.png' alt='CryptoNewsZ' /></a>
        <a href='https://buy.fineproxy.org/eng/'><img className='sidebar-logo' src='https://i.imgur.com/MCMrOiw.png' alt='FinePROXY' /></a>
        <a href='https://sprocketdigital.co.nz/'><img className='sidebar-logo' src='https://i.imgur.com/koJsb0d.png' alt='Matthew Chalk' /></a>
        <a href='https://wekrypto.co'><img className='sidebar-logo' src='https://i.imgur.com/5I1aWa2.png' alt='WeKrypto' /></a>
        <a href='https://vpn-review.com/'><img className='sidebar-logo' src='https://i.imgur.com/INf1G7H.png' alt='VPN reviews 2019' /></a>
        <a href='https://faveable.com/' rel='nofollow'><img className='sidebar-logo' src='https://i.imgur.com/PMqdGyT.png' alt='Faveable' /></a>
        <a href='https://iboysoft.com'><img className='sidebar-logo' src='https://i.imgur.com/eOWcxUr.png' alt='iBoysoft' /></a>
        <a href='https://webpundits.in'><img className='sidebar-logo' src='https://i.imgur.com/IVgnquz.png' alt='Buy RDP online from Web Pundits' /></a>
        <ul className='extra-nav nav'>
          <li><a href='https://github.com/bower/bower'>
              Bower on GitHub
            </a>
          </li>
          <li><a href='https://twitter.com/bower'>
              @bower
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Sidebar
