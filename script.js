/*let username="PranavBarthwal"
let URL=`https://api.github.com/users/${username}`

fetch(URL)
  .then((response) => {
      return response.json()
  }).then((data) => {
      console.log(data)
      
      //displayData(data.url, data.explanation, data.title, data.date, data.copyright )
     
  })
  .catch((error) => console.log(error))*/

  async function getAllusers(){
    try{

    const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=eISHzmGbQk7EMWv9NTlVtvzZVmeLKPUoL3uKMSPJ')
    const data=response.json()
    console.log(data);
    } catch(error){
        console.log("E: ", error);
        
        
    }
}
getAllusers()
