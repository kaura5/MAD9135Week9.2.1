import Link from 'next/link'
export default function Films({films}){
    console.log(films)
    return(
        <div>
            <h1>Film List</h1>
            <ul>
                {films.map((film)=>(
                    <li key={film.episode_id}>
                        <Link href={'/films/'+film.episode_id}>{film.title}</Link>
                    </li>

                ))}
            </ul>
        </div>
    )
}


export async function getStaticProps(){
    const resp = await fetch('https://swapi.dev/api/films')
    const data = await resp.json();

    if(!data){
        return{
            notFound: true,
        }
    }
    return{
        props:{
            films: data.results //will be passed to the page components as props
        }
    }
}