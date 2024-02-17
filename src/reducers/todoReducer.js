// başlangıç değeri

export const initialState = {
    todos: [], // dizinin ismi
    isDarkMode: true,
}

//reducer fonksiyonu
export const reducer = (state, action) => {
    switch (action.type) {
        case 'ekle':
            // console.log(action)
            // state'in önceki değerinden bir veri kaybetmeden
            // actionun payload'ı ile gelen todoyu diğer
            // _todoların arasına ekle
            return { // statein son değeri ne ise onu dönücez
                //! normalde böyle yapılır ama aktif olması için 
                //* todos: [{ id: 1708071186001, title: 'efef' }],
                //isDarkMode: true 
                //!bunu yaptık(siplit op. kullandık)
                ...state, //split operatörü nesne dağıtma op.
                todos: state.todos.concat(action.payload),
                //! todos:[...state.todos, action.payload]böylede olur
            }
        case 'kaldır':
            //2) actionın payloadı ile aldığımız id'li elemanı diziden kaldır
            //state.todos statein içindeki diziden
            // action.payload idli elemanı çıkar bunun içinde filter kullanıyoruz
            const filtred = state.todos.filter(
                (item) => item.id !== action.payload);
            console.log(filtred);

            //statein son halini belirli
            //1) önceki stateki bütün verileri tut
            return {
                ...state,// 1)
                todos: filtred, // 3)
            }
        case 'temizle':
            return {
                ...state,
                todos: [],
            }

        case 'Mod_Değiş':
            return {
                ...state,
                isDarkMode: !state.isDarkMode,

            }

        default:
            return state;
    }
}

//? 2) eğerki buradaki itemın idsi eşit değilse //? actionun payloadına(yani todo.id ye) de const filtred ata.