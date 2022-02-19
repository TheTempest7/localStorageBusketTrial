 let basket = {
    '01': {
        'name': 'mt07',
        'count': 0,
    },
    '02': {
        'name': 'r1',
        'count': 0,
    },
    '03': {
        'name': 'cbr 1000',
        'count': 0,
    },
    '04': {
        'name': 'gxr 1000',
        'count': 0,
    },
}


let out = document.querySelector('.out');
let out2 = document.querySelector('.out2');
let out3 = document.querySelector('.out3');
let out4 = document.querySelector('.out4');



document.onclick = event => {
        if (event.target.classList.contains('grid__add')) {

            functionAdd(event.target.dataset.id);
            //console.log(event.target.dataset.id);
            // console.log(basket);

        }
        if (event.target.classList.contains('grid__discard-body')) {
            functionDisc(event.target.dataset.id);
        }
    }
    // добавлениедобавление

const functionAdd = id => {
    if ((basket[id]['count'] >= 0) && id === '01') {
        basket[id]['count']++;
        renderBasket();
        out.innerHTML = `${basket[id]['count']}`

    }
    if((basket[id]['count'] ===NaN)&& id === '01')
    {
        basket[id]['count']=1; 
        renderBasket();
        out.innerHTML = `${basket[id]['count']}`
    }
    if ((basket[id]['count'] >= 0) && id === '04') {
        basket[id]['count']++;
        renderBasket();
        out4.innerHTML = `${basket[id]['count']}`

    }
    if ((basket[id]['count'] >= 0) && id === '03') {
        basket[id]['count']++;
        renderBasket();
        out3.innerHTML = `${basket[id]['count']}`

    }
    if ((basket[id]['count'] >= 0) && id === '02') {
        basket[id]['count']++;
        renderBasket();
        out2.innerHTML = `${basket[id]['count']}`

    }
  
    //if (!(basket[id].contains['count'])) {
    //   let k = basket[id];
    // k.count = 1;

    //}

}

const renderBasket = () => {
    console.log(basket);

}
renderBasket();
///Удаление из корзины
const functionDisc = id => {
    if (basket[id]['count'] - 1 == -1) {
        deleteFunction(id);
        return true;

    }
    basket[id]['count']--;
    renderBasket();
};
//удаление элемента
const deleteFunction = id => {

    delete basket[id]['count'];
    renderBasket();



}