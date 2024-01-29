import { API_KEY,API_URL} from "../config/api";

export const moviesearch=async({ movieName="",movieFilter=""})=>{

    try{
        const URL= API_URL+"/?apikey="+API_KEY+"&s="+movieName+"&type="+movieFilter;
        const fetchData= await fetch(URL);
        const data=await fetchData.json();
        console.log("try",data);
        return data;

    }
    catch(error){
        console.error(error);
        throw error;
    }
};