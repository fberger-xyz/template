import { SVGProps } from 'react'

export default function DegenIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg {...props} className={props.className} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32" {...props}>
            <path fill="#888888" d="M16 24a8 8 0 0 0 6.85-3.89l-1.71-1a6 6 0 0 1-10.28 0l-1.71 1A8 8 0 0 0 16 24Z"></path>
            <path
                fill="#888888"
                d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm0 2a12 12 0 0 1 10.89 7H25a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1H5.11A12 12 0 0 1 16 4Zm0 24A12 12 0 0 1 4 16a11.86 11.86 0 0 1 .4-3H7v2a2 2 0 0 0 2 2h3.31a2 2 0 0 0 2-1.67l.52-3.33h2.34l.55 3.33a2 2 0 0 0 2 1.67H23a2 2 0 0 0 2-2v-2h2.6a11.86 11.86 0 0 1 .4 3a12 12 0 0 1-12 12Z"
            ></path>
        </svg>
    )
}
