import { subredditIcon } from "../Icons";

const fetchAuthorIcon = async (author) =>{
    try{
        const response = await fetch(`https://www.reddit.com/u/${author}/about.json`);
        if(response.ok){
            let result = response.json();
            return result.data.icon_img;
        }else{
            return subredditIcon;
        }
    }catch(e){
        console.log(e);
    }
}

function formatTimestamp(timestamp) {
    const now = new Date();
    const timestampDate = new Date(timestamp * 1000); // Convert Unix timestamp to milliseconds
  
    const diffInMilliseconds = now - timestampDate;
    const diffInSeconds = Math.floor(diffInMilliseconds / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);
  
    if (diffInDays > 0) {
      return `${diffInDays} days ago`;
    } else if (diffInHours > 0) {
      return `${diffInHours} hours ago`;
    } else if (diffInMinutes > 0) {
      return `${diffInMinutes} minutes ago`;
    } else {
      return 'just now';
    }
  }
  
const formatResponseContent = async (data) =>{
    let responses = await data.data.children.map(async item => ({
        id: item.data.id,
        votes: item.data.score,
        title: item.data.title,
        image: item.data.url_overridden_by_dest,
        profile: await fetchAuthorIcon(item.data.author),
        profileName: item.data.author,
        postTime: formatTimestamp(Number(item.data.created_utc)),
        commentsNumber: item.data.num_comments,
    }));
    return responses;
};

export default formatResponseContent;