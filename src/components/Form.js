import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const FormContainer = styled.form`
        display: flex;
        align-items: center;
        gap: 20px;
        flex-wrap: wrap;
        background-color: #fff;
        padding: 20px;
        box-shadow: 0px 0px 5px #ccc;
        border-radius: 5px;

        flex-direction: column;
    `

    const InputArea = styled.div` 
        dispay: flex;
        flex-direction: column;
    `

    const Input = styled.input`
        padding: 8 100px;
        border: 3px solid #bbb;
        border-radius: 5px;
        height: 35px;
        width: 330px;
    `

    const Label = styled.label`
        height: 35px;
        display: flex;
        align-items: center;
    
    `;

    const Button = styled.button`
        display: flex;
        margin: 0px auto;
        padding: 17px;
        cursor: pointer;
        border-radius: 15px;
        border: none;
        background-color: #2c73d2;
        color: while;
    `



const Form = ()=> {

    const {id }= useParams()

    const [task, setTask] = useState({
        title: "",
        description: "",
        duracao: "",
        date: ""
    })
    const [status, setStatus] = useState({
        type: '',
        mensagem: ''
    });
    const [tes, setTes] = useState()
    const [onEdit, setOnEdit ] = useState(null)
    const getTask = async () => {
        try {
          const res = await axios.get("http://localhost:3333/task/"+ id);
          
            task.title = res.data.title;
            task.description = res.data.description;
            task.duracao = res.data.duracao;
            task.date = Date(res.data.date);
            setOnEdit(true)

        } catch (error) {
          toast.error(error);
        }
      };
    
    useEffect(() => {
        if(id){
            getTask();
        }
    }, [setTes]);
    

    const evento = (e)=> {
        let nome = e.target.name;
        let valor = e.target.value;
        setTask({...task, [nome]: valor });
    }
    
    const handleSubmit = async (e) => {
         e.preventDefault();
         const user = task;
        if (
          !user.title ||
          !user.description ||
          !user.duracao||
          !user.date
        ) {
            setStatus({
                type: 'error',
                mensagem: "Usu??rio n??o cadastrado com sucesso!"
            });
          return toast.warn("Preencha todos os campos!");
        }
        if (onEdit) {
            await axios
              .put("http://localhost:3333/task/" + id, {
                title: user.title,
                description: user.description,
                date: new Date(user.date).toISOString(),
                duracao: parseInt(user.duracao) ,
              })
              .then(({ data }) => toast.success(data))
              .catch(({ data }) => toast.error(data));
          }else{
             await axios
                .post("http://localhost:3333/task", {
                    title: user.title,
                    description: user.description,
                    date: new Date(user.date).toISOString(),
                    duracao: parseInt(user.duracao) ,
                })
                .then(({ data }) => toast.success(data)) 
                .catch(({ data }) => toast.error(data));
            }
    
        user.title= ""
        user.description=""
        user.duracao=""
        user.date=""
        setTask(user)
            setOnEdit(null)
        setStatus({
            type: 'success',
            mensagem: "Usu??rio cadastrado com sucesso!"
        });
    }
    
    return (
        
        <FormContainer onSubmit={handleSubmit }>
            {status.type === 'success' ? <p style={{ color: "green" }}>{status.mensagem}</p> : ""}
            {status.type === 'error' ? <p style={{ color: "#ff0000" }}>{status.mensagem}</p> : ""}
            <InputArea>
                <Label>Title </Label>
                <Input name="title" type="text" value={task.title} onChange={evento} />
            </InputArea>
            <InputArea>
                <Label>Description </Label>
                <Input name="description" type="text" value={task.description} onChange={evento}/>
            </InputArea>
            <InputArea>
                <Label>Duration </Label>
                <Input name="duracao" type="number" value={task.duracao} onChange={evento}/>
            </InputArea>
            <InputArea>
                <Label>Date </Label>
                <Input name="date" type="date" value={task.date} onChange={evento}/>
            </InputArea>
            <Button type="submit"> Salvar </Button>
        </FormContainer>
        
    )
}

export { Form }