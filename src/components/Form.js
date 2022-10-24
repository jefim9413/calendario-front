import styled from "styled-components"


const Form = ()=> {

    const FormContainer = styled.form`
        display: flex;
        align-items: flex-end;
        gap: 20px;
        flex-wrap: wrap;
        background-color: #fff;
        padding: 20px;
        box-shadow: 0px 0px 5px #ccc;
        border-radius: 5px;
    `

    const InputArea = styled.div` 
        dispay: flex;
        flex-direction: column;
    `

    const Input = styled.input`
        width: 100px;
        padding: 8 10px;
        border: 3px solid #bbb;
        border-radius: 5px;
        height: 35px;
    `

    const Label = styled.label``;

    const Button = styled.button`
        display: flex;
        margin: 0px auto;
        padding: 17px;
        cursor: pointer;
        border-radius: 5px;
        border: none;
        background-color: #2c73d2;
        color: while;
    `

    return (
        <FormContainer>
            <InputArea>
                <Label>Title </Label>
                <Input name="title"/>
            </InputArea>
            <InputArea>
                <Label>Description </Label>
                <Input name="description"/>
            </InputArea>
          
            <InputArea>
                <Label>Duration </Label>
                <Input name="duration"/>
            </InputArea>
            <InputArea>
                <Label>Date </Label>
                <Input name="date" type="date"/>
            </InputArea>
            <Button type="submit"> Salvar </Button>
        </FormContainer>
    )
}

export { Form }