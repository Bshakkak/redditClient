import { subredditIcon } from "../Icons";

export const fetchAuthorIcon = async (author) =>{
    try{
        const response = await fetch(`https://www.reddit.com/user/${author}/about.json`);
        if(response.ok){
            let result = await response.json();
            return result.data.snoovatar_img ? result.data.snoovatar_img : subredditIcon
        }else{
            return subredditIcon;
        }
    }catch(e){
        console.log(e);
    }
}

// function extractText(htmlString) {
//   const parser = new DOMParser();
//   const doc = parser.parseFromString(htmlString, 'text/html');
//   return doc.body.textContent;  
// }

// function removeUrls(text) {
//   const urlRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
//   return text.replace(urlRegex, '');
// }

export const fetchComments = async (subreddit, id, title="")=>{
    try{
        let titleFormat = title.split(' ').join('_');
        const response = await fetch(`https://www.reddit.com/r/${subreddit}/comments/${id}/${titleFormat}.json`);
        // console.log(subreddit, id, titleFormat);
        if(response.ok){
          let result = await response.json();
          let comments = result[1].data.children.map(item =>({
            postId: id,
            id: item.data.id,
            Icon: subredditIcon,
            time: formatTimestamp(item.data.created_utc),
            name: item.data.author,
            comment: item.data.body
          }));
          // console.log(comments);
          return comments;
        }else{
          return []
        }
    }catch(e){
      // console.log(e);
      const altResponse = await fetch(`https://www.reddit.com/r/${subreddit}/comments/${id}.json`);
      if(altResponse.ok){
      let altResult = await altResponse.json();
      let altComments = altResult[1].data.children.map(item =>({
            postId: id,
            id: item.data.id,
            Icon: subredditIcon,
            time: formatTimestamp(item.data.created_utc),
            name: item.data.author,
            comment: item.data.body
          }));
          return altComments;
        }
      else{
      return [];
      }
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
        subreddit: item.data.subreddit,
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
