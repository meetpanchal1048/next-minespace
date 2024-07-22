import getData from "@/lib/getData";

export default async function page(){
    const shareLink = await getData();
    return(
        <>
        {shareLink.map((item) => (
            <div key={item.iD}>
                <h2>{item.title}</h2>
            </div>
        ))}
        </>
    )
}