export default function TextInImage (props: any) {
    let fname: string
    let text: string = props.text

    return (
        <div className="text-in-img">
            {props.fnames.map((data: string, key:number) => {
                fname = './' + data
                return <img src={fname} key={key}/>;
            })}
            <p>{text}</p>	
        </div>
    )
 }