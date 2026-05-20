function ThingsToRead() {
  const links = [
    { title: 'Link 1', url: 'https://example.com' },
    { title: 'Link 2', url: 'https://example.com' },
    { title: 'Link 3', url: 'https://example.com' },
    { title: 'Link 4', url: 'https://example.com' },
    { title: 'Link 5', url: 'https://example.com' },
    { title: 'Link 6', url: 'https://example.com' },
    { title: 'Link 7', url: 'https://example.com' },
    { title: 'Link 8', url: 'https://example.com' },
    { title: 'Link 9', url: 'https://example.com' },
    { title: 'Link 10', url: 'https://example.com' },
  ]

  return (
    <div className="app">
      <h1>Things to Read</h1>
      <ul className="read-list">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ThingsToRead