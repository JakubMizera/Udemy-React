import { useState, useEffect } from "react";
import youtube from '../APIs/youtube';

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);//OUTPUT FOR CUSTOM HOOK (videos)

    useEffect(() => {
        search(defaultSearchTerm);//INPUT FOR CUSTOM HOOK
    }, [defaultSearchTerm]);

    //OUTPUT FOR CUSTOM HOOK (search)
    const search = async (searchInput) => {
        const response = await youtube.get('/search', {
            params: {
                q: searchInput
            }
        });

        setVideos(response.data.items);
    };

    //can return object or array
    return [videos, search];
};

export default useVideos;