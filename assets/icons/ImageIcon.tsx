import React from 'react';

function ImageIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            {...props}>
            <path
                d="M5 8.5a1.5 1.5 0 113.001.001A1.5 1.5 0 015 8.5zm9 .5l-2.519 4L9 11.04 5 17h14l-5-8zm8-4v14H2V5h20zm2-2H0v18h24V3z"
                fill="currentColor"
            />
        </svg>
    );
}

export default ImageIcon;
