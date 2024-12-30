import { client } from "../lib/client";

const fetchBlog = async(query:string):Promise<any>=>{
    return await client.fetch(query);
}

export default fetchBlog;