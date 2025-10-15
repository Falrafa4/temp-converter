// definisi variable untuk DOM
const inputs = document.querySelectorAll('.input');
const celcius = document.getElementById('celcius');
const fahrenheit = document.getElementById('fahrenheit');
const reamur = document.getElementById('reamur');
const kelvin = document.getElementById('kelvin');
const outputAdvice = document.getElementById('advice');

// set value ke elemen dari localstorage (kalau ada)
celcius.value = localStorage.getItem('celcius');
fahrenheit.value = localStorage.getItem('fahrenheit');
reamur.value = localStorage.getItem('reamur');
kelvin.value = localStorage.getItem('kelvin');
outputAdvice.innerHTML = localStorage.getItem('output');

// converter
inputs.forEach(input => {
    input.addEventListener('change', event => {
        console.log("halo");
        const currentValue = parseInt(event.target.value);

        // validasi input apabila kosong atau bukan angka
        if (isNaN(currentValue) || currentValue == '') {
            celcius.value = '';
            fahrenheit.value = '';
            reamur.value = '';
            kelvin.value = '';
            outputAdvice.innerHTML = '<em style="color: red;">Please enter a valid number</em>';

            localStorage.setItem('celcius', '');
            localStorage.setItem('fahrenheit', '');
            localStorage.setItem('kelvin', '');
            localStorage.setItem('reamur', '');
            localStorage.setItem('output', '');
            return;
        }

        switch (event.target.name) {
            case 'celcius':
                fahrenheit.value = ((9 / 5) * currentValue + 32).toFixed(2);
                kelvin.value = (currentValue + 273.15)
                reamur.value = ((4 / 5) * currentValue).toFixed(2)
                break;

            case "fahrenheit":
                celcius.value = ((5 / 9) * (currentValue - 32)).toFixed(2);
                kelvin.value = ((5 / 9) * (currentValue - 32) + 273.15).toFixed(2);
                reamur.value = ((4 / 9) * (currentValue - 32)).toFixed(2);
                break;

            case "kelvin":
                celcius.value = (currentValue - 273.15).toFixed(2);
                fahrenheit.value = ((9 / 5) * (currentValue - 273.15) + 32).toFixed(2);
                reamur.value = ((4 / 5) * (currentValue - 273.15)).toFixed(2);
                break;

            case "reamur":
                celcius.value = ((5 / 4) * currentValue).toFixed(2);
                fahrenheit.value = ((9 / 4) * currentValue + 32).toFixed(2);
                kelvin.value = ((5 / 4) * currentValue + 273.15).toFixed(2);

            default:
                break;
        }

        // Cek rentang suhu (celcius) untuk saran aktivitas
        if (celcius.value < 0) {
            outputAdvice.innerHTML = "The weather is very cold. Stay indoors, drink warm beverages, wear warm clothing";
        }

        else if (celcius.value >= 0 && celcius.value <= 15) {
            outputAdvice.innerHTML = "The weather is cold. Do light exercise, take a morning walk wearing a jacket, or drink warm beverages."
        }

        else if (celcius.value >= 16 && celcius.value <= 27) {
            outputAdvice.innerHTML = "The weather is normal. Maybe. You can do normal activities such as cycling, exercise, and walk."
        }

        else if (celcius.value >= 28 && celcius.value <= 35) {
            outputAdvice.innerHTML = "The weather is hot. Stay hydrated, wear light clothing, and avoid prolonged exposure to the sun.";
        }

        else if (celcius.value > 35) {
            outputAdvice.innerHTML = "The weather is very hot. Avoid strenuous outdoor activities, use sunscreen, and stay in air-conditioned rooms if possible.";
        }


        // simpan nilai suhu ke localstorage agar user bisa lihat perhitungan sebelumnya tanpa kehilangan saat di-refresh
        localStorage.setItem('celcius', celcius.value);
        localStorage.setItem('fahrenheit', fahrenheit.value);
        localStorage.setItem('kelvin', kelvin.value);
        localStorage.setItem('reamur', reamur.value);
        localStorage.setItem('output', outputAdvice.innerHTML);
    })
});

document.getElementById('clear').addEventListener("click", () => {
    celcius.value = '';
    fahrenheit.value = '';
    reamur.value = '';
    kelvin.value = '';
    outputAdvice.innerHTML = '';

    localStorage.setItem('celcius', '');
    localStorage.setItem('fahrenheit', '');
    localStorage.setItem('kelvin', '');
    localStorage.setItem('reamur', '');
    localStorage.setItem('output', '');
})