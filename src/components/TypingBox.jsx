const TypingBox = ({ handleKeyPress }) => {
    return (
        <input
            type="text"
            autoFocus
            onKeyDown={handleKeyPress}
            className="typing-box"
        />
    );
};

export default TypingBox; 