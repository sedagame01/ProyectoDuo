const claveApi = "xbetsmIHkKyH66M6d3D2QdkXkewdCIjr96pDsSaRxKvhiO317k53RgfV"

// obtenemos una pagina con colecciones
const coleccciones = async (claveApi,pag=1,final=15) => {

    try{
        //usamos el fetch mandondo la clave para que la lea y listo
        const respuesta = await fetch(`https://api.pexels.com/v1/collections/featured?page=${pag}&per_page=${final}`,{
            method:'GET',
            headers:{
                'Authorization':claveApi
            }
        })
        //se pasa la respuesta al json 
        if (!respuesta.ok){
            throw error
        }
            const datos = await respuesta.json()
            console.log(datos)
    }
    catch (error){
        throw console.log('la hemos liado ',error)
    }  
}

// obtener todas las colecciones
const todasColecciones = async()=>{
    let page=1
    let aux=true
    while (aux){
        const datos = await coleccciones(claveApi,page)
        if (!datos||datos.collections.length===0){
            aux=false
            break
        }
        page++
        
    }
}


const busquedaApi=async (clave,nombre) => {
    const aux = await fetch(`https://api.pexels.com/v1/search?query=${nombre}`,{
            method:'GET',
            headers:{
                'Authorization':clave
            }
        })
    const data = await aux.json()
    console.log(data)
    
}

busquedaApi(claveApi,'Tigers')
