
type iconType={
    fill?: string;
}
export default function DownIcon({fill}:iconType) {
    return (
        <>
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.41 9.08984L12 13.6698L16.59 9.08984L18 10.4998L12 16.4998L6 10.4998L7.41 9.08984Z" fill={fill ? fill : "rgba(255, 62, 29, 1)"} />
            </svg>
        </>
    )
}
