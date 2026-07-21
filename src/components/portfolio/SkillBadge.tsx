export default function SkillBadge({ skill }: { skill: string }) {
  return (
    <span
      className="
        inline-block 
        px-3 py-1 
        text-sm 
        rounded-full 
        border 
        border-gray-300 
        bg-gray-100 
        text-gray-700
        transition 
        duration-200 
        hover:bg-blue-600 
        hover:text-white 
        hover:border-blue-600
        hover:scale-105
        cursor-pointer
      "
    >
      {skill}
    </span>
  );
}