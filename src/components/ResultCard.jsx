export const ResultCard = ({attributes,id,relationships,type}) => {
    console.log(attributes);
    return (
        <li className="resultCard">
            <div className="imgBox"><img src={attributes.primary_image_url} alt="" /></div>
            <div className="description">
            {attributes.name}
            </div>
        </li>
    )
}