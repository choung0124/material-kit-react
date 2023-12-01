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
import { Card, List, ListItemText, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import HeartAnimation from "pages/Presentation/animation";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import routes from "routes";
import bgImage from "assets/images/bgimage.jpg";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";

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
          display: "flex", // Changed to flex for more control
          flexDirection: "column", // Stack children vertically
          justifyContent: "flex-start", // Align children to the start of the container
        }}
      >
        <HeartAnimation />
        <MKBox
          marginTop={20}
          marginBottom={0}
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          sx={{
            width: "100%",
            height: "10%",
          }}
        >
          <MKTypography
            variant="h2"
            fontWeight="bold"
            textAlign="center"
            color="lilac"
            sx={{
              marginTop: 0,
              marginBottom: 10,
              // Multiple shadows to create the outline effect
              textShadow: `
      -1px -1px 0 #fff4e4,  
      1px -1px 0 #fff4e4,
      -1px 1px 0 #fff4e4,
      1px 1px 0 #fff4e4
    `,
            }}
          >
            Our Todo List !
          </MKTypography>
        </MKBox>
        <MKBox display="flex" justifyContent="center" alignItems="center" marginBottom={5}>
          <Card
            sx={{
              width: { xs: "100%", sm: "50%", md: "33.333%", lg: "25%" }, // or fixed width in pixels
              py: 2,
              mx: { xs: 3, lg: 0 },
              backgroundColor: "#d3b8c3",
              backdropFilter: "saturate(200%) blur(30px)",
              boxShadow: ({ boxShadows: { xxl } }) => xxl,
              border: "2px solid #fff4e4",
            }}
          >
            <MKBox
              display="flex"
              style={{
                backgroundColor: "#fff4e4",
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
            <MKBox marginTop={1} display="flex" alignItems="center" justifyContent="center">
              <MKButton variant="text" color="beige" onClick={addTodo}>
                Add Todo
              </MKButton>
            </MKBox>
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
                      color: "#d3b8c3",
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
