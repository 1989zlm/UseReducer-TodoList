import { useReducer } from "react";
import { reducer, initialState } from "./reducers/todoReducer";

// const reducer = ()=>{

// }buraya yazdığımız reducer fonk.nu todoreducer olarak yeni bir js. dosya açtık

export const TodoList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    //inputtaki yazıya erişme..
    const text = e.target[0].value;
    // console.log(text);

    //kaydedilecek objeyi hazırla
    const newTodo = {
      id: new Date().getTime(),
      title: text,
    };
    // console.log(newTodo);

    //veriyi reducerdaki state kaydet
    // artık actionlar birer obje olucak(zaten consoldada obje olarak göründü)
    // type değeri görevi tanımlar
    //payload değeri veriyi tanımlar
    dispatch({
      type: "ekle",
      payload: newTodo, //buradan reducera geçtik gelen emre göre statein nasıl değişeceğine karar verdiğini görücez
    });

    // formdaki butun inputları sil (input eğer formun içineyse onu silecek olan formul)
    e.target.reset(); //e.target bize formu verir
  };

  return (
    <div
      className={state.isDarkMode ? "bg-dark text-white" : "bg-white text-dark"}
      style={{ width: "100wv", height: "100vh", padding: "20px" }}
    >
      <div className="d-flex justify-content-center my-5 ">
        <button
          className="bg-black text-white"
          onClick={() => {
            dispatch({
              type: "Mod_Değiş",
            });
          }}
        >
          Mod Değiştir
        </button>
      </div>

      <form onSubmit={handleSubmit} className="d-flex gap-3 align-items-center">
        <input className="form-control" />
        <button className="bg-black text-light ">Gönder</button>
        <button
          className="bg-black text-white"
          onClick={() =>
            dispatch({
              type: "temizle", //payloada gerek yok
            })
          }
          type="button"
        >
          Temizle
        </button>
      </form>
      <ul className="list-group my-5 ">
        {state.todos.map((todo) => (
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <span className="bg-light p-3 ">{todo.title}</span>
            <button
              onClick={() => {
                dispatch({
                  type: "kaldır",
                  payload: todo.id,
                });
              }}
              className="bg-danger text-light"
            >
              Sil
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
