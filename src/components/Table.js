import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Stack } from "react-bootstrap";

const Table = () => {
  const [username, setUsername] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      // console.log(response.data);
      setUsername(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <Container>
        <Stack>
          <Table striped bordered hover className="mt-5">
            <thead>
              <tr>
                <th>id</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {username.map((item) => {
                return (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Stack>
      </Container>
    </div>
  );
};

export default Table;
