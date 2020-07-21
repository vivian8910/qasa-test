import React from "react";

const getPath = (name: string, props: JSX.IntrinsicAttributes & React.SVGProps<SVGPathElement>) => {
    switch (name) {
        case "chevronLeft":
            return (
                <path
                    {...props}
                    d="M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z"
                />
            );
        case "chevronRight":
            return (
                <path
                    {...props}
                    d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z"
                />
            )
    }
}

const SVGIcon = ({
    name = "",
    style = {},
    fill = "#000",
    viewBox = "",
    width = "100%",
    className = "",
    height = "100%"
}) => (
        <svg
            width={width}
            style={style}
            height={height}
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            viewBox={viewBox}
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            {getPath(name, { fill })}
        </svg>
    );

export default SVGIcon;