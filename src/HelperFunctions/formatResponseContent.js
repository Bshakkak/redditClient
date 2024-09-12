import { subredditIcon } from "../Icons";

export const fetchAuthorIcon = async (author) =>{
    try{
        const response = await fetch(`https://www.reddit.com/user/${author}/about.json`);
        if(response.ok){
            let result = response.json();
            return result.data.snoovatar_img ? result.data.snoovatar_img : subredditIcon
        }else{
            return subredditIcon;
        }
    }catch(e){
        console.log(e);
    }
}

const formatNumbers = num => num.toString().length > 3 ? `${num.toString().slice(0, 3)}K` : num;

export function formatTimestamp(timestamp) {
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
  
export const formatResponseContent = (data) =>{
    let responses = data.data.children.map(item => ({
        id: item.data.id,
        votes: formatNumbers(item.data.score),
        title: item.data.title,
        postLink: `https://www.reddit.com${item.data.permalink}`,
        image: item.data.url_overridden_by_dest,
        profile: subredditIcon, //await fetchAuthorIcon(item.data.author),
        profileName: item.data.author,
        postTime: formatTimestamp(Number(item.data.created_utc)),
        commentsNumber: formatNumbers(item.data.num_comments),
        media: item.data.media ? item.data.media.reddit_video.fallback_url : null,
        isVideo: item.data.is_video,
        cross: item.data.crosspost_parent_list ? true : false,
        image_alt: item.data.crosspost_parent_list ? item.data.crosspost_parent_list[0]["url_overridden_by_dest"] : null,
        media_alt: item.data.crosspost_parent_list ? item.data.crosspost_parent_list[0]["media"] ? item.data.crosspost_parent_list[0]["media"]["reddit_video"]["fallback_url"] : null : null,
        isVideo_alt: item.data.crosspost_parent_list? item.data.crosspost_parent_list[0]["is_video"]: null,
        onreddit: item.data.is_reddit_media_domain,
        thumbnail: item.data.thumbnail ? item.data.thumbnail : null
    }));
    return responses;
};
