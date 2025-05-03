
interface PDFViewerProps {
    document: string;
}

function PDFViewer(props: PDFViewerProps) {

    return (
        <div>
            <object
                data={props.document}
                className="w-full h-[10vh] md:h-[90vh] rounded-lg"
                type="application/pdf"
            />
            <div className="border-4 border-red-800 rounded-lg bg-gray-800 p-4 md:hidden">
                If you are seeing this, online PDF preview isn't compatible with your browser. Please consider switching to desktop or downloading directly above.
            </div>
        </div>
    );
};

export default PDFViewer
