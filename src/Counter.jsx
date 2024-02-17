import { useReducer } from "react"; //4)
import reducer from "./reducers/CounterReducer";

// const reducer = () => {}; 5)) //bu fonksiyonu burada yazabiliriz ama kalabalık olasın diye klasör açıyoruuz
const initialState = {
  //6) counterreducer dosyasında yazılı
  count: 0,
};

const Counter = () => {
  //1)
  //3)
  const [state, dispatch] = useReducer(reducer, initialState);

  //dispacth= sevk etmek
  //reducer= karar mekanizması
  //action= action

  /* 
  ! useReducer:
  * state yönetimi useState ile birlikte
  * yönetmesi zor olduğu durumlarda kullanılır.
  ? bize döndürdüğü değerler
  * count >>  state'in güncel hali
  * dispatch >> state'i güncellemek için verdiğimiz emirleri reducer'a aktaran method
  ? bizden istediği argümanlar
  * reducer >>  state'in nasıl değiceğine karar veren fonksiyon (karar mekanizması)
  * initialState >> tutucağımız veilerin ilk değeri
  */
  return (
    //2)
    <div className="d-flex gap-4 align-items-center">
      <button
        onClick={() => dispatch("Sıfırla")} //dispatch ettiğimiz herseycounterreducer.js de emir olarak yakalanıyor
        className="bg-info text-light "
      >
        sıfırla
      </button>
      <button
        onClick={() => dispatch("Azalt")} //7)
        className="bg-danger text-light"
      >
        azalt
      </button>
      <span className="lead text-light">{state.count}</span>
      <button
        onClick={() => dispatch("Arttır")}
        className="bg-success text-light"
      >
        arttır
      </button>
    </div>
  );
};

export default Counter;
