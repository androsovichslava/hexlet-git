let integer_num = document.querySelector('#integer_num');
let numerator_num = document.querySelector('#numerator_num');
let denumerator_num = document.querySelector('#denumerator_num');
let exponenta_num = document.querySelector('#exponenta_num');

let integer_res = document.querySelector('#integer_res');
let numerator_res = document.querySelector('#numerator_res');
let denumerator_res = document.querySelector('#denumerator_res');

let calculate_button = document.querySelector('#calculate_button');
let result = document.querySelector('#result');
let result1 = document.querySelector('#result1');
let result2 = document.querySelector('#result2');

let i0 = document.querySelector('#i0');
let n0 = document.querySelector('#n0');
let d0 = document.querySelector('#d0');
let e0 = document.querySelector('#e0');

let i1 = document.querySelector('#i1');
let n1 = document.querySelector('#n1');
let d1 = document.querySelector('#d1');
let e1 = document.querySelector('#e1');

let i2 = document.querySelector('#i2');
let n2 = document.querySelector('#n2');
let d2 = document.querySelector('#d2');
let e2 = document.querySelector('#e2');

let i3 = document.querySelector('#i3');
let n3 = document.querySelector('#n3');
let d3 = document.querySelector('#d3');
let e3_1 = document.querySelector('#e3_1');
let e3_2 = document.querySelector('#e3_2');

let i4 = document.querySelector('#i4');
let n4 = document.querySelector('#n4');
let d4 = document.querySelector('#d4');
let e4 = document.querySelector('#e4');

let i5 = document.querySelector('#i5');
let n5 = document.querySelector('#n5');
let d5 = document.querySelector('#d5');


let i3_2 = document.querySelector('#i3_2');
let n3_2 = document.querySelector('#n3_2');
let d3_2 = document.querySelector('#d3_2');
let e3_1_2 = document.querySelector('#e3_1_2');
let e3_2_2 = document.querySelector('#e3_2_2');

let n4_2 = document.querySelector('#n4_2');
let d4_2 = document.querySelector('#d4_2');

let i5_2 = document.querySelector('#i5_2');
let n5_2 = document.querySelector('#n5_2');
let d5_2 = document.querySelector('#d5_2');

integer_num.addEventListener('input', inputHanler);
numerator_num.addEventListener('input', inputHanler);
denumerator_num.addEventListener('input', inputHanler);
exponenta_num.addEventListener('input', inputHanler);

let i_num, n_num, d_num, e_num;
function inputHanler() {
    console.log(this)
    switch (this) {
        case integer_num:
            i_num = parseInt(this.value);
            break;
        case numerator_num:
            n_num = parseInt(this.value);
            break;
        case denumerator_num:
            d_num = parseInt(this.value);
            break;
        case exponenta_num:
            e_num = parseInt(this.value);
            break;
        // default: ;
    }

    console.log(i_num, n_num, d_num, e_num)

    this.style.width = 10 + ((this.value.length + 1) * 8) + 'px';

}

calculate_button.addEventListener('click', calcHandler);
function calcHandler() {
    if (!e_num) e_num = 1;
    if (integer_num.value) {
        // console.log('есть')
        result1.style.display = 'flex';
        result2.style.display = 'none';
        i0.innerHTML = i_num;
        n0.innerHTML = n_num;
        d0.innerHTML = d_num;
        e0.innerHTML = e_num;

        // i1.innerHTML = i_num;
        // n1.style.display = 'flex';
        // n1.style.flexDirection = 'row';
        n1.innerHTML = `${i_num} x ${d_num} + ${n_num}`;
        d1.innerHTML = d_num;
        e1.innerHTML = e_num;


        n2.innerHTML = `${i_num * d_num + n_num}`;
        d2.innerHTML = d_num;
        e2.innerHTML = e_num;


        n3.innerHTML = `${i_num * d_num + n_num}`;
        d3.innerHTML = d_num;
        e3_1.innerHTML = e_num;
        e3_2.innerHTML = e_num;

        n4.innerHTML = `${(i_num * d_num + n_num) ** e_num}`;
        d4.innerHTML = `${d_num ** e_num}`;


        i5.innerHTML = `${Math.floor(((i_num * d_num + n_num) ** e_num) / (d_num ** e_num))}`
        n5.innerHTML = `${((i_num * d_num + n_num) ** e_num) % (d_num ** e_num)}`
        d5.innerHTML = `${d_num ** e_num}`





    } else {
        // console.log('нет')
        result1.style.display = 'none';
        result2.style.display = 'flex';



        n3_2.innerHTML = n_num;
        d3_2.innerHTML = d_num;
        e3_1_2.innerHTML = e_num;
        e3_2_2.innerHTML = e_num;

        n4_2.innerHTML = `${n_num ** e_num}`;
        d4_2.innerHTML = `${d_num ** e_num}`;

        let tempi = Math.floor((n_num ** e_num) / (d_num ** e_num));

        i5_2.innerHTML = `${tempi ? tempi : ""}`;
        n5_2.innerHTML = `${(n_num ** e_num) % (d_num ** e_num)}`;
        d5_2.innerHTML = `${d_num ** e_num}`;


    }

}