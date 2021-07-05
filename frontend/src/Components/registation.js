import React, {useContext, useEffect} from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import {Link, useHistory} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import GroupIcon from "@material-ui/icons/Group";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Fab from "@material-ui/core/Fab";
import {Dialog} from "@material-ui/core";
import DialogTitle from "@material-ui/core/DialogTitle";
import {ReduceContext} from "../reducer/reducerContext";
import {Controller, useForm} from "react-hook-form";

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(7),
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(3)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: "100%"
    }
}));

export default function Registration() {
    const { register, handleSubmit, watch, errors,control } = useForm();
    const classes = useStyles();
    const [firstLoad, setLoad] = React.useState(true);
    const [open, setOpen] = React.useState(false);
    const {none,Registration}=useContext(ReduceContext);



useEffect(()=>{
    if(none.isLogin===true){
        setOpen(true);
        setTimeout(() => {
            setOpen(false);
            history.push("/");
        }, 2000)
    }
},[none.isLogin===true])

    const onSubmit =values=> {
        Registration(values);

    }

    const history = useHistory();


    if (firstLoad) {
        // sampleFunc();
        setLoad(false);
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />

            <Fab color="primary" aria-label="add" onClick={()=>history.goBack()}>
                <ArrowBackIcon />
            </Fab>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <GroupIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Регистрация
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Controller
                                as={TextField}
                                name="name"
                                error={errors.name!==undefined?true:false}
                                variant="outlined"
                                fullWidth
                                label="Логин"
                                defaultValue=""
                                autoComplete="name"
                                control={control}
                                rules={{ required: true }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Controller
                                as={TextField}
                                variant="outlined"
                                fullWidth
                                defaultValue=""
                                label="Имя"
                                autoComplete="first_name"
                                name="first_name"
                                control={control}
                                rules={{ required: true }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Controller
                                as={TextField}
                                variant="outlined"
                                fullWidth
                                defaultValue=""
                                label="Фамилия"
                                autoComplete="last_name"
                                name="last_name"
                                control={control}
                                rules={{ required: true }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Controller
                                as={TextField}
                                variant="outlined"
                                fullWidth
                                defaultValue=""
                                error={errors.email!==undefined?true:false}
                                label="Email"
                                autoComplete="email"
                                name="email"
                                control={control}
                                rules={{ required: true }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Controller
                                as={TextField}
                                variant="outlined"
                                fullWidth
                                type="password"
                                defaultValue=""
                                error={errors.password!==undefined?true:false}
                                label="Пароль"
                                autoComplete="password"
                                name="password"
                                control={control}
                                rules={{ required: true }}
                            />
                        </Grid>
                    </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"

                            className={classes.submit}
                        >
                            Зарегистрироватся
                        </Button>
                </form>
            </div>
            <Dialog
                open={open}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Вы успешно Зарегистировались</DialogTitle>
            </Dialog>
        </Container>
    );
}