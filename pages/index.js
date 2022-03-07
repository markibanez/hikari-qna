import { Fab, Grid } from '@mui/material';
import Head from 'next/head';
import { useState, useEffect, useRef } from 'react';
import shortid from 'shortid';
import styles from '../styles/Home.module.css';
import AddCommentTwoToneIcon from '@mui/icons-material/AddCommentTwoTone';
import SubmitQuestion from '../components/submit-question';
import Question from '../components/question';

export default function Home() {
    const submitQuestionRef = useRef(null);
    const [data, setData] = useState([]);

    useEffect(() => {
        const uid = localStorage.getItem('uid');
        if (!uid) localStorage.setItem('uid', shortid.generate());
    }, []);

    // let resizeTimer;
    // useEffect(() => {
    //     particlesJS.load('particle-body', '/particlesjs-config.json', () => {});

    //     window.addEventListener('resize', () => {
    //         clearTimeout(resizeTimer);
    //         resizeTimer = setTimeout(function () {
    //             try {
    //                 const particleBody = document.getElementById('particle-body');
    //                 particleBody.removeChild(particleBody.firstChild);
    //                 particlesJS.load('particle-body', '/particlesjs-config.json', () => {});
    //             } catch (err) {}
    //         }, 1000);
    //     });
    // }, []);

    const getQuestions = async () => {
        try {
            const response = await fetch('/api/get-questions');
            const result = await response.json();
            setData(result);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getQuestions();

        setTimeout(() => {
            console.log('get questions');
            getQuestions();
        }, 10000);
    }, []);

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
                        return <Question key={q._id} question={q} setData={setData} />;
                    })}
                </Grid>
                <SubmitQuestion ref={submitQuestionRef} getQuestions={getQuestions} />
                <Fab
                    variant="extended"
                    color="primary"
                    size="large"
                    onClick={() => submitQuestionRef.current.showModal()}
                    sx={{ position: 'fixed', bottom: 40, right: 40, zIndex: 50 }}
                >
                    <AddCommentTwoToneIcon sx={{ marginRight: 1 }} /> Submit Question
                </Fab>
            </main>
        </div>
    );
}
