import classes from './downloadButton.module.css';

interface DownloadButtonProps {
  children: React.ReactNode;
  download: string;
  link: string;
  enable?: boolean;
}

export default function DownloadButton({children, download, link, enable = true} : DownloadButtonProps) {
  return (
    <a href={link} className={`${enable ? '' : `${classes.disable}`} ${classes.btn}`} download={download}>{children}</a>
  )
}
