import React, {
  HTMLAttributes, memo, PropsWithChildren, ReactElement,
} from 'react';
import cn from 'classnames';
import CheckedCircleV from '../../CheckedCircleV';
import CheckedV from '../../CheckedV';

interface OTTBoxProps extends Pick<HTMLAttributes<HTMLButtonElement>, 'onClick'> {
  clicked?: boolean;
  imgElement: ReactElement;
  text: string;
  isAvailableMatchingImmediately?: boolean;
}

const OTTBox = ({
  clicked, onClick, imgElement, text, isAvailableMatchingImmediately,
}: PropsWithChildren<OTTBoxProps>) => (
  <button
    type="button"
    onClick={onClick}
    className="flex flex-col items-center grow shrink-0 basis-[28%]"
  >
    <div className={cn('flex flex-col justify-center items-center relative w-full gap-1 bg-gray-100 rounded-xl py-3 h-[75px] hover:bg-green-100', { 'bg-green-100 border-green-300 border-2': clicked })}>
      {clicked && (
      <div className="flex items-center absolute top-2 right-2">
        <CheckedCircleV size="small" />
      </div>
      )}
      {imgElement}
      <span className="text-sm">{text}</span>
    </div>
    {
      isAvailableMatchingImmediately && (
        <div className="flex justify-between items-center">
          <CheckedV />
          <small>
            즉시매칭 가능
          </small>
        </div>

      )
    }

  </button>
);

export default memo(OTTBox);
