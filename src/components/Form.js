import styled from "styled-components"


const Form = ()=> {

    const FormContainer = styled.form`
        display: flex;
        align-items: flex-end;
        gap: 10px;
        flex-wrap: wrap;
        background-color: #fff;
        padding: 20px;
        box-shadow: 0px 0px 0px #ccc;
        border-radius: 5px;
    `

    const InputArea = styled.div` 
        dispay: flex;
        flex-direction: column;
    `

    const Input = styled.input`
        width: 120px;
        padding: 0 10px;
        border: 1px solid #bbb;
        border-radius: 5px;
        height: 40px;
    `

    const Label = styled.label``;

    const Button = styled.button`
        padding: 10px;
        cursor: pointer;
        border-radius: 5px;
        border: none;
        background-color: #2c73d2;
        color: while;
        height: 42px;
    `

    return (
        <FormContainer>
            <InputArea>
                <Label>Title</Label>
                <Input name="title"/>
            </InputArea>
            <InputArea>
                <Label>Description</Label>
                <Input name="description"/>
            </InputArea>
            <InputArea>
                <Label>Date</Label>
                <Input name="date" type="date"/>
            </InputArea>
            <InputArea>
                <Label>Duration</Label>
                <Input name="duration"/>
            </InputArea>
            <Button type="submit"> Salvar </Button>
        </FormContainer>
    )
}

export { Form }