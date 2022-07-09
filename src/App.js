import style from './App.module.css';
import Users from "./components/block_1/Users/Users";
import Form from "./components/block_2/Form/Form";
import TodoItem from "./components/block_2/TodoItem/TodoItem";
import Posts from "./components/block_3/Posts/Posts";


function App() {

    return (
    <div className="App">
        <div className={style.main}>
            <div className={style.block1}>
                <Users></Users>
            </div>
            <div className={style.block2}>
                <Form></Form>
                <TodoItem></TodoItem>
            </div>
            <div className={style.block3}>
                <Posts></Posts>
            </div>
        </div>
    </div>
  );
}

export default App;
