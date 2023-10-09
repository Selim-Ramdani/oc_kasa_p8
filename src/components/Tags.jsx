function Tags({ tags }) {
  return (
    tags &&
    Array.isArray(tags) && (
      <ul className="accommodations-container__tags">
        {tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
    )
  );
}

export default Tags;
