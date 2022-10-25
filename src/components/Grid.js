import axios from "axios";
import { format, parseISO } from "date-fns";
import { toast } from "react-toastify";

import { FaTrash, FaEdit } from "react-icons/fa";
import styled from "styled-components";
import { ptBR } from "date-fns/locale";
import { useEffect, useState } from "react";

const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 1120px;
  margin: 20px auto;
  word-break: break-all;
`
export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;

  @media (min-width: 500px) {
    ${(props)=> props.onlyWeb && "display: none"}
  }
`;

export const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center": "start")}
  width: ${(props) => (props.width ? props.width: "auto")}

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`

const Grid = () => {
  const [tasks, setTasks] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getTasks = async () => {
    try {
      const res = await axios.get("http://localhost:3333/task");
      setTasks(res.data);
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getTasks();
  }, [setTasks]);

  const handleEdit = (item) => {
    setOnEdit(item);
  };

  const handleDelete = async (id) => {
    await axios
      .delete("http://localhost:3333/task/" + id)
      .then(({ data }) => {
        const newArray = tasks.filter((task) => task.id !== id);

        setTasks(newArray);
        toast.success(data);
        
        
      })
      .catch(({ data }) => toast.error(data));

    setOnEdit(null);
  };
    return (
     <Table>
      <Thead>
        <Tr>
          <Th>Title</Th>
          <Th>Description</Th>
          <Th>Duration</Th>
          <Th>Date</Th>
        </Tr>
      </Thead>
      <Tbody>
        {tasks.map((item, i) => (
          <Tr key={i}>
            <Td width="30%">{item.title}</Td>
            <Td width="30%">{item.description}</Td>
            <Td width="30%">{item.duracao}</Td>
            <Td width="30%">{format(parseISO(item.date), 'd MMM yy',{ locale: ptBR})
          
            }</Td>
            <Td width="20%" onlyWeb>
              {item.fone}
            </Td>
            <Td alignCenter width="5%">
              <FaEdit onClick={() => handleEdit(item.id)} />
            </Td>
            <Td alignCenter width="5%">
              <FaTrash onClick={() => handleDelete(item.id)} />
            </Td>
          </Tr>
        ))}
      </Tbody>
     </Table>
    )
}

export { Grid }