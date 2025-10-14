
type iconType = {
    fill?: string;
}
export default function UpLineIcon({ fill }: iconType) {
    return (

        <>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.29303 11.293L6.70703 12.707L11 8.414L11 18L13 18L13 8.414L17.293 12.707L18.707 11.293L12 4.586L5.29303 11.293Z" fill={fill ?? "#FF3E1D"} />
            </svg>


        </>
    )
}
