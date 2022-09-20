import { FunctionComponent } from "react";
import { ReactReader } from "react-reader";


type EbookViewerProps = {
    url: string;
}


const EbookViewer: FunctionComponent<EbookViewerProps> = ({ url }) => {
    return <ReactReader url={url}/>
}

export default EbookViewer;
export type { EbookViewerProps };
