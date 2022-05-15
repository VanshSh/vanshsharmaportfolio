import * as React from 'react'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'
import { ThemeContext } from '../contexts/theme'

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />
})

export default function Notification() {
    const [{ open, setOpen }] = React.useContext(ThemeContext)

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }

        setOpen(!open)
    }

    return (
        <>
            <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
                <Alert
                    onClose={handleClose}
                    severity='success'
                    sx={{ width: 'content-fit', backgroundColor: 'green' }}
                >
                    Email sent successfully!
                </Alert>
            </Snackbar>
        </>
    )
}
