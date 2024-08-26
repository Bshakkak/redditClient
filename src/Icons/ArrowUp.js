
function ArrowUp(props){
    return(
        <svg width={props.width} height={props.height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={props.style}>
            <path d="M5.08884 9.2945C5.26942 9.72155 5.69482 10 6.16669 10H9V21C9 21.5523 9.44772 22 10 22H14C14.5523 22 15 21.5523 15 21V10H17.8333C18.3052 10 18.7306 9.72155 18.9112 9.2945C19.0917 8.86744 18.9919 8.37588 18.6583 8.04902L12.825 2.33474C12.3693 1.88842 11.6307 1.88842 11.175 2.33474L5.34174 8.04902C5.00808 8.37588 4.90826 8.86744 5.08884 9.2945Z" fill={props.color}/>
        </svg>
    );
};

export default ArrowUp;