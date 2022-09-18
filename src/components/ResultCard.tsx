import React, { useEffect, useState } from "react"


interface Props {
    attributes?:{
        primary_image_url?:string;
        name?:string;
    }
    imgArray:object[]
    id?:string;
    relationships?: {
        primary_image?: {
            data?: {
                id:string;
                type: string;
            }
        }
    };
    type?: string;
    key?:string;
}
interface srcProp {
    attributes?: {
        url?:string
    }
}
export const ResultCard = (props:Props):JSX.Element => {
    let {attributes, id , relationships,type , imgArray} = props
    
    let [primaryImgId,setImgId] = useState<string | null>(null)
    let [picSrc,setPicSrc] = useState<string | null>(null)

    let src:srcProp = imgArray.filter((e:Props) => e.id === primaryImgId)[0]
    
    useEffect(() => {
        relationships.primary_image !== undefined
        ? setImgId(relationships.primary_image.data.id)
        : setImgId(null)

        src !== undefined
        ? setPicSrc(src.attributes.url)
        : setPicSrc(null)
    },[primaryImgId])

    return attributes ? (
        <li className="resultCard">
            <div className="imgBox"><img src={picSrc} alt="" /></div>
            <div className="description">
            {attributes.name}
            </div>
        </li>
    ) : <div>Loading...</div>
}