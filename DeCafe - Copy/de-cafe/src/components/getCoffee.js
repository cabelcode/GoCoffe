const  GetCoffee =  async ({extractData}) => {

    try {

           const respond = await fetch("http://localhost:3001/api");

           let result = await respond.json();

           if(respond.ok){

               result = result.coffee;

               extractData(result);
           }

       } catch (error) {
           console.log(error);
       }

   return null;
}

export default GetCoffee;