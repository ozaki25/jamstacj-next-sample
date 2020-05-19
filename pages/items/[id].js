import { getItems, getItem } from 'api/QiitaApi'
import { Container } from 'react-bootstrap'

function Item({ item }) {
  return (
    <Container>
      <h1>{item.title}</h1>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: item.body }}></div>
    </Container>
  )
}

export default Item

export async function getStaticPaths() {
  const data = await getItems()
  const paths = data.map((item) => `/items/${item.id}`)
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const data = await getItem({ id: params.id })
  const item = { id: data.id, title: data.title, body: data.rendered_body }
  return { props: { item } }
}
