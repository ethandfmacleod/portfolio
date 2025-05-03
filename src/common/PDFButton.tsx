import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface PDFButtonProps {
    text: string;
    selected: boolean;
    onClick: () => void;
    className?: string;
}

export function PDFButton(props: PDFButtonProps) {

    return (
        <Button
            onClick={props.onClick}
            className={cn('bg-red-700 hover:bg-red-600', (props.selected ? 'border-2 border-white' : ''), props.className)}
        >
            {props.text}
        </Button>
    )
}