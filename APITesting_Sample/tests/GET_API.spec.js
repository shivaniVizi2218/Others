const {test, expect} = require('@playwright/test');

test.only('should be able to send GET method request', async ({ request }) => {
    // let response =await request.fetch('https://jsonplaceholder.typicode.com/posts', {
    //     method : 'get'
    // })
    let response = await request.get('https://jsonplaceholder.typicode.com/posts')


//    console.log(response)                              //output with response code & ununderstandable
//    console.log(response.json())                       //Promise { <pending> }  
   const jsonResponse = await response.json();
    console.log(jsonResponse)                          //json format data
    // console.log("json length : ", jsonResponse.length)

//    console.log(response.body())                                       //difference b/w .json() & .body()  ?
//    const resBody = await response.body();
//    console.log(resBody);
//    console.log(JSON.parse(resBody))

   const status = await response.status();                //returns status code
   console.log("status code : ", status)

    const firstPost = jsonResponse[0]                     //returns first element from json array
//  console.log(firstPost)

    const {userId ,id ,title ,body} = firstPost            
        //-->by writing like this , no need to write firstPost.userId, etc in Assertions | Simply write userId

   expect(status).toBe(200)
   expect(jsonResponse.length).toBeGreaterThan(0)
   expect(userId).toBe(1)
   expect(id).toBe(1)
   expect(title).toBeTruthy()
   expect(body).toBeTruthy()


});
