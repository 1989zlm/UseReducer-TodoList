/*
 ! state'in nasıl değişeceğine karar veren fonksiyon
 *  aldığı parametreler
 *  >> state'in son hali
 *  >> aldğı emir (dispatch edilen action)
 
 ! reducer fonksiyonun döndürdüğü değer state'in son değeri olur 
*/


const reducer = (state, emir) => { //emir=action

    if (emir === 'Sıfırla') {
        return {
            count: 0,
        }
    }

    if (emir === 'Arttır') {
        return { //statein son değeri olmasını istiyoruz o yuzden return yazarız
            count: state.count + 1, // obje olduğu için bunada count: dedik
        }
    }
    if (emir === 'Azalt') {
        return {
            count: state.count - 1,
        }
    }

}

export default reducer