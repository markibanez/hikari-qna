import { Button, Card, Dialog, DialogActions, DialogContent, DialogTitle, Stack, TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { forwardRef, useImperativeHandle, useState } from 'react';
import { useSnackbar } from 'notistack';

const SubmitQuestion = (props, ref) => {
    const [open, setOpen] = useState(false);
    const [saving, setSaving] = useState(false);
    const [name, setName] = useState('');
    const [question, setQuestion] = useState('');

    const { enqueueSnackbar } = useSnackbar();

    const { getQuestions } = props;

    useImperativeHandle(ref, () => ({
        showModal() {
            setOpen(true);
        },
    }));

    const handleClose = () => {
        setOpen(false);
    };

    const submitQuestion = async () => {
        if (!name) {
            enqueueSnackbar('Please enter your name', { variant: 'error' });
            return;
        }

        if (!question) {
            enqueueSnackbar('Please enter your question', { variant: 'error' });
            return;
        }

        setSaving(true);
        try {
            const url = `/api/submit-question?uid=${localStorage.getItem('uid')}&name=${name}&question=${question}`;
            const response = await fetch(url);

            if (response.status === 200) {
                getQuestions();
                enqueueSnackbar('Question submitted', { variant: 'success' });
                setQuestion('');
                setOpen(false);
            } else {
                enqueueSnackbar('Your question could not be submitted', { variant: 'error' });
            }
        } catch (err) {
            enqueueSnackbar('Your question could not be submitted', { variant: 'error' });
        } finally {
            setSaving(false);
        }
    };

    return (
        <>
            <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
                <DialogContent>
                    <Stack direction="column" spacing={2}>
                        <TextField
                            label="Name"
                            variant="outlined"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <TextField
                            label="Question"
                            variant="outlined"
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                            multiline
                            rows={10}
                        />
                    </Stack>
                </DialogContent>
                <DialogActions>
                    <Button color="primary" variant="outlined" onClick={handleClose}>
                        Cancel
                    </Button>
                    <LoadingButton color="primary" variant="contained" loading={saving} onClick={submitQuestion}>
                        Submit
                    </LoadingButton>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default forwardRef(SubmitQuestion);
