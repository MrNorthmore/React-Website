import React from "react";
import { Container, Typography } from "@material-ui/core";

function NoRouteMatch() {
    return (
        <Container>
            <Typography variant="p">
                sorry this page is not found
            </Typography>
        </Container>
    )
}

export default NoRouteMatch;
