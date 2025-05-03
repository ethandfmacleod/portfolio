import { Button } from "@/components/ui/button"
import { FaFileDownload } from "react-icons/fa"

interface DownloadFileButtonProps {
    text: string
    href: string
    file: string
}

function DownloadFileButton({ text, href, file }: DownloadFileButtonProps) {
    return (
        <a href={href} download={file} className='p-0 m-0'>
            <Button className="justify-between px-4 bg-transparent hover:bg-yellow-600 border-2 border-white w-full">
                {text}
                <FaFileDownload />
            </Button>
        </a>
    )
}

export default DownloadFileButton