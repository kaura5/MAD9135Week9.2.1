
export default function Details({film}){
    console.log(film)
    return(
        <div>
            <h1>Film Details</h1>
            <p>{film.title}</p>
            <p>{film.opening_crawl}</p>
        </div>
    )
}

export async function getStaticPaths(){
    const resp = await fetch('https://swapi.dev/api/films/')
    const value = await resp.json();

    const paths = value.results.map((item)=>{
        return{
            params: {id: item.episode_id.toString()}
        }
    })

    return{
        paths,
        fallback: false
    }
}

export async function getStaticProps(context){
    const id = context.params.id
    const response = await fetch ('https://swapi.dev/api/films/' + id);
    const data = await response.json();
    
    if(!data){
        return{
            notFound: true,
        }
    }
    return{
            props:{
                film: data
            }
        }
    
}