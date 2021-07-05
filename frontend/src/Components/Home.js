import React, {useContext, useEffect} from "react";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import {makeStyles} from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";

import Card from "@material-ui/core/Card";
import {ReduceContext} from "../reducer/reducerContext";
import moment from 'moment';
import AddIcon from '@material-ui/icons/Add';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import {Dialog} from "@material-ui/core";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import {Controller, useForm} from "react-hook-form";
import DialogActions from "@material-ui/core/DialogActions";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";
import TextField from "@material-ui/core/TextField";
import ResponsiveDialog from "./PopUp";

const mainFeaturedPost = {
    title: 'Интернет магазин ноубуков',
    description:
        "Первые портативные компьютерные устройства для бизнеса появились в 90-х годах ХХ века. У истоков поставок лэптопов в Украину уверенно стояла наша компания Сats Laptop. И до сегодня идея реализации мобильного офиса активно продвигается нашими специалистами.",
    image: 'https://i.ytimg.com/vi/oMgZjchewqw/maxresdefault.jpg',
    imgText: 'main image description',
};


const useStyles = makeStyles((theme) => ({

    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
        flex: 1,
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
        overflowX: 'auto',
    },
    toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0,
    },
    mainFeaturedPost: {
        position: 'relative',
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundImage: 'url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DoMgZjchewqw&psig=AOvVaw01M3DGXmWea-WwbAFuUSkz&ust=1589969689649000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJD1wujYv-kCFQAAAAAdAAAAABAD)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,.3)',
    },
    mainFeaturedPostContent: {
        position: 'relative',
        padding: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(6),
            paddingRight: 0,
        },
    },
    card: {
        display: 'flex',
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 160,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,

        padding: theme.spacing(6, 0),
    },
}));


export default function Home() {
    const classes = useStyles();
    const { handleSubmit, errors,control } = useForm();
    const [open, setOpen] = React.useState(false);
    const [openTwo, setOpenTwo] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const {none,LogOut,AddItems,sampleFunc,DeleteItems}=useContext(ReduceContext);


   useEffect(()=>{
       sampleFunc();
       console.log(none.date);
   },[])



    const handleClose = () => {
        setOpen(false);
    };
    const onSubmit =value=> {
        value.created_User=none.user_token.username;
        value.created_Email=none.user_token.email;
        AddItems(value)
        setOpenTwo(true);
        setTimeout(()=>{
            setOpenTwo(false);
        },2000)
    }
    return (
        <Container maxWidth="lg">
        <React.Fragment>
            <Toolbar className={classes.toolbar+" header"}>
                <img src="../img/_9850-135.jpg" alt="Картинка"/>
                <Typography
                    component="h2"
                    variant="h5"
                    color="inherit"
                    align="center"
                    noWrap
                    className={classes.toolbarTitle}
                >
                    Web-сайт магазина ноутбуков
                </Typography>
                {!none.isLogin?
                    <Link to={"/login"}>
                        <Button color="primary" variant="contained" size="small">Авторизоватся</Button>
                    </Link>:
                        <Button size="small" color="primary" variant="contained" onClick={()=>LogOut()}>Выход</Button>
                }

            </Toolbar>
        </React.Fragment>
            <main>
                <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${mainFeaturedPost.image})` }}>
                    {/* Increase the priority of the hero background image */}
                    {<img style={{ display: 'none' }} src={mainFeaturedPost.image} alt={mainFeaturedPost.imageText} />}
                    <div className={classes.overlay} />
                    <Grid container>
                        <Grid item md={6}>
                            <div className={classes.mainFeaturedPostContent}>
                                <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                                    {mainFeaturedPost.title}
                                </Typography>
                                <Typography variant="h5" color="inherit" paragraph>
                                    {mainFeaturedPost.description}
                                </Typography>
                            </div>
                        </Grid>
                    </Grid>

                </Paper>
                {
                    none.isLogin &&
                    <div className="intsruction">Инструкция : Чтобы обновить продукт нужно нажать на блок выпадет форма обновления</div>
                }
                {
                none.isLogin ?
                <Grid container spacing={4} className="grid_column">
                    {
                        none.date!==null&&none.date?.map((post,i) => (
                            <Grid item xs={12} md={12} key={post.id} className="Items_update">
                                <Card className={classes.card}>
                                    <div className={classes.cardDetails}>
                                        <CardContent className="grid_items">
                                            {
                                                post.title&&
                                                <div className="title">
                                                    <div className="titleText">Название:</div>
                                                    {post.title}
                                                </div>
                                            }
                                            {
                                                post.productor&&
                                                <div className="productor">
                                                    <div className="titleText">Производитель:</div>
                                                    {post.productor}
                                                </div>
                                            }
                                            {
                                                post.model&&
                                                <div className="model">
                                                    <div className="titleText">Модель:</div>
                                                    {post.model}
                                                </div>
                                            }
                                            {
                                                post.type_processor&&
                                                <div className="type_processor">
                                                    <div className="titleText">Тип процессора:</div>
                                                    {post.type_processor}
                                                </div>
                                            }
                                            {
                                                post.ram &&
                                                <div className="ram">
                                                    <div className="titleText">Обьём оперативной памяти:</div>
                                                    {post.ram}
                                                </div>
                                            }
                                            {
                                                post.hard_drive &&
                                                <div className="hard_drive">
                                                    <div className="titleText">Обьём Жёсткого диска:</div>
                                                    {post.hard_drive}
                                                </div>
                                            }
                                            {
                                                post.diagonal &&
                                                <div className="hard_drive">
                                                    <div className="titleText">Диагональ:</div>
                                                    {post.diagonal}
                                                </div>
                                            }
                                            {
                                                post.price &&
                                                <div className="hard_drive">
                                                    <div className="titleText">Цена:</div>
                                                    {post.price}
                                                </div>
                                            }
                                            {
                                                post.created &&
                                                <div className="сreated">
                                                    <div className="titleText">Время и дата создание в БД:</div>
                                                    {moment(post.created).format('YYYY-MM-DD HH:mm:ss')}
                                                </div>
                                            }
                                            {
                                                post.created_User &&
                                                <div className="created_User">
                                                    <div className="titleText">Имя создания поста:</div>
                                                    {post.created_User}
                                                </div>
                                            }
                                            {
                                                post.created_Email &&
                                                <div className="created_User">
                                                    <div className="titleText">Email пользователя:</div>
                                                    {post.created_Email}
                                                </div>
                                            }

                                        </CardContent>
                                    </div>
                                </Card>
                               <ResponsiveDialog DataPopup={post}></ResponsiveDialog>
                                <DeleteForeverIcon className="icon_deleter" onClick={()=>DeleteItems(post.id)}></DeleteForeverIcon>
                            </Grid>

                        ))}
                    {none.isLogin ?
                        <div className="add_items" onClick={() => setOpen(true)}>
                            <AddIcon/>
                        </div>
                        : null
                    }
                </Grid>
                :
                    <div>
                        {
                            none.date!==null&&none.date.length == 0 ?
                                <div className="loading_server">
                                    <h2>Товары ещё не заполнены</h2>
                                    <div>Чтобы заполнить нужно <Link to={"/login"}>авторизоватся</Link></div>
                                </div> :
                                <Grid container spacing={4} className="grid_column">
                                    {
                                        none.date?.map((post,i) => (
                                            <Grid item xs={12} md={12} key={i}>
                                                <Card className={classes.card}>
                                                    <div className={classes.cardDetails}>
                                                        <CardContent className="grid_items">
                                                            {
                                                                post.title&&
                                                                <div className="title">
                                                                    <div className="titleText">Название:</div>
                                                                    {post.title}
                                                                </div>
                                                            }
                                                            {
                                                                post.productor&&
                                                                <div className="productor">
                                                                    <div className="titleText">Производитель:</div>
                                                                    {post.productor}
                                                                </div>
                                                            }
                                                            {
                                                                post.model&&
                                                                <div className="model">
                                                                    <div className="titleText">Модель:</div>
                                                                    {post.model}
                                                                </div>
                                                            }
                                                            {
                                                                post.type_processor&&
                                                                <div className="type_processor">
                                                                    <div className="titleText">Тип процессора:</div>
                                                                    {post.type_processor}
                                                                </div>
                                                            }
                                                            {
                                                                post.ram &&
                                                                <div className="ram">
                                                                    <div className="titleText">Обьём оперативной памяти:</div>
                                                                    {post.ram}
                                                                </div>
                                                            }
                                                            {
                                                                post.hard_drive &&
                                                                <div className="hard_drive">
                                                                    <div className="titleText">Обьём Жёсткого диска:</div>
                                                                    {post.hard_drive}
                                                                </div>
                                                            }
                                                            {
                                                                post.diagonal &&
                                                                <div className="hard_drive">
                                                                    <div className="titleText">Диагональ:</div>
                                                                    {post.diagonal}
                                                                </div>
                                                            }
                                                            {
                                                                post.price &&
                                                                <div className="hard_drive">
                                                                    <div className="titleText">Цена:</div>
                                                                    {post.price}
                                                                </div>
                                                            }
                                                            {
                                                                post.created &&
                                                                <div className="сreated">
                                                                    <div className="titleText">Время и дата создание в БД:</div>
                                                                    {moment(post.created).format('YYYY-MM-DD HH:mm:ss')}
                                                                </div>
                                                            }
                                                            {
                                                                post.created_User &&
                                                                <div className="created_User">
                                                                    <div className="titleText">Имя создания поста:</div>
                                                                    {post.created_User}
                                                                </div>
                                                            }
                                                            {
                                                                post.created_Email &&
                                                                <div className="created_User">
                                                                    <div className="titleText">Email пользователя:</div>
                                                                    {post.created_Email}
                                                                </div>
                                                            }

                                                        </CardContent>
                                                    </div>
                                                </Card>
                                            </Grid>

                                        ))}

                                </Grid>
                        }
                    </div>
                    }
                <Dialog
                    fullScreen={fullScreen}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="responsive-dialog-title"
                >
                    <DialogTitle id="responsive-dialog-title">{"Форма добавления товара"}</DialogTitle>
                    <DialogContent>
                        <form onSubmit={handleSubmit(onSubmit)} className="form_grid">

                            <Controller
                                as={TextField}
                                error={errors.title!==undefined?true:false}
                                name="title"
                                variant="outlined"
                                fullWidth
                                label="Название Заголовка"
                                defaultValue=""
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
                                defaultValue=""
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
                                defaultValue=""
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
                                defaultValue=""
                                autoComplete="type_processor"
                                control={control}

                            />
                            <Controller
                                as={TextField}
                                name="ram"
                                variant="outlined"
                                fullWidth
                                label="Объем оперативной памяти"
                                defaultValue=""
                                autoComplete="ram"
                                control={control}

                            />
                            <Controller
                                as={TextField}
                                name="hard_drive"
                                variant="outlined"
                                fullWidth
                                label="Объем жесткого диска"
                                defaultValue=""
                                autoComplete="hard_drive"
                                control={control}

                            />
                            <Controller
                                as={TextField}
                                name="diagonal"
                                variant="outlined"
                                fullWidth
                                label="Диагональ монитора"
                                defaultValue=""
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
                                defaultValue=""
                                autoComplete="price"
                                control={control}
                                rules={{ required: true }}
                            />
                            <Button   type="submit" autoFocus color="primary" variant="contained">
                                Добавить
                            </Button>
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={handleClose} color="primary" variant="contained">
                            Вернутся
                        </Button>
                    </DialogActions>
                </Dialog>
            </main>
            <footer className={classes.footer}>
                <Container maxWidth="lg" className="footer_list">
                    <img src="../img/photo_2020-05-18_14-45-15.jpg" alt="Картинка"/>
                    <div className="text_footer">
                       <h2>Максим Павленко</h2>
                        <div className="text_title">Студент работает, пытается успеть всё сделать<br/>
                        Трудолюбив <br/>Работает Front-end разработчиком
                        </div>
                        <div className="text_date">18.05.2020</div>
                    </div>

                </Container>
            </footer>
            <Dialog
                open={openTwo}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Продукт добавлен</DialogTitle>
            </Dialog>
        </Container>

    );
}
Home.propTypes = {
    sections: PropTypes.array,
    title: PropTypes.string,
};