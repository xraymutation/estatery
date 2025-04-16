import React from "react";

interface AvatarDefaultProps {
  className?: string;
}

const AvatarDefault = ({ className }: AvatarDefaultProps) => {
  return (
    <svg
      width="72"
      height="72"
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M72 36C72 55.8823 55.8823 72 36 72C16.1177 72 0 55.8823 0 36C0 16.1177 16.1177 0 36 0C55.8823 0 72 16.1177 72 36ZM2.88 36C2.88 54.2917 17.7083 69.12 36 69.12C54.2917 69.12 69.12 54.2917 69.12 36C69.12 17.7083 54.2917 2.88 36 2.88C17.7083 2.88 2.88 17.7083 2.88 36Z"
        fill="#EAECF4"
      />
    </svg>
  );
};

export default AvatarDefault;
