import { useState, useRef } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [form, setForm] = useState({
    date: "",
    km: 0,
    id: "",
  });

  const [list, setList] = useState([]);

  const inputDateRef = useRef();
  const inputKmRef = useRef();

  const handleForm = ({ target }) => {
    const { name, value } = target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
      id: Math.random().toString(36).substring(5, 15),
    }));
  };

  const submitForm = (event) => {
    event.preventDefault();
    let isTheSameDate = false;
    list.forEach((el) => {
      if (el.date === form.date) {
        el.km = String(Number(el.km) + Number(form.km));
        isTheSameDate = true;
      }
    });
    if (isTheSameDate) {
      setList([...list]);
    } else {
      setList(
        [...list, form].sort(function (a, b) {
          let mydate = a.date.split(".");
          mydate = new Date(mydate[2], mydate[1] - 1, mydate[0]);
          let mydate2 = b.date.split(".");
          mydate2 = new Date(mydate2[2], mydate2[1] - 1, mydate2[0]);
          if (mydate < mydate2) {
            return 1;
          }
          if (mydate > mydate2) {
            return -1;
          }
          return 0;
        })
      );
    }

    inputKmRef.current.value = "";
    inputDateRef.current.value = "";
  };

  const modifyItem = (id) => {
    list.forEach((el) => {
      if (el.id === id) {
        inputDateRef.current.value = el.date;
        inputKmRef.current.value = el.km;
        setForm({
          date: el.date,
          km: el.km,
          id: el.id,
        });
        deleteItem(id);
      }
    });
  };

  const deleteItem = (id) => {
    setList([...list.filter((el) => el.id !== id)]);
  };

  return (
    <div className="App">
      <Form
        list={list}
        handleForm={handleForm}
        submitForm={submitForm}
        inputDateRef={inputDateRef}
        inputKmRef={inputKmRef}
      />
      {list.length > 0 ? (
        <List list={list} deleteItem={deleteItem} modifyItem={modifyItem} />
      ) : (
        <h3>Список пуст</h3>
      )}
    </div>
  );
}

export default App;
