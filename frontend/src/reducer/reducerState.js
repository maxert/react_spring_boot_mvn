import React, {useReducer} from "react";
import {GET_DATA, LOG_IN, LOG_OUT,} from "./types";
import Axios from "axios";
import {AlertReducer} from "./reducer";
import {ReduceContext} from "./reducerContext";
import { useAlert } from 'react-alert'


export const ReducerState = ({ children }) => {
    const alert = useAlert();

  const initialState = {
    isLogin: localStorage.getItem("users") ? true : false,
      user_token: JSON.parse(localStorage.getItem("users")),
      date:null
  };
  const [state, dispatch] = useReducer(AlertReducer, initialState);

    const Registration = async (values) => {

        await Axios.post( "http://localhost:8080/api/users/add", {
            username: values.name,
            lastName:values.last_name,
            firstName:values.first_name,
            password: values.password,
            email:values.email
        }).then((res) => {
                LogIn(values)
            }).catch(error=>{
            alert.error(error.response.data.message)
        })
    };
    const sampleFunc = async ()=> {
        await Axios("/api/employee").then(res=>{

            dispatch({
                type: GET_DATA,
                payload: res.data,
            });
        });

    }
  //Залогиненый пользователь

  const LogIn = async (values) => {

    await Axios.post( "http://localhost:8080" + "/api/auth/login", {
      username: values.name,
      password: values.password,
    })
      .then((res) => {

        localStorage.setItem("users", JSON.stringify(res.data));
        debugger
        dispatch({
          type: LOG_IN,
          users_token: res.data,
        });
      }).catch(error=>{
            alert.error(error.response.data.message)
        })
  };
    const UpdateItems = async (values) => {

        await Axios.put( "http://localhost:8080" + "/api/employee/"+values.id, {
                id:values.id,
                title: values.title,
                productor: values.productor,
                model:values.model,
                type_processor:values.type_processor,
                ram:values.ram,
                hard_drive:values.hard_drive,
                diagonal:values.diagonal,
                price:values.price,
                created_User:values.created_User, created_Email:values.created_Email
            },
            {
                headers: {
                    Authorization: `Bearer_${initialState.user_token.token}`,
                },
            })
        await sampleFunc();

    };

    const DeleteItems = async (id) => {

        await Axios.delete( "http://localhost:8080" + "/api/employee/"+id,
            {
                headers: {
                    Authorization: `Bearer_${initialState.user_token.token}`,
                },
            })
        await sampleFunc();

    };
    const AddItems = async (values) => {
debugger
        await Axios.post( "http://localhost:8080" + "/api/employee", {
            title: values.title,
            productor: values.productor,
            model:values.model,
            type_processor:values.type_processor,
             ram:values.ram,
            hard_drive:values.hard_drive,
            diagonal:values.diagonal,
            price:values.price,
                created_User:values.created_User, created_Email:values.created_Email
        },
            {
                headers: {
                    Authorization: `Bearer_${initialState.user_token.token}`,
                },
            })
        await sampleFunc();

    };
  //Разлогинится
  const LogOut = () => {
    localStorage.removeItem("users");
    dispatch({
      type: LOG_OUT,
        user_token: null,
    });
  };


  return (
    <ReduceContext.Provider
      value={{
          DeleteItems,
          UpdateItems,
          sampleFunc,
          Registration,
          AddItems,
        LogIn,
        LogOut,
        none: state,
      }}>
      {children}
    </ReduceContext.Provider>
  );
};
