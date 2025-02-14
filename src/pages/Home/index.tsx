import React from 'react';
import { Image } from 'react-native';
import { Container, Title, Header, WrapperImage, Text } from './styles';

import Input from '../../components/Input';
import GridMoviesSeries from '../../components/GridMoviesSeries';

import { useMoviesSeries } from '../../hooks/MoviesSeries';

const Home: React.FC = () => {
  const { data, notFound } = useMoviesSeries();

  return (
    <Container testID="home">
      <Header>
        <Title>Dev, ache seu filme.</Title>
        <Input />
      </Header>
      {data.length === 0 ? (
        <>
          <WrapperImage>
            <Image source={require('../../assets/popcorn.png')} />
            {notFound && (
              <Text testID="textNotFound">
                Não encontramos nenhum filme/série com esse nome!{' '}
              </Text>
            )}
          </WrapperImage>
        </>
      ) : (
        <GridMoviesSeries data={data} />
      )}
    </Container>
  );
};

export default Home;
