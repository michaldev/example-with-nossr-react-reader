import { FunctionComponent, useState } from "react";
import { ReactReader } from "react-reader";

type EbookViewerProps = {
  url: string;
};

const EbookViewer: FunctionComponent<EbookViewerProps> = ({ url }) => {
  const [location,setLocation] = useState<string|number>(0)
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <ReactReader
        location={location}
        locationChanged={setLocation}
        url={url}
      />
    </div>
  );
};

export default EbookViewer;
export type { EbookViewerProps };
