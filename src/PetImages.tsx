import React from "react";



type ImageComponentProps = {
    image: string
}

const imageComponent: React.FC<ImageComponentProps> = ({image}) => {
    return (
        <div>
            <img src = {image} alt="labrador Retriever" style={{width: "125px", height: "120px"}} />
        </div>
    )
}

export default imageComponent