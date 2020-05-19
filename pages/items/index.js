import Link from 'next/link'
import { Container, ListGroup, ListGroupItem } from 'react-bootstrap'
import { getItems } from 'api/QiitaApi'

function Items({ items }) {
  return (
    <Container>
      <h1>Hello</h1>
      <ListGroup>
        {items.map((item) => (
          <Link key={item.id} href="/items/[id]" as={`/items/${item.id}`}>
            <ListGroupItem action>{item.title}</ListGroupItem>
          </Link>
        ))}
      </ListGroup>
    </Container>
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
