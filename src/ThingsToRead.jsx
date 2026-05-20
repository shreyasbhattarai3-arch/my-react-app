function ThingsToRead() {
  const links = [
    { title: 'Neural DSP Quad Cortex', url: 'https://neuraldsp.com/quad-cortex' },
    { title: 'Nepali Momos', url: 'https://www.youtube.com/shorts/1oAV_q7qqjc' },
    { title: 'My Favorite Hardcore Band (Vein.fm)', url: 'https://vein.fm' },
    { title: 'Old School Games', url: 'https://gam.onl/' },
    { title: 'Community Owned Music Platform', url: 'https://www.subvert.fm/' },
    { title: 'My Band', url: 'https://www.instagram.com/foreign_reign.206/?g=5' },
    { title: 'Ox Billiards', url: 'https://www.oxbilliards.com/' },
    { title: 'Malcolm X Wiki', url: 'https://en.wikipedia.org/wiki/Malcolm_X' },
    { title: '2025 Nepalese Gen Z Protests', url: 'https://en.wikipedia.org/wiki/2025_Nepalese_Gen_Z_protests' },
    { title: 'Vocal Warm Up', url: 'https://www.youtube.com/watch?v=rYsuVwyGe-4&t=176s&pp=ygUNdm9jYWwgd2FybXVwcw%3D%3D' },
  ]

  return (
    <div className="app">
      <h1>Things I find Interesting</h1>
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