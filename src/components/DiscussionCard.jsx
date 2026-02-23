function DiscussionCard({ user, text }) {
  return (
    <div className="discussion">
      <strong>{user}</strong>
      <p>{text}</p>
    </div>
  );
}

export default DiscussionCard;