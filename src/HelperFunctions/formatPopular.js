import { subredditIcon, homeIcon } from "../Icons";

const formatPopular = (data) =>{
    let result = [{
        id: 'home-reddit',
        name: 'Feed',
        icon: homeIcon,
        color: 'transparent',
        fetchURL: "https://www.reddit.com/.json"
    }];
    data.data.children.forEach(item => {
        let entery = {
            id: item.data.id,
            name: item.data.title,
            icon: item.data.icon_img ? item.data.icon_img : subredditIcon,
            color: item.data.primary_color ? item.data.primary_color : 'blue',
            fetchURL: `https://www.reddit.com${item.data.url}.json`
        }
        result.push(entery);
    });
    return result;
};

export default formatPopular;