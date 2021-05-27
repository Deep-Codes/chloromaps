import React from 'react';

function LabelsIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            {...props}>
            <path
                d="M24 20v1h-4v-1h.835c.258 0 .405-.178.321-.422l-.473-1.371h-2.231l-.575-1.59h2.295L18.81 12.54l-1.154 3.451-.879-2.498.921-2.493h2.222l3.033 8.516c.111.315.244.484.578.484H24zm-6-1h1v2h-7v-2h.532a.67.67 0 00.633-.887L12.349 16H6.117l-.815 2.113a.67.67 0 00.633.887H7v2H0v-2h.43a1.4 1.4 0 001.32-.935L7.257 3h3.952l5.507 15.065c.197.56.69.935 1.284.935zM7.114 13h4.238L9.093 6.801 7.114 13z"
                fill="currentColor"
            />
        </svg>
    );
}

export default LabelsIcon;
