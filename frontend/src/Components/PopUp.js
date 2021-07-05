import React, {useContext, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import {Controller, useForm} from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import {ReduceContext} from "../reducer/reducerContext";


export default function ResponsiveDialog({DataPopup}) {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const [openTwo, setOpenTwo] = React.useState(false);
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const { handleSubmit, errors,control } = useForm();
    const handleClickOpen = () => {
        setOpen(true);
    };
    const {none,UpdateItems}=useContext(ReduceContext);

    const handleClose = () => {
        setOpen(false);
    };
    const onSubmit =value=> {
        value.id=DataPopup.id;
        value.created_User=none.user_token.username;
        value.created_Email=none.user_token.email;
        UpdateItems(value)
        setOpenTwo(true);
        setTimeout(()=>{
            setOpenTwo(false);
        },2000)
    }
    return (
        <div className="Modal_update" >
            <Button variant="outlined" color="primary" onClick={handleClickOpen} className="Button_update">
                Open responsive dialog
            </Button>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
                className="Modal_update_items"
            >
                <DialogTitle id="responsive-dialog-title">{"Форма обновления товара"}</DialogTitle>
                <form onSubmit={handleSubmit(onSubmit)} className="form_grid">

                    <Controller
                        as={TextField}
                        error={errors.title!==undefined?true:false}
                        name="title"
                        variant="outlined"
                        fullWidth
                        label="Название Заголовка"
                        defaultValue={DataPopup.title}
                        autoComplete="name"
                        control={control}
                        rules={{ required: true }}
                    />
                    <Controller
                        as={TextField}
                        error={errors.productor!==undefined?true:false}
                        name="productor"
                        variant="outlined"
                        fullWidth
                        label="Производитель"
                        defaultValue={DataPopup.productor}
                        autoComplete="productor"
                        control={control}
                        rules={{ required: true }}
                    />
                    <Controller
                        as={TextField}
                        name="model"
                        error={errors.model!==undefined?true:false}
                        variant="outlined"
                        fullWidth
                        label="Модель"
                        defaultValue={DataPopup.model}
                        autoComplete="model"
                        control={control}
                        rules={{ required: true }}
                    />
                    <Controller
                        as={TextField}
                        name="type_processor"
                        variant="outlined"
                        fullWidth
                        label="Тип процесора"
                        defaultValue={DataPopup.type_processor}
                        autoComplete="type_processor"
                        control={control}

                    />
                    <Controller
                        as={TextField}
                        name="ram"
                        variant="outlined"
                        fullWidth
                        label="Объем оперативной памяти"
                        defaultValue={DataPopup.ram}
                        autoComplete="ram"
                        control={control}

                    />
                    <Controller
                        as={TextField}
                        name="hard_drive"
                        variant="outlined"
                        fullWidth
                        label="Объем жесткого диска"
                        defaultValue={DataPopup.hard_drive}
                        autoComplete="hard_drive"
                        control={control}

                    />
                    <Controller
                        as={TextField}
                        name="diagonal"
                        variant="outlined"
                        fullWidth
                        label="Диагональ монитора"
                        defaultValue={DataPopup.diagonal}
                        autoComplete="diagonal"
                        control={control}

                    />
                    <Controller
                        as={TextField}
                        name="price"
                        variant="outlined"
                        error={errors.price!==undefined?true:false}
                        fullWidth
                        label="Цена"
                        defaultValue={DataPopup.price}
                        autoComplete="price"
                        control={control}
                        rules={{ required: true }}
                    />
                    <Button   type="submit" color="primary" variant="contained" autoFocus>
                        Обновить
                    </Button>
                </form>
                <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary" variant="contained">
                        Вернутся
                    </Button>
                </DialogActions>
            </Dialog>
            <Dialog
                open={openTwo}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Продукт успешно обновлён</DialogTitle>
            </Dialog>
        </div>
    );
}