export default function Helpful() {
  return (
    <div>
      <small>Helpful? </small>
      <small onClick={() => sendHelpful}>Yes</small>
    </div>
  );
}

function sendHelpful() {}
