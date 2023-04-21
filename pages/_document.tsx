import {Head, Html, Main, NextScript} from 'next/document'
import {AppBar, Container, Toolbar, Typography} from "@mui/material";
import Link from "next/link";

export default function Document() {
    return (
        <Html lang="en">
            <Head/>
            <body>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        className="mx-auto text-lg font-bold"
                        href="/"
                        component={Link}
                    >
                        Composition
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container maxWidth="md" className="mt-4">
                <Main/>
            </Container>
            <NextScript/>
            </body>
        </Html>
    )
}
