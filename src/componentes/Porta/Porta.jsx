import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TabScrollButton from '@mui/material/TabScrollButton';
import { ReactComponent as Git } from '../../assets/tec/git-icon.svg'
import "./Goku.css"
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50vw',
    bgcolor: "#111",
    border: '2px solid #00E6FF',
    boxShadow: 24,
    p: 4,
};

const icongit = {
    width: '50px',
    height: '50px'
}
function Porta({ img, title, link, descrip, descrip2, git }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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

            <Button onClick={handleOpen} className='butt-con'>
                <div style={imgs} class="image" />
                <div class="middle">
                    <div class="text">View project</div>
                </div>
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {title}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {descrip}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {descrip2}
                    </Typography>
                    <div className="links">
                        <div className="centrador2">
                            <a href={git} target="_blank"><Git style={icongit} /></a>
                            <a className='zelda' href={git} target="_blank"> {git} </a>
                        </div>
                        <a href={link} className='c2' target="_blank">

                            <a className='zelda2' href={link} target="_blank"> {link} </a>

                        </a>

                    </div>

                </Box>
            </Modal>
        </div>
    );
}

export default Porta