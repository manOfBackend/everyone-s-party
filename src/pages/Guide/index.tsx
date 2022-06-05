import RowDivider from '@src/components/atoms/RowDivider';

/* eslint-disable react/react-in-jsx-scope */
const Guide = () => (
  <div>
    <div className="mt-10 text-xl font-bold">피클플러스 가이드</div>
    <div className="mb-4 text-gray-700">
      피클플러스는 &quot;계정 공유 요금제&quot;로 인해 생기는
      <br />
      고객들의 불편함을 해소하고,
      <br />
      기존에 보호받을 수 없었던 고객들의 돈을
      <br />
      안전하게 보호해 주고자 합니다
    </div>
    <RowDivider height="8px" className="bg-gray-200" />
  </div>
);

export default Guide;
