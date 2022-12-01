import { FunctionComponent } from "react";
import { ReactReader } from "react-reader";

type EbookViewerProps = {
  url: string;
};

const EbookViewer: FunctionComponent<EbookViewerProps> = ({ url }) => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <ReactReader
        url={url}
      />
    </div>
  );
};

export default EbookViewer;
export type { EbookViewerProps };
