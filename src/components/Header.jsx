const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

function Header() {
  return (
    <header className="header">
      <a href="#top" className="header-name">Bill Andrianopoulos</a>
      <nav>
        <ul className="header-nav">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header