import { Box, Button, Card, CardContent, Fab, Grid, IconButton, Stack, TextField, Typography } from '@mui/material';
import Head from 'next/head';
import { useState, useEffect, useRef } from 'react';
import shortid from 'shortid';
import styles from '../styles/Home.module.css';
import ArrowCircleUpTwoToneIcon from '@mui/icons-material/ArrowCircleUpTwoTone';
import AddCommentTwoToneIcon from '@mui/icons-material/AddCommentTwoTone';
import SubmitQuestion from '../components/submit-question';

const data = [
    {
        name: 'Meghan',
        question: 'How did we perform in Q3?',
        votes: 39,
    },
    {
        name: 'John',
        question: 'What projects do we have planned for the next year?',
        votes: 38,
    },
    {
        name: 'Anthony',
        question: 'What are our plans for remote work?',
        votes: 21,
    },
    {
        name: 'Caesar',
        question:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum tristique dictum. Aenean consectetur eu nisi nec convallis. Vivamus auctor dui iaculis eros fringilla, eu finibus felis ultricies.',
        votes: 21,
    },
];

export default function Home() {
    const submitQuestionRef = useRef(null);

    useEffect(() => {
        const uid = localStorage.getItem('uid');
        if (!uid) localStorage.setItem('uid', shortid.generate());
    }, []);

    useEffect(() => {
        particlesJS.load('particle-body', '/particlesjs-config.json', () => {
            console.log('particles loaded');
        });
    });

    return (
        <div className={styles.container}>
            <Head>
                <title>Hikari Q&amp;A</title>
                <meta name="description" content="Hikari Q&amp;A" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Grid container spacing={2} alignItems="stretch" sx={{ paddingY: 4, zIndex: 40 }}>
                    {data.map((q, index) => {
                        return (
                            <Grid item key={index} xs={12} sm={12} md={4} lg={3} sx={{ zIndex: 40 }}>
                                <Card
                                    variant="elevation"
                                    elevation={6}
                                    sx={{ width: '100%', height: '100%', opacity: 0.8 }}
                                >
                                    <CardContent>
                                        <Grid container spacing={2}>
                                            <Grid item xs={3}>
                                                <Stack direction="column" alignItems="center">
                                                    <IconButton>
                                                        <ArrowCircleUpTwoToneIcon fontSize="large" />
                                                    </IconButton>
                                                    <Typography variant="body1">{q.votes} Votes</Typography>
                                                </Stack>
                                            </Grid>
                                            <Grid item xs={9}>
                                                <Stack direction="column" spacing={2}>
                                                    <Typography variant="h6">{q.name}</Typography>
                                                    <Typography variant="body1">{q.question}</Typography>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Grid>
                        );
                    })}
                </Grid>
                <SubmitQuestion ref={submitQuestionRef} />
                <Fab
                    variant="extended"
                    color="primary"
                    onClick={() => submitQuestionRef.current.showModal()}
                    sx={{ position: 'fixed', bottom: 40, right: 40, zIndex: 50 }}
                >
                    <AddCommentTwoToneIcon sx={{ marginRight: 1 }} /> Submit Question
                </Fab>
            </main>
        </div>
    );
}
