import React from 'react';

function MapIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            {...props}>
            <path
                d="M24 22.586l-2.823-2.823A5 5 0 0017.013 12c-2.762 0-5 2.238-5 5s2.238 5 5 5a4.97 4.97 0 002.746-.827L22.586 24 24 22.586zM14.013 17c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3-3-1.346-3-3zm-4 0l.002-.034L7 19.141V6.073l4-2.886v10.247a7.037 7.037 0 012-2.161V3.187l4 2.886V10h.013c.336 0 .664.032.987.078V6.071l4-2.479v8.504a6.969 6.969 0 012 4.653V0l-6.455 4L12 0 6.455 4 0 0v18l6.455 4 3.91-2.82a6.962 6.962 0 01-.352-2.18zM6 19.365l-4-2.479V3.592l4 2.479v13.294z"
                fill="currentColor"
            />
        </svg>
    );
}

export default MapIcon;
