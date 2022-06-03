import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';



function Porta({ img, title, link, descrip, descrip2, git }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: "#111",
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const imgs = {
        width: 400,
        height: 200,
        backgroundImage: `url(${img})`,
        border: '2px solid #red',
        boxShadow: 24,
        backgroundSize: "cover",
        objectFit: "contain",
    };

    return (
        <div>

            <Button onClick={handleOpen} style={imgs}><div style={imgs}></div></Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {descrip}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {descrip2}
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}

export default Porta