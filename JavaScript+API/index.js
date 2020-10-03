
function Leer() {
    const peli = document.getElementById("input").value;
    //obtain an apikey on this web
    //http://www.omdbapi.com/apikey.aspx
    const key='';
    buscar2(peli,key);
}

function buscar1(peli,key){

    const api_url=`http://www.omdbapi.com/?s=${peli}&apikey=${key}`

    fetch(api_url)
      .then(data => {
        return data.json()
      }).then(resultado=>{

            console.log(resultado);

            const {Search=[]} = resultado;
            
            console.log(Search);
            document.getElementById("lista").innerHTML='';

            Search.map((p)=>{
                document.getElementById("lista").innerHTML+=`<div style="width:30;">
                         <img width='100%' src=${p.Poster} alt="No hay poster"></img>
            </div>`;
            })
            
            
      });
}

const buscar2=async(peli,key)=>{

    const api_url=`http://www.omdbapi.com/?s=${peli}&apikey=${key}`
    const data= await fetch(api_url);
    const respuesta= await data.json();
    const Search = await respuesta.Search;

    console.log(Search);

    if(Search!=null)
    {   
        document.getElementById("lista").innerHTML='';
        Search.map((p)=>{
                document.getElementById("lista").innerHTML+=`<div style="width:30;">
                    <img width='100%' src=${p.Poster} alt="No hay poster"></img></div>`;
        })

    }

}    

     
const buscar3=async(peli,key)=>{

    const api_url=`http://www.omdbapi.com/?s=${peli}&apikey=${key}`
    const respuesta= await axios(api_url);
    const Search = await respuesta.data.Search;
    console.log(Search);

    
    if(Search!=null)
    {
        document.getElementById("lista").innerHTML='';
        
        Search.map((p)=>{
                document.getElementById("lista").innerHTML+=`<div style="width:30;">
                    <img width='100%' src=${p.Poster} alt="No hay poster"></img></div>`;
        })

    }

}    
