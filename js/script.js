const binary = document.getElementById('input-binary')
const decimal = document.getElementById('input-decimal')

const bin2dec = document.getElementById('btn-binary')
const dec2bin = document.getElementById('btn-decimal')

const errorbin = document.getElementById('input-error-binary')
const errordec = document.getElementById('input-error-decimal')

const allowMultiple = document.getElementById('allow-multiple')

bin2dec.onclick = () => {
    if (!binary.value) {
        return errorbin.innerText = 'Please enter a value'
    }

    binary.value.split('').map((char) => {
        if (char !== '0' && char !== '1') {
            return alert('Binary numbers only consists of 0s and 1s')
        };
    });

    decimal.value = parseInt(binary.value, 2)
}

dec2bin.onclick = () => {
    if (!decimal.value) {
        return errorbin.innerText = 'Please enter a value'
    }

    let value = decimal.value
    let bin = 0
    let rem
    let i = 1

    while (value != 0) {
        rem = value % 2;
        value = parseInt(value / 2);
        bin = bin + rem * i;
        i = i * 10;
    }

    binary.value = bin
}
