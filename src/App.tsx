import styled from '@emotion/styled';
import React, { FC } from 'react';

const Main = styled('main')({
    textAlign: 'center',
});

const App: FC = () => {
    return (
        <Main>
            <h1>Jazzy-UI</h1>
            <small>
                by <strong>megabass00</strong>
            </small>
        </Main>
    );
};

export default App;
