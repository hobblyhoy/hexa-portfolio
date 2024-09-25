interface IProps {
   tags: string[];
}

function TagsList({ tags }: IProps) {
   return (
      <div className="flex flex-wrap gap-x-3 gap-y-1">
         {tags.map(tag => (
            <span key={tag}>{tag}</span>
         ))}
      </div>
   );
}

export default TagsList;
