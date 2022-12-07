async function main(){
    let firstResponse = await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,rain,windspeed_10m&daily=sunrise,sunset&timezone=auto', {mode:'cors'})

    let finalResponse = await firstResponse.json();

    console.log(finalResponse);
}

main();