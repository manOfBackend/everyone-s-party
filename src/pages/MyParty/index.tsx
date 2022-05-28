import React from 'react';
import { useNavigate } from 'react-router-dom';
import EmptyImage from '@src/assets/resource/empty_addParty.svg';
import ButtonCTA from '@src/components/atoms/ButtonCTA';

const MyParty = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-10">
      <div className="text-xl font-bold">파티를 추가하고</div>
      <div className="text-xl font-bold">OTT를 저렴하게 감상하세요.</div>
      <div className="text-sm text-gray-400 mt-4">
        커피 한잔값으로 즐기는 컨텐츠의 자유!
      </div>
      <div className="flex mt-10 place-content-center">
        <EmptyImage />
      </div>
      <div className="mt-40">
        <ButtonCTA btnColor="#4DCA9A" textColor="white" onClick={() => navigate('/add-party')}>
          서비스 시작하기
        </ButtonCTA>
      </div>
    </div>
  );
};

export default MyParty;
