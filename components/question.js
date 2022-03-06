import React, { useState } from 'react'
import { Card, CardContent, CircularProgress, Grid, IconButton, Stack, Typography } from '@mui/material';
import ArrowCircleUpTwoToneIcon from '@mui/icons-material/ArrowCircleUpTwoTone';
import { useSnackbar } from 'notistack';

export default function Question(props) {
    const { question, setData } = props;
    const { enqueueSnackbar } = useSnackbar();

    const [voting, setVoting] = useState(false);

    const vote = async (id) => {
        if (localStorage.getItem(id)) {
            enqueueSnackbar('Already voted for this questions', { variant: 'warning' });
            return;
        }

        setVoting(true);
        try {
            localStorage.setItem(id, 1);
            const response = await fetch(`/api/vote?id=${id}`);
            const result = await response.json(); console.log(result);
            setData(result);
        } catch (err) {
            enqueueSnackbar('Voting failed', { variant: 'error' });
            console.log(err);
        } finally {
            setVoting(false);
        }
    }

    return (
        <>
            <Grid item xs={12} sm={12} md={4} lg={3} sx={{ zIndex: 40 }}>
                <Card
                    variant="elevation"
                    elevation={6}
                    sx={{ width: '100%', height: '100%', opacity: 0.8 }}
                >
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={3}>
                                <Stack direction="column" alignItems="center">
                                    {!voting &&
                                    <IconButton onClick={() => vote(question._id)}>
                                        <ArrowCircleUpTwoToneIcon fontSize="large" />
                                    </IconButton>
                                    }

                                    {voting &&
                                    <CircularProgress size="36px" />
                                    }
                                    <Typography variant="body1">{question.votes} Votes</Typography>
                                </Stack>
                            </Grid>
                            <Grid item xs={9}>
                                <Stack direction="column" spacing={2}>
                                    <Typography variant="h6">{question.name}</Typography>
                                    <Typography variant="body1">{question.question}</Typography>
                                </Stack>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </>
    )
}
