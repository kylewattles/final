import React from "react";



type ImageComponentProps = {
    image: string
}

const imageComponent: React.FC<ImageComponentProps> = ({image}) => {
    return (
        <div>
            <img src = {image} alt="labrador Retriever" style={{width: "100%", height: "auto"}} />
        </div>
    )
}

export default imageComponent