import Link from 'next/link'
import { getItems } from 'api/QiitaApi'

function Items({ items }) {
  return (
    <div className="container">
      <h1>Hello</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Link href={`/items/${item.id}`}>
              <a>{item.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Items

export async function getStaticProps() {
  const data = await getItems()
  const items = data.map((item) => ({ id: item.id, title: item.title }))
  return {
    props: { items },
  }
}
