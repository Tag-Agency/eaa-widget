
import React from 'react';

interface AxsCardProps {
  label: string;
  icon: React.ReactNode;
  isActive?: boolean;
  valueLabel?: string;
  onClick: () => void;
}

const AxsCard: React.FC<AxsCardProps> = ({ label, icon, isActive, valueLabel, onClick }) => {
  return (
    <button
      onClick={onClick}
      aria-pressed={isActive ? "true" : "false"}
      tabIndex={0}
      role="button"
      className={`
        flex flex-col items-center justify-between p-5 rounded-3xl border-2 transition-all duration-300
        ${isActive
          ? 'bg-blue-50 shadow-md scale-[1.02]'
          : 'border-gray-100 bg-white text-gray-700 hover:border-gray-300 hover:shadow-lg'
        }
        group min-h-[140px] w-full
      `}
      style={isActive ? { borderColor: 'var(--axs-primary)', color: 'var(--axs-primary)' } : {}}
    >
      {/* Icon and Label Container */}
      <div className="flex-1 flex flex-col items-center justify-center w-full gap-3">
        <div className={`transition-transform duration-300 ${isActive ? 'scale-110' : 'text-gray-400 group-hover:text-[var(--axs-primary)]'}`} style={isActive ? { color: 'var(--axs-primary)' } : {}}>
          {/* Fix: Explicitly cast icon to ReactElement with expected props to avoid type mismatch in cloneElement */}
          {React.isValidElement(icon) ? React.cloneElement(icon as React.ReactElement<any>, { size: 28 }) : icon}
        </div>

        <span className="text-[11px] font-black uppercase tracking-tight text-center leading-[1.2] px-1 w-full break-words">
          {label}
        </span>
      </div>

      {/* Status Badge */}
      <div className="h-6 flex items-center mt-2">
        {valueLabel ? (
          <span className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full shadow-sm transition-colors ${isActive
            ? 'text-white'
            : 'bg-gray-100 text-gray-500 group-hover:bg-gray-200'
            }`} style={isActive ? { backgroundColor: 'var(--axs-primary)' } : {}}>
            {valueLabel}
          </span>
        ) : (
          <div className={`w-2 h-2 rounded-full transition-colors ${!isActive && 'bg-gray-200'}`} style={isActive ? { backgroundColor: 'var(--axs-primary)' } : {}} />
        )}
      </div>
    </button>
  );
};

export default AxsCard;
