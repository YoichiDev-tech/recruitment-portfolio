import type { IconType } from "react-icons";

type SkillBadgeProps = {
  skill: string;
  icon?: IconType;
  color?: string;
};

export default function SkillBadge({ skill, icon: Icon, color }: SkillBadgeProps) {
  return (
    <div className="switch-plate">
      <span className="switch-toggle" aria-hidden="true" />
      {Icon && <Icon size={16} color={color} className="shrink-0" aria-hidden="true" />}
      <span className="text-sm font-mono text-ink min-w-0 flex-1 break-words leading-snug">
        {skill}
      </span>
    </div>
  );
}