onmessage = async function (event){
    console.log('event ->')
    const delay = (ms: any) => new Promise((res) => setTimeout(res, ms));
    const searchAgain = async (n: number) => {
        try{
            const response = await fetch(
                "https://www.themealdb.com/api/json/v1/1/random.php"
            );
            const output = await response.json();
            console.log(output.meals[0]);
            if (n > 1) {
                await delay(1000);
                return searchAgain(n - 1);
            }
            return output.meals[0].strMeal;
        }catch{
            return 'Falha'
        }
    };
    const response = await searchAgain(event.data)
    postMessage(response)
}