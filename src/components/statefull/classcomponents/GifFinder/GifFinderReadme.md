```javascript
import React, { Component } from 'react';
import fetch from 'node-fetch';
import { 
  Container, 
  Grid, 
  Card, 
  Divider, 
  Header, 
  Image, 
  Input, 
  Loader, 
  Dimmer,
} from 'semantic-ui-react';

export default class GifFinder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      q: 'joker',
      selection: null,
      loading: false,
    };
    this.searchInput = React.createRef();
    this.requestAssets.bind(this);
  }

  componentDidMount() {
    const { q } = this.state;
    this.requestAssets(q);
  }

  requestAssets(query) {
    const url = this.buildURL(query, 12);
    this.setState({ loading: true })
    fetch(url)
      .then(res => res.json())
      .then(json => this.setState({ data: json.data, loading: false }))
      .catch(err => console.log(err));
  }

  buildURL(q, limit) {
    return `http://api.giphy.com/v1/gifs/search?api_key=N1hoq39SPfAlqRy6JSFzZqyfTHKTuJ4C&limit=${limit}&q=${q}`;
  }

  search = () => {
    if (this.searchInput.current) {
      if (this.searchInput.current.inputRef.current.value !== '') {
        this.requestAssets(this.searchInput.current.inputRef.current.value);
      }
    }
  }

  render() {
    const { data, q, selection, loading } = this.state;
    return (
      <Container>
        <Grid centered>
          <Grid.Column mobile="10" tablet="8" computer="6" textAlign="center">
            {selection && (
              <Card fluid>
                <Image src={selection.images.downsized_large.url} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>{selection.title}</Card.Header>
                  <Card.Meta>
                    <span className='date'>{selection.import_datetime}</span>
                  </Card.Meta>
                  <Card.Description>
                    <a href={selection.bitly_url} target="_blank">{selection.bitly_url}</a>
                  </Card.Description>
                </Card.Content>
              </Card>
            )}
          </Grid.Column>
        </Grid>
        <Divider horizontal>
          <Header as='h4'>
            Search
          </Header>
        </Divider>
        <Input
          ref={this.searchInput}
          action={{
            children: 'Search',
            onClick: this.search,
          }}
          placeholder='Search...'
        />
        <Divider horizontal>
          <Header as='h4'>
            query: {q}
          </Header>
        </Divider>
        {loading 
          ? (
            <Dimmer active inverted>
              <Loader size='large'>Loading</Loader>
            </Dimmer>
          )
          : (
            <Card.Group itemsPerRow={6}>
              {data.map((i, k) => (
                <Card
                  key={k}
                  onClick={() => { this.setState({ selection: i }); }}
                  color='grey'
                  image={i.images.downsized.url}
                />
              ))}
            </Card.Group>
        )}
      </Container>
    )
  }
}

```
