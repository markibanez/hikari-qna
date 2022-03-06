import { Box, Button, Card, Dialog, DialogActions, DialogContent, DialogTitle, Stack, TextField } from '@mui/material';
import { forwardRef, useImperativeHandle, useState } from 'react';

const SubmitQuestion = (props, ref) => {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [question, setQuestion] = useState('');

    useImperativeHandle(ref, () => ({
        showModal() {
            setOpen(true);
        },
    }));

    const handleClose = () => {
        setOpen(false);
    };

    const submitQuestion = async () => {
        alert(`Hello ${name}, you asked the following question: "${question}"`);
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
                            rows={3}
                        />
                    </Stack>
                </DialogContent>
                <DialogActions>
                    <Button color="primary" variant="contained" onClick={handleClose}>
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default forwardRef(SubmitQuestion);
