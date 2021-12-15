import GetCoffee from "./getCoffee";

function Shop() {
 
    const handleCoffeeData = () => {
        
        try {
            
            const respond = await fetch("http://localhost:3001/api");
            
            let result = await respond.json();
    
            if(respond.ok){

                result = result.coffee;

                console.log(result);
            }
        
        } catch (error) {
            console.log(error);
        }

    }

    handleCoffeeData();

    return ( 
        <div className="shop">

            <h1>Coffee</h1>

            <div className="selection">
                <GetCoffee />
            </div>

        </div>
     );
}

export default Shop;