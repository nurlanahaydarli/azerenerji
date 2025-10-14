
type iconType={
    fill?: string;
}
export default function UpperIcon({fill}:iconType) {
    return (
        <>
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.41 15.91L12 11.33L16.59 15.91L18 14.5L12 8.5L6 14.5L7.41 15.91Z" fill={fill ? fill: "#2CB898"} />
            </svg>

        </>
    )
}
