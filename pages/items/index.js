import fetch from 'node-fetch'

function Items({ items }) {
  return (
    <div className="container">
      <h1>Hello</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Items

export async function getStaticProps() {
  const res = await fetch('https://qiita.com/api/v2/items')
  const data = await res.json()
  const items = data.map((item) => ({ id: item.id, title: item.title }))
  return {
    props: { items },
  }
}
