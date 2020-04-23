import Link from 'next/link'
import { Container, ListGroup, ListGroupItem } from 'react-bootstrap'
import { getItems } from 'api/QiitaApi'

function Items({ items }) {
  return (
    <Container>
      <h1>Hello</h1>
      <ListGroup>
        {items.map((item) => (
          <ListGroupItem key={item.id}>
            <Link href="/items/[id]" as={`/items/${item.id}`}>
              <a>{item.title}</a>
            </Link>
          </ListGroupItem>
        ))}
      </ListGroup>
    </Container>
  )
}

export default Items

export async function getStaticProps() {
  const { contents } = await getItems()
  const items = contents.map((item) => ({ id: item.id, title: item.title }))
  return {
    props: { items },
  }
}
