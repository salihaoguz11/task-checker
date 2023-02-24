import AddTask from "../components/addTask/AddTask";
import TaskList from "../components/taskList/TaskList";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useEffect } from "react";
import { axios } from "react";

const Home = () => {
  const [text, setText] = useState("Show Task Bar");
  const [isOpen, setIsOpen] = useState(false);
  const [task, setTask] = useState([]);
  const url = "https://63f7293b833c7c9c607dd928.mockapi.io/api/tasks";
  const toggle = () => {
    setIsOpen(!isOpen);
    const buttonText = isOpen ? "Show Task Bar" : "Hide Task Bar";
    setText(buttonText);
  };

  const getTask = async () => {
    const { data } = await axios(url);
  };

  useEffect(() => {
    getTask();
  }, []);
  return (
    <div className="mt-4 d-flex justify-content-center flex-column ">
      <Button onClick={() => toggle()} variant="danger">
        {text}
      </Button>
      <AddTask />
      <TaskList />
    </div>
  );
};

export default Home;
