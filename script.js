let submit = document.querySelector('.submit');
let city, Data;
submit.addEventListener('click', async function(val){
    city = document.querySelector('.cityInp').value
    Data = await getWeather()
    let result = document.querySelector('.result')
    result.innerText = `The Temp Of ${city} is ${Data.current.temp_c}°C`
    document.querySelector('.submit').style.display = "none"
})


async function getWeather() {
    try {
        let response = await fetch(`http://api.weatherapi.com/v1/current.json?key=5f7e49c47bfe406799e164636252804&q=${city}&aqi=no`)
        let data = await response.json()
        // console.log(data)
        return data
    }
    catch (error){
        console.log(`We Got An Error!! The Error Is ${error}`)
    }
}