const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
            
            </head>
            <body>
            <nav>
  <ul>
    <li>
      <a href="/">Home</a>
    </li>
    <li>
      <a href="/Component/inventory">Inventory</a>
    </li>
    <li>
      <a href="/Component/location">Location</a>
    </li>
  </ul>
</nav>
                {html.children}
            </body>
        </html>
    )
}

module.exports = Def