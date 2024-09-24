interface IProps {
   tags: string[];
}

function TagsList({ tags }: IProps) {
   return (
      <div className="flex flex-wrap">
         {tags.map(tag => (
            <span className="mr-3" key={tag}>
               {tag}
            </span>
         ))}
      </div>
   );
}

export default TagsList;
