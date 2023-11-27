import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  query,
  orderBy,
  onSnapshot,
  addDoc, // Import addDoc
  deleteDoc, // Import deleteDoc
  doc, // Import doc
  serverTimestamp,
} from "firebase/firestore";
import { Card, Button, List, ListItemText, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import HeartAnimation from "pages/Presentation/animation";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import routes from "routes";
import bgImage from "assets/images/bgimage.jpg";
import MKInput from "components/MKInput";

const firebaseConfig = {
  apiKey: "AIzaSyCoF7Q6EH1Wh89vZFj550SGa65kC_M_Sno",
  authDomain: "charlotte-e2a79.firebaseapp.com",
  projectId: "charlotte-e2a79",
  storageBucket: "charlotte-e2a79.appspot.com",
  messagingSenderId: "897084488658",
  appId: "1:897084488658:web:e6f34de9265320e63de60b",
  measurementId: "G-MTXGNLDFFR",
};

initializeApp(firebaseConfig);
const firestore = getFirestore();

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [imageHeight, setImageHeight] = useState(0);

  useEffect(() => {
    const todosCollection = collection(firestore, "todos");
    const q = query(todosCollection, orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const todosData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTodos(todosData);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageHeight(img.height);
    };
    img.src = bgImage;
  }, [bgImage]);

  const addTodo = async () => {
    try {
      await addDoc(collection(firestore, "todos"), {
        text: newTodo,
        completed: false,
        timestamp: serverTimestamp(),
      });
      setNewTodo("");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await deleteDoc(doc(firestore, "todos", id));
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  return (
    <>
      <DefaultNavbar routes={routes} sticky />
      <MKBox
        minHeight={`${imageHeight}px`}
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "top",
        }}
      >
        <HeartAnimation />

        <MKBox
          marginTop={20}
          marginBottom={0}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="flex-start"
        >
          <MKTypography
            variant="h2"
            fontWeight="bold"
            textAlign="center"
            color="lilac"
            sx={{
              marginTop: 0,
              marginBottom: 0,
              // Multiple shadows to create the outline effect
              textShadow: `
    -1px -1px 0 #fff,  
    1px -1px 0 #fff,
    -1px 1px 0 #fff,
    1px 1px 0 #fff
  `,
            }}
          >
            Our Todo List !
          </MKTypography>
        </MKBox>
        <MKBox>
          <Card
            sx={{
              py: 2,
              mx: { xs: 3, lg: 2 },
              backgroundColor: "#e6d7ff",
              backdropFilter: "saturate(200%) blur(30px)",
              boxShadow: ({ boxShadows: { xxl } }) => xxl,
              border: "2px solid white",
              height: "150vh",
              marginBottom: "200px",
            }}
          >
            <MKBox
              display="flex"
              style={{
                backgroundColor: "#fff",
                borderRadius: "10px",
                marginLeft: "1rem",
                marginRight: "1rem",
              }}
            >
              <MKInput
                value={newTodo}
                width="100%"
                fullWidth
                onChange={(e) => setNewTodo(e.target.value)}
                style={{ bacgroundColor: "#fff" }}
              />
            </MKBox>
            <Button onClick={addTodo}>Add Todo</Button>
            <List>
              {todos.map((todo) => (
                <MKBox
                  key={todo.id}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  p={1}
                  style={{
                    backgroundColor: "#FFF4E4",
                    borderRadius: "10px",
                    marginLeft: "1rem",
                    marginRight: "1rem",
                    marginTop: "0.5rem",
                    marginBottom: "0.5rem",
                  }}
                  // Add more styling as needed
                >
                  <ListItemText
                    primary={todo.text}
                    primaryTypographyProps={{
                      style: {
                        textShadow: `
                        -1px -1px 0 #fff,  
                        1px -1px 0 #fff,
                        -1px 1px 0 #fff,
                        1px 1px 0 #fff
                    `,
                      },
                      color: "#b39ddb",
                      fontSize: "1rem",
                    }}
                  />
                  <IconButton onClick={() => deleteTodo(todo.id)}>
                    <DeleteIcon />
                  </IconButton>
                </MKBox>
              ))}
            </List>
          </Card>
        </MKBox>
      </MKBox>
    </>
  );
};

export default TodoList;
