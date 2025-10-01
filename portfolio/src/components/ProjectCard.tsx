type ProjectCardProps = {
  title: string;
  tech: string;
  link: string;
  imageSrc: string;
};

const ProjectCard = (props: ProjectCardProps) => {
  return (
    <div className="my-2 border border-gray-200 overflow-hidden h-96 flex flex-row rounded-lg hover:shadow-lg transition-shadow duration-300">
      <div className="w-1/2 h-full rounded-lg overflow-hidden flex flex-col p-4 gap-2 bg-white justify-center items-center">
        <h1 className="text-lg font-bold">
          {props.title}Title
        </h1>
        <p className="text-sm text-gray-500">
          {props.tech}Tech
        </p>
      </div>
      <div className="w-1/2 h-full flex flex-col justify-center items-center bg-gray-100 overflow-hidden justify-between p-4">
        {props.imageSrc && (
          <img
            src={props.imageSrc}
            alt={props.title}
            className="w-full h-48 object-cover"
          />
        )}
        Image
      </div>
    </div>
  );
};

export default ProjectCard;
