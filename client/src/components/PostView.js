import React from 'react';
import { connect } from 'react-redux';
import { Divider, Header, Image, Container, Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const PostView = ({ post = {} }) => (
  <Container>
    <Link to="/posts">View All Posts</Link>
    <Header as="h3" textAlign="center">{post.author}</Header>
    <Image src={post.picture} />
    <Table definition>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell />
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>Description</Table.Cell>
          <Table.Cell>{post.description}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Author</Table.Cell>
          <Table.Cell>{post.author}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Category</Table.Cell>
          <Table.Cell>{post.category}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </Container>
)

const mapStateToProps = (state, props) => {
  return { post: state.posts.find( p => p.id === parseInt(props.match.params.id )) }
}

export default connect(mapStateToProps)(PostView);