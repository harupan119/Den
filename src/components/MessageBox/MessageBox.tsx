interface MessageBoxProps {
  message: string
}

function MessageBox({ message }: MessageBoxProps) {
  return (
    <div className="message-box">
      <div className="message-content">
        <p>{message}</p>
      </div>
      <div className="message-tail"></div>
    </div>
  )
}

export default MessageBox
