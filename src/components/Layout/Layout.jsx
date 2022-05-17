import { Container } from '@material-ui/core';
import React from 'react';

const Layout = ({children}) => {
    return (
        <Container>
            {
                children
            }
        </Container>
    )
}

export default Layout;