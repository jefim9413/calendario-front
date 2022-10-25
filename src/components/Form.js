import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

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
    
    const [task, setTask] = useState({
        title: "",
        description: "",
        duracao: "",
        date: ""
    })

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
          return toast.warn("Preencha todos os campos!");
        }
       
        const t =   await axios
            .post("http://localhost:3333/task", {
                title: user.title,
                description: user.description,
                date: new Date(user.date).toISOString(),
                duracao: parseInt(user.duracao) ,
              })
              .then(({ data }) => toast.success(data)) 
              .catch(({ data }) => toast.error(data));
    
        user.title= ""
        user.description=""
        user.duracao=""
        user.date=""
    }
    
    return (
        
        <FormContainer onSubmit={handleSubmit}>
             
            <InputArea>
                <Label>Title </Label>
                <Input name="title" type="text"  onChange={evento} />
            </InputArea>
            <InputArea>
                <Label> Description </Label>
                <Input name="description" type="text"  onChange={evento}/>
            </InputArea>
          
            <InputArea>
                <Label>Duration </Label>
                <Input name="duracao" type="number"  onChange={evento}/>
            </InputArea>
            <InputArea>
                <Label>Date </Label>
                <Input name="date" type="date" onChange={evento}/>
            </InputArea>
            <Button type="submit"> Salvar </Button>
           
        </FormContainer>
        
    )
}

export { Form }