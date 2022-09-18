import React from "react"

interface Props {
    attributes?:{
        primary_image_url?:string;
        name?:string;
    }
    id?:string;
    relationships?: {
        primary_image: {
            data: {
                id:string;
                type: string;
            }
        }
    };
    type?: string;
    key?:string;
}

export const ResultCard = (props:Props):JSX.Element => {
    let {attributes, id , relationships,type } = props
    let primaryImgId = relationships ? relationships.primary_image.data.id : undefined
    

    return attributes ? (
        <li className="resultCard">
            <div className="imgBox"><img src={attributes.primary_image_url} alt="" /></div>
            <div className="description">
            {attributes.name}
            </div>
        </li>
    ) : <div>Loading...</div>
}