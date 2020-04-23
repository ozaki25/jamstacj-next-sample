import { getItems, getItem } from 'api/QiitaApi'
import { Container } from 'react-bootstrap'

function Item({ item }) {
  return (
    <Container>
      <h2>{item.title}</h2>
      <pre dangerouslySetInnerHTML={{ __html: item.body }}></pre>
    </Container>
  )
}

export default Item

export async function getStaticPaths() {
  const { contents } = await getItems()
  const paths = contents.map((item) => `/items/${item.id}`)
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const data = await getItem({ id: params.id })
  const item = { id: data.id, title: data.title, body: data.body }
  return { props: { item } }
}
