import React, { useEffect, useState } from 'react';
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

function buildURL(q, limit) {
  return `http://api.giphy.com/v1/gifs/search?api_key=N1hoq39SPfAlqRy6JSFzZqyfTHKTuJ4C&limit=${limit}&q=${q}`;
}

async function requestAssets(query) {
  const url = buildURL(query, 12);
  const res = await fetch(url);
  return res.json();
}

const GifFinder = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('joker');
  const [selection, setSelection] = useState(null);
  const [loading, setLoading] = useState(false);
  const searchInput = React.createRef();

  // Replacement for componentDidMount or componentDidUpdate.
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await requestAssets(query)
      setData(result.data);
      setLoading(false);
    };
    fetchData();
  }, [query]);

  const search = () => {
    if (searchInput.current) {
      if (searchInput.current.inputRef.current.value !== '') {
        setQuery(searchInput.current.inputRef.current.value);
      }
    }
  };

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
        ref={searchInput}
        action={{
          children: 'Search',
          onClick: search,
        }}
        placeholder='Search...'
      />
      <Divider horizontal>
        <Header as='h4'>
          query: {query}
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
                onClick={() => { setSelection(i); }}
                color='grey'
                image={i.images.downsized.url}
              />
            ))}
          </Card.Group>
        )}
    </Container>
  )
}

export default GifFinder;
