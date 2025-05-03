import { PDFButton, PDFButtonProps } from "./PDFButton"

interface PDFButtonsProps {
    selectedDocument: number;
    setSelectedDocument: (index: number) => void;
}

function PDFButtons({ selectedDocument, setSelectedDocument }: PDFButtonsProps) {

    // Define initial buttons array
    const initialButtons: PDFButtonProps[] = [
        { text: "Dissertation", selected: selectedDocument === 0, onClick: () => { } },
        { text: "Literature Review", selected: selectedDocument === 1, onClick: () => { } },
        { text: "Project Proposal", selected: selectedDocument === 2, onClick: () => { } },
        { text: "Research Journal", selected: selectedDocument === 3, onClick: () => { } },
        { text: "EDS Poster", selected: selectedDocument === 4, onClick: () => { }, className: "bg-emerald-800 hover:bg-emerald-700" },
    ];

    // Update onClick handlers to set the selected document
    const buttons = initialButtons.map((button, index) => ({
        ...button,
        selected: index === selectedDocument,
        onClick: () => {
            setSelectedDocument(index)
        },
    }));

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {buttons.map((button, index) => {
                return (
                    <PDFButton
                        key={index}
                        text={button.text}
                        className={button.className}
                        onClick={button.onClick}
                        selected={button.selected}
                    />
                )
            })}
        </div>
    )
}

export default PDFButtons